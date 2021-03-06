/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal({open, setOpen}) {

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
                      <span class="block text-red-800">Sign up </span>
                </h1>
                    <input 
                        type="text"
                        class="block mt-4 border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />
                    

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <button class="no-underline border-b border-grey-dark text-grey-dark" >
                            Terms of Service
                        </button> and 
                        <button class="no-underline border-b border-grey-dark text-grey-dark" >
                            Privacy Policy
                        </button>
                  </div>
                  <button onClick={() => setOpen(false)} className="mt-4 mx-auto whitespace-nowrap inline-flex w-full items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-red-700">
                    Sign up
                  </button>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <button class="no-underline border-b border-blue text-blue" >
                        Log in
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
