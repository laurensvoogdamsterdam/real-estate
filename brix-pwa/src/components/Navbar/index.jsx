import React from "react";
import classNames from "classnames";

import { Link } from "react-router-dom";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  return (
    <nav class="hidden max-w-9xl mx-auto px-4 bg-gray-50 sm:flex ">
      <div className='pl-4 pr-10'>
        <a href='/#' className='flex items-center'>          
          <h1 class="text-3xl font-extrabold sm:text-5xl md:text-6xl">
                <span class="block text-red-800">Brix </span>
          </h1>
        </a>
      </div>
      <div className='flex-1 flex flex-row justify-end items-center'>
        {navigationData.map((item, index) => (
          <Link
            className={classNames([
              "w-22 text-gray-800 text-xl hover:text-red-800 hover:border-red-800 hover:border-b-4 font-semibold cursor-pointer font-large tracking-wide text-sm flex items-start justify-center py-4 px-4 pb-5",
              currentRoute === item &&
                "text-gray-800 border-b-3 border-gray-800 border-red-800 border-b-4 ",
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}
            to={item}
          >
            {item}
          </Link>
        ))}
      </div>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <button class="whitespace-nowrap text-base font-medium text-gray-800 hover:text-red-800">
            Sign in
          </button>
          <button  class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-red-700">
            Sign up
          </button>        
          <div className="ml-5">
            <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </button>
          </div>                
      </div>      
    </nav>
  );
};

export default Navbar;
