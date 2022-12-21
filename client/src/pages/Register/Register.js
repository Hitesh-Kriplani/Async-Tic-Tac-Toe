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
const Register = () => {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.username.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    toast.success('Congratulations! Account Created.');
    navigate('/login');
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
            />
            <InputField
              label='Username'
              name='username'
              type='text'
              placeholder='Type your username here'
            />
            <InputField
              label='Email'
              name='email'
              type='email'
              placeholder='Type your email here'
            />
            <InputField
              label='Password'
              name='password'
              type='password'
              placeholder='Type your password here'
            />
            <Button type='submit' style={{ marginTop: '27px' }}>
              Register
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

export default Register;
