
import SignUpModal from '../../components/SignUpModal';
import SignInModal from '../../components/SignInModal';
import  { useState } from 'react';

export default function Hero() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const goToSignIn = () => {
    setSignUpOpen(false)
    setSignInOpen(true)
  }

  const goToSignUp = () => {
    setSignInOpen(false)
    setSignUpOpen(true)
  }

    return (
      <div class="bg-gray-50">
        <SignInModal open={signInOpen} setOpen={setSignInOpen} goToSignUp={goToSignUp}/>
        <SignUpModal open={signUpOpen} setOpen={setSignUpOpen} goToSignIn={goToSignIn}/>
        <div class="relative overflow-hidden">
          
      
          <div class="relative pt-6 pb-16 sm:pb-24">
          
            <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div class="text-center">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 text-2xl md:text-6xl">
                  <span class="block sm:hidden text-red-800">Brix</span>
                </h1>
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                  <span class="block">To find  your</span>
                  <span class="block text-red-800">perfect home...</span>
                </h1>
                <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div class="block sm:hidden items-center justify-center mt-4">
                  <button onClick={()=>setSignInOpen(true)} class="whitespace-nowrap text-base font-medium text-gray-800 hover:text-red-800">
                    Sign in
                  </button>
                  <button onClick={()=>setSignUpOpen(true)}class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-red-700">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
      
          <div class="relative">
            <div class="absolute inset-0 flex flex-col" aria-hidden="true">
              <div class="flex-1"></div>
              <div class="flex-1 w-full bg-gray-800"></div>
            </div>
            <div class="max-w-6xl mx-auto sm:px-6">
              <img class="relative mx-auto rounded-xl shadow-xl" src="https://i.pinimg.com/originals/0e/82/32/0e82328f0ce045ffe96eb75b2170257f.jpg" alt="App screenshot"/>
            </div>
          </div>
        </div>
        <div class="bg-gray-800">
        <div class="bg-gray-800">
        <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 class="text-3xl font-extrabold text-white tracking-tight">
            Inbox support built for efficiency
          </h2>
          <p class="mt-4 max-w-3xl text-lg text-indigo-200">
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.
          </p>
          <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            <div>
              <div>
                <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-medium text-white">Unlimited Inboxes</h3>
                <p class="mt-2 text-base text-indigo-200">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-medium text-white">Manage Team Members</h3>
                <p class="mt-2 text-base text-indigo-200">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-medium text-white">Spam Report</h3>
                <p class="mt-2 text-base text-indigo-200">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-medium text-white">Compose in Markdown</h3>
                <p class="mt-2 text-base text-indigo-200">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-medium text-white">Team Reporting</h3>
                <p class="mt-2 text-base text-indigo-200">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-medium text-white">Saved Replies</h3>
                <p class="mt-2 text-base text-indigo-200">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-medium text-white">Email Commenting</h3>
                <p class="mt-2 text-base text-indigo-200">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-medium text-white">Connect with Customers</h3>
                <p class="mt-2 text-base text-indigo-200">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

          
          {/* start footer */}
          <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">Trusted by over 26,000 forward-thinking companies</h2>
            <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple"/>
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage"/>
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit"/>
              </div>
              <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor"/>
              </div>
              <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}