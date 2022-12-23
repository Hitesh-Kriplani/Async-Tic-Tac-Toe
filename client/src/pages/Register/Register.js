import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import InputField from '../../components/InputField';
import {
  Button,
  ContentBox,
  ContentWrapper,
  Heading,
  SubHeading,
  LoadingSpinner,
} from '../../components/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, database } from '../../services/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, set } from 'firebase/database';
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      updateProfile(auth.currentUser, {
        displayName: name,
        username: username,
      });

      set(ref(database, `/users/${username}`), {
        displayName: name,
        username: username,
        email: email,
        password: password,
      });
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Error creating user account: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='content'>
      <ContentWrapper>
        <BackButton />
        <ContentBox>
          <SubHeading>Create account</SubHeading>
          <Heading>
            Let's get to know <br />
            you better!
          </Heading>
          <form style={{ marginTop: '30px' }} onSubmit={handleRegister}>
            <InputField
              label='Your name'
              name='name'
              type='text'
              placeholder='Type your name here'
              data={name}
              setData={setName}
            />
            <InputField
              label='Username'
              name='username'
              type='text'
              placeholder='Type your username here'
              data={username}
              setData={setUsername}
            />
            <InputField
              label='Email'
              name='email'
              type='email'
              placeholder='Type your email here'
              data={email}
              setData={setEmail}
            />
            <InputField
              label='Password'
              name='password'
              type='password'
              placeholder='Type your password here'
              data={password}
              setData={setPassword}
            />
            {loading ? (
              <LoadingSpinner />
            ) : (
              <Button type='submit' style={{ marginTop: '27px' }}>
                Register
              </Button>
            )}
          </form>
          <ToastContainer
            position='bottom-center'
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
          />
        </ContentBox>
      </ContentWrapper>
    </div>
  );
};

export default Register;
