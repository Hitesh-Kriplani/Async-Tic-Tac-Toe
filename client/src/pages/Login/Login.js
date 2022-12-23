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
} from '../../components/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { database } from '../../services/firebase';
import { ref, onValue } from 'firebase/database';
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    try {
      const snapshot = await ref(database, `/users/${username}`);
      console.log({ snapshot });
      let user = {};
      onValue(snapshot, (snapshot) => {
        user = { ...snapshot.val() };
        console.log({ user });
        if (user && user.password === password) {
          navigate('/home');
        } else {
          console.error('Invalid username or password');
          alert('Invalid username or password');
        }
      });
    } catch (error) {
      // Display an error message to the user
      console.error(error);
      alert('There was an error logging in. Please try again later.');
    } finally {
      setLoading(false); // Set loading state to false
    }
  };
  return (
    <div className='content'>
      <ContentWrapper>
        <BackButton />
        <ContentBox>
          <SubHeading>Login</SubHeading>
          <Heading>
            Please enter your <br />
            details
          </Heading>
          <form style={{ marginTop: '30px' }} onSubmit={handleLogin}>
            <InputField
              label='Username'
              name='username'
              type='text'
              placeholder='Type your username here'
              data={username}
              setData={setUsername}
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
              // Display a loading spinner if loading is true
              <div className='spinner-border text-primary' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            ) : (
              // Display a button if loading is false
              <Button type='submit' style={{ marginTop: '210px' }}>
                Login
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

export default Login;
