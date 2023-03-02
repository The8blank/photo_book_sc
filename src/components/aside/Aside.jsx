import React from "react";
import { motion } from "framer-motion";

import "./aside.scss";

const Aside = (props) => {
  const { openMenu, isMobile } = props;

  const variant = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
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
      <motion.h1 variants={variant}>SAMUEL CHOJNACKI</motion.h1>
      <motion.p variants={variant}>Model and Comedian</motion.p>
      <motion.ul>
        <motion.li
          variants={variant}
          whileHover={{
            scale: 1.2,
          }}
        >
          home
        </motion.li>
        <motion.li
          variants={variant}
          whileHover={{
            scale: 1.2,
          }}
        >
          series
        </motion.li>
        <motion.li
          variants={variant}
          whileHover={{
            scale: 1.2,
          }}
        >
          film
        </motion.li>
        <motion.li
          variants={variant}
          whileHover={{
            scale: 1.2,
          }}
        >
          about
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Aside;
