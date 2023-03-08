import React from "react";
import "./films.scss";
import { useParams } from "react-router-dom";
import dataFilms from "../../data/dataFilms";

const Films = () => {
  const { id } = useParams();
  

  return (
    <div className="films-main">
      <div className="films-main__videos-wrapper">
        <div className="film-main__videos-wrapper__item">
            {dataFilms[id].videos.map(video => {
                console.log(video.miniature);
                return (
                    <video controls poster={video.miniature}>
                        <source src={video.videoUrl}/>
                    </video>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Films;
