import React from "react";
import { data } from "../../data/dataHome";
import { AnimatePresence, motion } from "framer-motion";
import "./home.scss";

const Home = (props) => {
  const { openMenu } = props;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        delay: 0.4,
        duration: 1,
      }}
      className="home-main"
    >
      <div className="home-main__gallerie-wrapper">
        {data.map((item, index) => {
          return (
            <div className={item.class}>
              <img
                loading="lazymotion."
                src={item.imageUrl}
                key={index}
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
