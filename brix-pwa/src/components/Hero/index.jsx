import SignUpModal from "../../components/SignUpModal";
import SignInModal from "../../components/SignInModal";
import { useState } from "react";
import useFirebase from "../../hooks/useFirebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Hero() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const { auth } = useFirebase();
  const [user] = useAuthState(auth);

  const goToSignIn = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };

  const goToSignUp = () => {
    setSignInOpen(false);
    setSignUpOpen(true);
  };

  return (
    <div className='bg-gray-50'>
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
      <div className='relative overflow-hidden'>
        <div className='relative pt-6 pb-16 sm:pb-24'>
          <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6'>
            <div className='text-center'>
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-800 text-2xl md:text-6xl'>
                <span className='block sm:hidden text-red-800'>Brix</span>
              </h1>
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl'>
                <span className='block'>To find your</span>
                <span className='block text-red-800'>perfect home...</span>
              </h1>
              <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              {user ? (
                <div className='block sm:hidden items-center justify-center mt-4'>
                  <button
                    onClick={() => setSignInOpen(true)}
                    className='whitespace-nowrap text-base font-medium text-gray-800 hover:text-red-800'>
                    Go fetch
                  </button>
                </div>
              ) : (
                <div className='block sm:hidden items-center justify-center mt-4'>
                  <button
                    onClick={() => setSignInOpen(true)}
                    className='whitespace-nowrap text-base font-medium text-gray-800 hover:text-red-800'>
                    Sign in
                  </button>
                  <button
                    onClick={() => setSignUpOpen(true)}
                    className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-red-700'>
                    Go fetch
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
            <div className='flex-1'></div>
            <div className='flex-1 w-full bg-gray-800'></div>
          </div>
          <div className='max-w-6xl mx-auto sm:px-6'>
            <img
              className='relative mx-auto rounded-xl shadow-xl'
              src='https://i.pinimg.com/originals/0e/82/32/0e82328f0ce045ffe96eb75b2170257f.jpg'
              alt='App screenshot'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
