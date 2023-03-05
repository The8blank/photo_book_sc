import React, { useContext, useState, useEffect } from "react";
import { MenuContext } from "./../../containers/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronDown, FiMoreHorizontal } from "react-icons/fi";

const Submenu = ({ item, variant }) => {
  const { close, openMenu, isMobile, showList, setShowList } =
    useContext(MenuContext);

  const toggleList = () => {
    if (showList === item.title.toLowerCase()) {
      setShowList(null);
    } else {
      setShowList(item.title.toLowerCase());
    }
  };

  useEffect(() => {
    if (!openMenu) {
      setShowList(false);
    }
  }, [openMenu]);

  return (
    item.submenu && (
      <>
        <motion.p variants={variant} layout onClick={toggleList}>
          {item.title}
          {showList === item.title.toLowerCase() ? <FiMoreHorizontal/> : <FiChevronDown/>}
        </motion.p>
        <motion.ul layout>
          {item.submenu.map((sub, index) => {
            if (
              (showList === item.title.toLowerCase() && openMenu && isMobile) ||
              (showList === item.title.toLowerCase() && !isMobile)
            ) {
              return (
                <motion.li key={index}>
                  <Link
                    to={`${item.title.toLowerCase()}/${index}`}
                    onClick={() => {
                      toggleList();
                      close();
                    }}
                  >
                    {sub.title}
                  </Link>
                </motion.li>
              );
            }
            return null;
          })}
        </motion.ul>
      </>
    )
  );
};

export default Submenu;
