import Authentication from '../components/Authentication';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useRouter();

  const handleSignup = async e => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Authentication
        login={false}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignup={handleSignup}
      />
    </div>
  );
};

export default Signup;
