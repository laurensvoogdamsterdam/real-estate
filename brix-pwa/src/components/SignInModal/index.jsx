/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import useFirebase from '../../hooks/useFirebase';

export default function SignInModal({open, setOpen, goToSignUp}) {
  const { signinWithGoogle } = useFirebase();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-2 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div class="max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white rounded shadow-md text-black w-full">
                  <h1 class="text-3xl mt-10 font-extrabold sm:text-5xl md:text-6xl text-center">
                      <span class="block text-red-800">Sign in </span>
                  </h1>     
                  <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Let's find you a sweet home!
                  </p>  
                    <input 
                        type="text"
                        class="block mt-4 border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                  

                    
                  <button onClick={() => setOpen(false)} className="mt-4 mx-auto whitespace-nowrap inline-flex w-full items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-red-700">
                    Sign in
                  </button>
                  <button onClick={() => signinWithGoogle()} className="mt-4 mx-auto whitespace-nowrap inline-flex w-full items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium text-red-900 ">
                    <GoogleIcon size={16} className="mr-2" />Sign in with Google
                  </button>
                  <button className="mt-4 mx-auto whitespace-nowrap inline-flex w-full items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium text-red-800">
                    <FacebookIcon size={16} className="mr-2" /> Sign in with Facebook
                  </button>
                </div>

                <div class="text-grey-dark mt-6">
                    Don't have an account? 
                  <button onClick={() => goToSignUp()} class="ml-1 underline text-blue-600 hover:text-blue-800 visited:text-purple-600" >
                        Sign up
                    </button>.
                </div>
            </div>                                   
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
