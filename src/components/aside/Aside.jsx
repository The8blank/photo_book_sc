import React, { Fragment, useContext, useEffect, useState } from "react";
import dataSidebar from "../../data/dataSidebar";
import { motion } from "framer-motion";
import { MenuContext } from "../../containers";

import "./aside.scss";
import { Link } from "react-router-dom";
import Submenu from "../submenu/Submenu";

const Aside = () => {

  const { close, isMobile, openMenu , setShowList} = useContext(MenuContext);

  const variant = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={!isMobile || openMenu ? "open" : "initial"}
      variants={variant}
      className="aside-main"
    >
      {/* SAMUEL CHOJNACKI */}
      <motion.h1 variants={variant}>SAMUEL CHOJNACKI</motion.h1>
      {/* PETIT TEXTE */}
      <motion.p variants={variant}>Model and Comedian</motion.p>

      {/* LINKS */}
      <ul className="aside-main__links-container">
        {dataSidebar.map((item, index) => {
          return (
            <Fragment  key={index}>
              <motion.li
              layout
                className="aside-main__links-container__link"
                variants={variant}
              >
                {/* LINKS */}
                {item.link && (
                  <Link
                    onClick={() => {
                      setShowList(false);
                      close();
                    }}
                    to={item.link}
                  >
                    {item.title}
                  </Link>
                )}

                {/* SUBMENU */}
              </motion.li>
                <Submenu item={item} variant={variant} />
            </Fragment>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Aside;
