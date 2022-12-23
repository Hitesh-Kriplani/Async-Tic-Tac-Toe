import { onValue, ref, set } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Content,
  ContentWrapper,
  GameCard,
  Heading,
  NewGameButton,
  SubContent,
} from '../../components/styles';
import { auth, database } from '../../services/firebase';
import './home.css';

const Home = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      try {
        // Set a loading state to true while the games are being fetched
        setLoading(true);
        const snapshot = ref(database, `/games/${user.uid}`);
        onValue(snapshot, (snapshot) => {
          const games = snapshot.val();
          if (games) {
            const sortedGames = games?.sort(
              (a, b) => b.timestamp - a.timestamp
            );
            const activeGames = sortedGames?.filter(
              (game) => game?.status !== 'completed'
            );
            console.log(games, activeGames);
            // Set the games state and the loading state to false
            setGames(activeGames);
          } else {
            console.log(games);
            setGames(null);
          }
          setLoading(false);
        });
      } catch (error) {
        // Display an error message to the user if there is an issue with the database connection or if the user's games cannot be retrieved
        console.error(error);
        alert(
          'There was an error retrieving your games. Please try again later.'
        );
      }
    } else {
      // Redirect the user to the login page or display an error message if they are not authenticated
      navigate('/login');
    }
  }, []);

  const handleNewGame = () => {
    const user = auth.currentUser;
    if (user) {
      const newGameRef = ref(database, `/games/${user.uid}`);
      set(newGameRef, {
        status: 'waiting for opponent',
        timestamp: Date.now(),
      });
      navigate(`/game/${newGameRef.key}`);
    }
  };

  return (
    <div className='content'>
      <ContentWrapper>
        <Heading style={{ paddingTop: '16px' }}>Your Games</Heading>
        {!loading && (
          <>
            {(!games || games.length === 0) && (
              <>
                <div className='home_main'>
                  <div className='home_text'>
                    No Games
                    <br />
                    Found
                  </div>
                  <Button onClick={() => navigate('/newgame')}>
                    Start a new game
                  </Button>
                </div>
              </>
            )}
            {games &&
              Object.entries(games).map((game) => (
                <>
                  <GameCard
                    key={game.id}
                    onClick={() => navigate(`/game/${game.id}`)}
                  >
                    <Heading smaller>Game with {game.opponentUsername}</Heading>
                    <Content>
                      Hitesh just made their move!
                      <br />
                      it's your turn to play now.
                      {game.status}
                    </Content>
                    <SubContent>{game.timestamp}</SubContent>
                    <Button height onClick={handleNewGame}>
                      Play!
                    </Button>
                  </GameCard>
                  <NewGameButton onClick={handleNewGame}>
                    <>+ </>
                    <> New Game</>
                  </NewGameButton>
                </>
              ))}
          </>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Home;
