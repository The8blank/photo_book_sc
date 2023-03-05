import React from "react";
import { data } from "../../data/dataHome";
import {  motion } from "framer-motion";
import "./home.scss";

const Home = (props) => {
  const { openMenu } = props;

  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 500 }}
      transition={{
        delay: 0.4,
        duration: 0.8,
      }}
      className="home-main"
    >
      <div className="home-main__gallerie-wrapper">
        {data.map((item, index) => {
          return (
            <div className={item.class} key={index}>
              <img
                loading="lazymotion."
                src={item.imageUrl}
                alt="Samuel Chojnacki"
              ></img>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Home;
