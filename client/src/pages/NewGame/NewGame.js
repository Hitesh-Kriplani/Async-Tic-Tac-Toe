import { onValue, ref, set } from 'firebase/database';
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
import { auth, database } from '../../services/firebase';

const NewGame = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const createNewGame = async (email) => {
    // Get the current user and their ongoing games
    setLoading(true); // Set loading to true before starting the function
    // Get the current user and their ongoing games
    const user = auth.currentUser;
    const snapshot = ref(database, `/games/${user.uid}`);
    let games;
    onValue(snapshot, (snapshot) => {
      games = { ...snapshot.val() };
      console.log(games);
      // Check if the user has an ongoing game with the specified email address
      for (const game of Object.values(games)) {
        if (game.opponentEmail === email) {
          // Return an error message if the user already has an ongoing game with the specified email address
          return 'You already have an ongoing game with this email address';
        }
      }
    });

    try {
      // Create a new game in the database
      set(
        ref(snapshot, {
          status: 'waiting for opponent',
          opponentEmail: email,
          timestamp: Date.now(),
        })
      );

      // Redirect the user to the game board
      navigate(`/game/${snapshot.key}`);
    } catch (error) {
      // Display an error message to the user
      console.error(error);
      alert(
        'There was an error creating the new game. Please try again later.'
      );
    }
    setLoading(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createNewGame(email);
  };
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
          <form style={{ marginTop: '30px' }} onSubmit={handleSubmit}>
            <InputField
              label='Email'
              name='email'
              type='email'
              placeholder='Type their email here'
              data={email}
              setData={setEmail}
            />
            {loading ? (
              <LoadingSpinner />
            ) : (
              <Button
                type='submit'
                onClick={createNewGame}
                style={{ marginTop: '300px' }}
              >
                Start Game
              </Button>
            )}
          </form>
        </ContentBox>
      </ContentWrapper>
    </div>
  );
};

export default NewGame;
