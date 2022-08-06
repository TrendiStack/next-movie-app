import React from 'react';
import Link from 'next/link';

const SignInForm = ({
  handleSignIn,
  handleSignInChange,
  formFieldsSignIn,
  handleSignInWithGoogle,
}) => {
  const { email, password } = formFieldsSignIn;
  return (
    <>
      <form onSubmit={handleSignIn} className="w-full flex flex-col py-4">
        <input
          onChange={handleSignInChange}
          className="py-7 indent-3 bg-transparent"
          type="email"
          name="email"
          value={email}
          placeholder="Email address"
          required
        />
        <div className="border-b-2 border-[#5A698F]"></div>
        <input
          onChange={handleSignInChange}
          className="py-7 indent-3 bg-transparent"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          required
        />
        <div className="border-b-2 border-[#5A698F]"></div>
        <button className="bg-[#FC4747] font-semibold rounded-md py-4 text-lg mt-10">
          Login to your account
        </button>
        <button
          onClick={handleSignInWithGoogle}
          type="button"
          className="bg-[white] text-black font-semibold rounded-md py-4 text-lg mb-8 mt-5"
        >
          Sign in with Google
        </button>

        <p>
          Don&apos;t have an account?{' '}
          <Link href="/signup">
            <span className="text-[#FC4747] cursor-pointer">Sign Up</span>
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignInForm;
