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

const NewGame = () => {
  const navigate = useNavigate();
  return (
    <div className='content'>
      <ContentWrapper>
        <BackButton />
        <ContentBox>
          <SubHeading>Start a new game</SubHeading>
          <Heading>
            Whom do you want
            <br />
            to play with?
          </Heading>
          <form
            style={{ marginTop: '30px' }}
            onSubmit={() => {
              navigate('/game');
            }}
          >
            <InputField
              label='Email'
              name='email'
              type='email'
              placeholder='Type their email here'
            />
            <Button type='submit' style={{ marginTop: '300px' }}>
              Start Game
            </Button>
          </form>
        </ContentBox>
      </ContentWrapper>
    </div>
  );
};

export default NewGame;
