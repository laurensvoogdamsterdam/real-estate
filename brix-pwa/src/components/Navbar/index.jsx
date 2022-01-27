import React from "react";
import classNames from "classnames";


const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  return (
    <nav className='hidden md:flex m-3  bg-white shadow-md'>
      <div className='pl-4 pr-10'>
        <a href='/#' className='flex items-center'>
          <img
            className='w-10 h-10'
            src='https://cdn3.iconfinder.com/data/icons/random-4/96/brick-bricks-build-building-contruction-wall-512.png'
            alt='Brix'
          />
          <span className='font-semibold text-gray-500 text-2xl'> Brix </span>
        </a>
      </div>
      <div className='flex-1 flex flex-row justify-start pl-50 '>
        {navigationData.map((item, index) => (
          <a
            href='/#'
            className={classNames([
              "w-22 text-gray-500 text-xl hover:text-red-400 hover:border-red-400 hover:border-b-4 font-semibold cursor-pointer font-large tracking-wide text-sm flex items-start justify-center py-2 px-4 pb-5" ,
              currentRoute === item &&
                "text-gray-700 border-b-3 border-gray-700 bg-gradient-to-b from-white to-gray-100 border-red-400 border-b-4 ",
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}>
            {item}
          </a>
        ))}
      </div>
      <div className='my-auto'>
        <button className='bg-white hover:bg-gray-50 border-2 border-gray-900 text-sm text-gray-900 py-2 px-3 rounded-lg font-medium tracking-wide leading-none'>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
