import React from "react";
import "./series.scss";
import { useParams } from "react-router-dom";
import dataSeries from "../../data/dataSeries";
import { Slider } from "../../components";

const Series = () => {
  const { id } = useParams();

  return (
    <div className="series-main">
      <Slider>
        {dataSeries[id].images.map((img) => (
          <img src={img} loading="lazy"></img>
        ))}
      </Slider>
    </div>
  );
};

export default Series;
