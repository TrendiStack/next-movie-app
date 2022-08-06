import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Authentication from '../components/Authentication';
import {
  auth,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglepopup,
} from '../firebase';

import { UserContext } from '../context/user.context';
import Navbar from '../components/Navbar';
import { getDisplayName } from 'next/dist/shared/lib/utils';

const defaultFormFields = {
  email: '',
  password: '',
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useRouter();

  const { setCurrentUser } = useContext(UserContext);

  const handleSignInChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(prev => (prev = defaultFormFields));
  };

  const handleSignInWithGoogle = async event => {
    event.preventDefault();
    try {
      await signInWithGooglepopup();
      navigate.push('/');
    } catch (error) {
      alert('Sign in failed');
      console.log('google Sign in failed', error.message);
    }
  };

  const handleSignIn = async event => {
    event.preventDefault();
    try {
      resetFormFields();
      const { user } = await signInUserWithEmailAndPassword(email, password);
      setCurrentUser(prev => (prev = user));
      navigate.push('/');
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Wrong password!');
          break;
        case 'auth/user-not-found':
          alert('User not found');
          break;
        default:
          console.log('Failed to sign into account', error.message);
      }
    }
  };
  return (
    <div>
      <Authentication
        loginRoute={true}
        handleSignIn={handleSignIn}
        formFieldsSignIn={formFields}
        handleSignInChange={handleSignInChange}
        handleSignInWithGoogle={handleSignInWithGoogle}
      />
    </div>
  );
};

export default Login;
