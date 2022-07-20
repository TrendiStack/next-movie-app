import React from 'react';
import { MdMovie } from 'react-icons/md';

const Authentication = ({ login }) => {
  return (
    <div className="w-full h-screen font-light">
      <div className="fixed w-full px-4 py-20 z-50">
        <div className="flex justify-center">
          <MdMovie className="text-[#FC4747] mb-24" size={50} />
        </div>

        <div className="max-w-[450px] h-[500px] mx-auto bg-[#161D2F] rounded-md">
          <div className={`max-w-[400px] mx-auto ${login ? 'py-14' : 'py-7'}`}>
            <h1 className="text-3xl font-light">
              {login ? 'Login' : 'Sign Up'}
            </h1>
            <div className="text-center">
              <form className="w-full flex flex-col py-4">
                <input
                  className="py-7 indent-3 bg-transparent"
                  type="email"
                  placeholder="Email address"
                />
                <div className="border-b-2 border-[#5A698F]"></div>
                <input
                  className="py-7 indent-3 bg-transparent"
                  type="password"
                  placeholder="Password"
                />
                <div className="border-b-2 border-[#5A698F]"></div>
                {!login && (
                  <>
                    <input
                      className="py-7 indent-3 bg-transparent"
                      type="password"
                      placeholder="Repeat Password"
                    />
                    <div className="border-b-2 border-[#5A698F]"></div>
                  </>
                )}
                <button className="bg-[#FC4747] rounded-md py-4 text-lg mb-8 mt-10">
                  Login to your account
                </button>
                {login ? (
                  <>
                    <p>
                      Don&apos;t have an account?{' '}
                      <span className="text-[#FC4747]">Sign Up</span>
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Already have an account?{' '}
                      <span className="text-[#FC4747]">Login</span>
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
