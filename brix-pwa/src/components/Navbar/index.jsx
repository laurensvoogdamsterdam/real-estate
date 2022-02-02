import React from "react";
import classNames from "classnames";
import SignUpModal from "../../components/SignUpModal";
import SignInModal from "../../components/SignInModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import useFirebase from "../../hooks/useFirebase";

export default function Navbar({ user, nav, currentRoute, setCurrentRoute }) {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const { signout } = useFirebase();

  const goToSignIn = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };

  const goToSignUp = () => {
    setSignInOpen(false);
    setSignUpOpen(true);
  };

  return (
    <nav className='hidden max-w-9xl mx-auto px-4 bg-gray-50 sm:flex '>
      <SignInModal
        open={signInOpen}
        setOpen={setSignInOpen}
        goToSignUp={goToSignUp}
      />
      <SignUpModal
        open={signUpOpen}
        setOpen={setSignUpOpen}
        goToSignIn={goToSignIn}
      />

      <div className='pl-4 pr-10'>
        <a href='/' className='flex items-center'>
          <h1 className='text-3xl font-extrabold sm:text-5xl md:text-6xl'>
            <span className='block text-red-800'>Brix </span>
          </h1>
        </a>
      </div>
      <div className='flex-1 flex flex-row justify-end items-center'>
        {user
          ? nav.protected.map((item, index) => (
              <Link
                className={classNames([
                  "w-22 text-gray-800 text-xl hover:text-red-800 hover:border-red-800 hover:border-b-4 font-semibold cursor-pointer font-large tracking-wide text-sm flex items-start justify-center py-4 px-4 pb-5",
                  currentRoute === item &&
                    "text-gray-800 border-b-3 border-gray-800 border-red-800 border-b-4 ",
                ])}
                key={index}
                onClick={() => setCurrentRoute(item)}
                to={item}>
                {item}
              </Link>
            ))
          : nav.public.map((item, index) => (
              <Link
                className={classNames([
                  "w-22 text-gray-800 text-xl hover:text-red-800 hover:border-red-800 hover:border-b-4 font-semibold font-large tracking-wide text-sm flex items-start justify-center py-4 px-4 pb-5",
                  currentRoute === item &&
                    "text-gray-800 border-b-3 border-gray-800 border-red-800 border-b-4 ",
                ])}
                key={index}
                onClick={() => setCurrentRoute(item)}
                to={item}>
                {item}
              </Link>
            ))}
      </div>
      {user ? (
        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0 z-20'>
          <Menu as='div' className='relative inline-block text-left'>
            <div>
              <Menu.Button className='inline-flex justify-center w-full rounded-full bg-white text-sm font-medium text-gray-800 hover:bg-gray-50  '>
                {/* <img
                  className='h-8 w-8 rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                /> */}
                <span className='inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-800'>
                  <span className='text-lg font-medium leading-none text-white'>
                    TW
                  </span>
                </span>
                <ChevronDownIcon
                  className='-mr-1 ml-2 h-5 w-5'
                  aria-hidden='true'
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'>
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}>
                        Account settings
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}>
                        Support
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}>
                        License
                      </button>
                    )}
                  </Menu.Item>
                  {/* <form method='POST' action='#'> */}
                  <Menu.Item onClick={() => signout()}>
                    {({ active }) => (
                      <button
                        onClick={() => signout()}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full text-left px-4 py-2 text-sm"
                        )}>
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                  {/* </form> */}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          <button
            onClick={() => setSignInOpen(true)}
            className='whitespace-nowrap text-base font-medium text-gray-800 hover:text-red-800'>
            Sign in
          </button>
          <button
            onClick={() => setSignUpOpen(true)}
            className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-red-700'>
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
}
