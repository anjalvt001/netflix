import React, {useState} from 'react'
import './Login.css';
import Logo from '../../assets/logo.png';
import { auth, db } from '../../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import netflix_spinner from '../../assets/netflix_spinner.gif' 

const Login = () => {

  const [signState, setSignState] = useState("Sign In");
  const [name , setName ] = useState('');
  const [ email , setEmail ] = useState('');
  const [ password , setPassword ] = useState('');
  const [ loading , setLoading ] = useState(false);

  const navigate = useNavigate();

  const handleSign = (value ) => {
    setSignState(value);
    setEmail("");
    setName("");
    setPassword("");
  }

  const SignUp = async (name,email,password) => {
    // e.preventDefault();
    try {
      if(!name && !email && password){
        toast.error("Please enter credentials");
        return;
      }
      const res = await createUserWithEmailAndPassword(auth , email, password);
      const user = await res.user;
      await addDoc(collection(db,'users'),{
        uid:user.uid,
        name: name,
        email: email,
        authProvider:'local'
      });
      navigate('/');
      setEmail("");
      setName("");
      setPassword("");

    } catch (error) {
      console.log(error.message);
      toast.error(error.code.split('/')[1].split('-').join(" "));     
    }
  }


  const SignIn = async (email,password) => {
    // e.preventDefault();
    try {
      if(!email && !password){
       toast.error("Please enter credentials");
        return;
      }
      const res = await signInWithEmailAndPassword(auth,email,password);
      const user = await res.user;
      // alert('login successfully');
      toast.success("login successfully")
      navigate('/');
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      console.log(error.code.split('/')[1].split('-').join(" "));
      toast.error(error.code.split('/')[1].split('-').join(" "));    
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(signState == 'Sign Up'){
     await SignUp(name,email,password);
    }else{
     await SignIn(email,password);
    }
    setLoading(false);
  }

  return (
    loading ? <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div> :
    <div className='login'>
      <img src={Logo} alt="" className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          { signState == 'Sign Up' ? <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} placeholder='your name'/> : 
          <></>   }
          
          <input type="email" value={email} name='email' onChange={(e) => setEmail(e.target.value)} placeholder='your email'/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='password'/>
          <button type='submit' onClick={handleSubmit}>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {
            signState == 'Sign Up' ? <p>Already have an account? <span onClick={() => handleSign('Sign In')}>Sign In Now </span> </p> : <p>New to Netflix? <span onClick={() => handleSign('Sign Up')}>Sign Up Now </span></p>
          }     
        </div>
      </div>
    </div>
  )
}

export default Login
