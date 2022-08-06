import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../context/user.context';
import Authentication from '../components/Authentication';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../firebase';

const defaultFormFields = {
  usersName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { usersName, email, password, confirmPassword } = formFields;
  const navigate = useRouter();

  const { setCurrentUser } = useContext(UserContext);

  const handleSignUpChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(prev => (prev = defaultFormFields));
  };

  const handleSignUp = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert('password did not match');
    }

    try {
      resetFormFields();
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      navigate.push('/');
      const userDocRef = await createUserDocumentFromAuth(user, {
        usersName,
      });
      setCurrentUser(prev => (prev = user));
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        return alert('Cannot create user, email already in use');
      }
      console.log('There was an error signing up', error.message);
    }
  };
  return (
    <div>
      <Authentication
        loginRoute={false}
        handleSignUp={handleSignUp}
        handleSignUpChange={handleSignUpChange}
        formFieldsSignUp={formFields}
      />
    </div>
  );
};

export default Signup;
