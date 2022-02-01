import React, { useCallback } from "react";
import classNames from "classnames";
import { Link } from 'react-router-dom'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const getTabIcon = useCallback((item) => {
    switch (item.toLowerCase()) {
      case "home":
        return <DynamicFeedIcon />;
      case "discover":
        return <LabelImportantIcon />;
      case "store":
        return <AddBoxIcon />;
      case "inbox":
        return <SendIcon />;
      case "profile":
            return <InsertEmoticonIcon />;
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