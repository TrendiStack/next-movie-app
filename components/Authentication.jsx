import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdMovie } from 'react-icons/md';

const Authentication = ({
  loginRoute,
  setEmail,
  setPassword,
  handleSignup,
  handleLogin,
  error,
}) => {
  console.log(error);
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
            {error && (
              <p className="text-center bg-red-500 p-2 mt-4 mx-10 rounded">
                {error}
              </p>
            )}
            <div className="text-center">
              {loginRoute ? (
                <form
                  onSubmit={handleLogin}
                  className="w-full flex flex-col py-4"
                >
                  <input
                    onChange={e => setEmail(prev => (prev = e.target.value))}
                    className="py-7 indent-3 bg-transparent"
                    type="email"
                    placeholder="Email address"
                  />
                  <div className="border-b-2 border-[#5A698F]"></div>
                  <input
                    onChange={e => setPassword(prev => (prev = e.target.value))}
                    className="py-7 indent-3 bg-transparent"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="border-b-2 border-[#5A698F]"></div>
                  <button className="bg-[#FC4747] rounded-md py-4 text-lg mb-8 mt-10">
                    Login to your account
                  </button>
                  <p>
                    Don&apos;t have an account?{' '}
                    <Link href="/signup">
                      <span className="text-[#FC4747] cursor-pointer">
                        Sign Up
                      </span>
                    </Link>
                  </p>
                </form>
              ) : (
                <form
                  onSubmit={handleSignup}
                  className="w-full flex flex-col py-4"
                >
                  <input
                    onChange={e => setEmail(prev => (prev = e.target.value))}
                    className="py-7 indent-3 bg-transparent"
                    type="email"
                    placeholder="Email address"
                  />
                  <div className="border-b-2 border-[#5A698F]"></div>
                  <input
                    onChange={e => setPassword(prev => (prev = e.target.value))}
                    className="py-7 indent-3 bg-transparent"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="border-b-2 border-[#5A698F]"></div>
                  {/* <input
                    className="py-7 indent-3 bg-transparent"
                    type="password"
                    placeholder="Repeat Password"
                  /> */}
                  <div className="border-b-2 border-[#5A698F]"></div>
                  <button className="bg-[#FC4747] rounded-md py-4 text-lg mb-8 mt-10">
                    Create an account
                  </button>

                  <p>
                    Already have an account?{' '}
                    <Link href="/login">
                      <span className="text-[#FC4747] cursor-pointer">
                        Login
                      </span>
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
