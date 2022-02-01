import React, { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
import { CgInbox } from "react-icons/cg";
import { Link } from 'react-router-dom'

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const getTabIcon = useCallback((item) => {
    switch (item.toLowerCase()) {
      case "home":
        return <AiFillHome />;
      case "discover":
        return <AiFillCompass />;
      case "store":
        return <BsFillBagFill />;
      case "inbox":
        return <CgInbox />;
      case "profile":
            return <BsFillPersonFill />;
      default:
            return null;
    }
  }, []);

  return (
    <nav className="flex md:hidden flex-row items-center justify-around px-8 z-30 h-18 py-3 bg-white visible md:invisible fixed  bottom-0 w-full rounded-t-3xl text-2xl">
      {navigationData.map((item, index) => (
          <Link
          className={classNames([
            "text-gray-400 hover:text-gray-700 cursor-pointer w-18 h-full flex items-center justify-center;",
            currentRoute === item && "bg-gradient-to-t from-white to-gray-100 border-t-3 border-gray-700 text-gray-700",
          ])}
          key={index}
          onClick={() => setCurrentRoute(item)}
          to={item}
        >            
          <span className="-mb-1">{getTabIcon(item)}</span>
        </Link>
        
      ))}
    </nav>
  );
};

export default Tabbar;