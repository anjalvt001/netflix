import React from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzA0NjEwMDU2NzlkODBiM2EwZTYxOTA3MTM4YzZmYiIsIm5iZiI6MTc1MDg0NDU3NS40MjU5OTk5LCJzdWIiOiI2ODViYzQ5ZjU5ZmVhYzc2NGI5NGUyMzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.F10wAP0w8-49NZ93BlklWEcv6sgOkAcmbL9JjB0YSFo",
    },
  };

  const getAllData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          category ? category : "now_playing"
        }?language=en-US&page=1`,
        options
      );
      const data = await response.data;
      console.log("data", data);
      setApiData(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleWheel = () => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titleCards">
      <h2>{title ? title : "Populat on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            
              <Link to={`/player/${card.id}`} className="card" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                  alt="img"
                />
                <p>{card.original_title}</p>
              </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
