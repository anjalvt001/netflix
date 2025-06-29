import React from 'react'
import './Home.css';
import NavBar from '../../components/NavBar/NavBar';
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png';
import playIcon from '../../assets/play_icon.png';
import infoIcon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='Home'>
      <NavBar />
      <div className="hero">
        <img src={heroBanner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={heroTitle} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul 
            embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'>
              <img src={playIcon} alt="" />Play
            </button>
            <button className='btn dark-btn'> 
              <img src={infoIcon} alt="" />More Info
            </button>
          </div>
          <div className="title-cards">
            <TitleCards/>
          </div>
          
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={'Blockbuster Movies'} category={'popular'}/>
        <TitleCards title={'Only on Netflix'} category={'top_rated'}/>
        <TitleCards title={'Upcoming'} category={'upcoming'}/>
        {/* <TitleCards title={'Top Pics for You'} category={'popular'}/> */}
      </div>

      <Footer />
      
    </div>
  )
}

export default Home
