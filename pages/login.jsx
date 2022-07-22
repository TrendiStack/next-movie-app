import { useState } from 'react';
import Authentication from '../components/Authentication';
import { UserAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, logIn } = UserAuth();
  const navigate = useRouter();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate.push('/');
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <div>
      <Authentication
        loginRoute={true}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        error={error}
      />
    </div>
  );
};

export default Login;
