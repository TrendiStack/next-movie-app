import React from 'react';
import Link from 'next/link';

const SignUpForm = ({ formFieldsSignUp, handleSignUp, handleSignUpChange }) => {
  const { usersName, email, password, confirmPassword } = formFieldsSignUp;
  return (
    <>
      <form onSubmit={handleSignUp} className="w-full flex flex-col py-4">
        <input
          onChange={handleSignUpChange}
          value={usersName}
          className="py-7 indent-3 bg-transparent"
          type="text"
          name="usersName"
          placeholder="Name"
          required
        />
        <div className="border-b-2 border-[#5A698F]"></div>
        <input
          onChange={handleSignUpChange}
          value={email}
          className="py-7 indent-3 bg-transparent"
          type="email"
          name="email"
          placeholder="Email address"
          required
        />
        <div className="border-b-2 border-[#5A698F]"></div>
        <input
          onChange={handleSignUpChange}
          value={password}
          className="py-7 indent-3 bg-transparent"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <div className="border-b-2 border-[#5A698F]"></div>
        <input
          onChange={handleSignUpChange}
          value={confirmPassword}
          className="py-7 indent-3 bg-transparent"
          type="password"
          name="confirmPassword"
          placeholder="Repeat Password"
          required
        />
        <div className="border-b-2 border-[#5A698F]"></div>
        <button className="bg-[#FC4747] rounded-md py-4 text-lg mb-8 mt-10">
          Create an account
        </button>

        <p>
          Already have an account?{' '}
          <Link href="/login">
            <span className="text-[#FC4747] cursor-pointer">Login</span>
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignUpForm;
