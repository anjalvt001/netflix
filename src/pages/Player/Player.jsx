import React , { useState , useEffect } from 'react'
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
const Player = () => {

const [selectedData, setSelectedData] = useState({
  name:'',
  key:'',
  published_at:'',
  type:''
});

const { id } = useParams();
const navigate = useNavigate();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzA0NjEwMDU2NzlkODBiM2EwZTYxOTA3MTM4YzZmYiIsIm5iZiI6MTc1MDg0NDU3NS40MjU5OTk5LCJzdWIiOiI2ODViYzQ5ZjU5ZmVhYzc2NGI5NGUyMzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.F10wAP0w8-49NZ93BlklWEcv6sgOkAcmbL9JjB0YSFo'
  }
};

const getSelectedData = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,options);
    const data = await response.data;
    const filterTrailer = await data.results.filter((item) => item.type == 'Trailer');
    console.log("filterTrailer",filterTrailer); 
    setSelectedData(filterTrailer[0]);
  } catch (error) {
    console.error(error);
  }
}


useEffect(() => { 
  getSelectedData();

  
}, []);



  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => navigate(-1)}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${selectedData.key}`}
       title='trailer' frameBorder='0' allowFullScreen></iframe>
       <div className="player-info">
        <p>{selectedData.published_at.slice(0,10)}</p>
        <p>{selectedData.name}</p>
        <p>{selectedData.type}</p>
       </div>
    </div>
  )
}

export default Player
