import React from 'react';
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
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    toast.success('Congratulations! Account Created.');
    toast.error('Enter correct details.');
    navigate('/home');
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
            />
            <InputField
              label='Password'
              name='password'
              type='password'
              placeholder='Type your password here'
            />
            <Button type='submit' style={{ marginTop: '210px' }}>
              Login
            </Button>
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
