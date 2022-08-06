import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdMovie } from 'react-icons/md';
import SignInForm from './sign-in-form/SignInForm';
import SignUpForm from './sign-up-form/SignUpForm';

const Authentication = ({
  loginRoute,
  formFieldsSignUp,
  formFieldsSignIn,
  handleSignUp,
  handleSignIn,
  handleSignUpChange,
  handleSignInChange,
  handleSignInWithGoogle,
  error,
}) => {
  return (
    <div className="w-full h-screen font-light">
      <div className="fixed w-full px-4 py-20 z-50">
        <div className="flex justify-center">
          <MdMovie className="text-[#FC4747] mb-24" size={50} />
        </div>

        <div className="bg-[#161D2F] rounded-md">
          <div
            className={`max-w-[400px] mx-auto ${loginRoute ? 'py-12' : 'py-7'}`}
          >
            <h1 className="text-3xl font-light">
              {loginRoute ? 'Login' : 'Sign Up'}
            </h1>
            {/* {error && (
              <p className="text-center bg-red-500 p-2 mt-4 mx-10 rounded">
                {error}
              </p>
            )} */}
            <div className="text-center">
              {loginRoute ? (
                <SignInForm
                  handleSignIn={handleSignIn}
                  handleSignInChange={handleSignInChange}
                  formFieldsSignIn={formFieldsSignIn}
                  handleSignInWithGoogle={handleSignInWithGoogle}
                />
              ) : (
                <SignUpForm
                  handleSignUp={handleSignUp}
                  handleSignUpChange={handleSignUpChange}
                  formFieldsSignUp={formFieldsSignUp}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
