import { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import useFirebase from "../../hooks/useFirebase";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function SignInModal({ open, setOpen, goToSignUp }) {
  const { auth } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  let navigate = useNavigate();

  const handleSignIn = () => {
    const response = signInWithEmailAndPassword(email, password);
    if (response) {
      setOpen(false);
      navigate("/home", { replace: true });
    }
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((response) => {
        setOpen(false);
        navigate("/home", { replace: false });
      })
      .catch((e) => console.log(e));
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        onClose={setOpen}>
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
            <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-2 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
              <div className='max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
                <div className='bg-white rounded shadow-md text-black w-full'>
                  <h1 className='text-3xl mt-10 font-extrabold sm:text-5xl md:text-6xl text-center'>
                    <span className='block text-red-800'>Sign in </span>
                  </h1>
                  <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                    Let's find you a sweet home!
                  </p>
                  <input
                    type='text'
                    className='block mt-4 border border-grey-light w-full p-3 rounded mb-4'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                  />

                  <input
                    type='password'
                    className='block border border-grey-light w-full p-3 rounded mb-4'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                  />

                  <button
                    onClick={() => handleSignIn()}
                    className='mt-4 mx-auto whitespace-nowrap inline-flex w-full items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-red-700'>
                    Sign in
                  </button>
                  <button
                    onClick={() => handleSignInWithGoogle()}
                    className='mt-4 mx-auto whitespace-nowrap inline-flex w-full items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium text-red-900 '>
                    <GoogleIcon size={16} className='mr-2' />
                    Sign in with Google
                  </button>
                  <button className='mt-4 mx-auto whitespace-nowrap inline-flex w-full items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium text-red-800'>
                    <FacebookIcon size={16} className='mr-2' /> Sign in with
                    Facebook
                  </button>
                </div>

                <div className='text-grey-dark mt-6'>
                  Don't have an account?
                  <button
                    onClick={() => goToSignUp()}
                    className='ml-1 underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                    Sign up
                  </button>
                </div>
                <div className='text-red-400 mt-6'>{error}</div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
