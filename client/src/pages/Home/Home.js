import React from 'react';
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
import './home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='content'>
      <ContentWrapper>
        <Heading style={{ paddingTop: '16px' }}>Your Games</Heading>
        {false && (
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
        {true && (
          <>
            <GameCard>
              <Heading smaller>Game with Hitesh</Heading>
              <Content>
                Hitesh just made their move!
                <br />
                it's your turn to play now.
              </Content>
              <SubContent>9th June 2022, 3:15pm</SubContent>
              <Button height onClick={() => navigate('/newgame')}>
                Play!
              </Button>
            </GameCard>
            <GameCard>
              <Heading smaller>Game with Hitesh</Heading>
              <Content>
                Hitesh just made their move!
                <br />
                it's your turn to play now.
              </Content>
              <SubContent>9th June 2022, 3:15pm</SubContent>
              <Button height onClick={() => navigate('/newgame')}>
                Play!
              </Button>
            </GameCard>
            <GameCard>
              <Heading smaller>Game with Hitesh</Heading>
              <Content>
                Hitesh just made their move!
                <br />
                it's your turn to play now.
              </Content>
              <SubContent>9th June 2022, 3:15pm</SubContent>
              <Button height onClick={() => navigate('/newgame')}>
                Play!
              </Button>
            </GameCard>
            <GameCard>
              <Heading smaller>Game with Hitesh</Heading>
              <Content>
                Hitesh just made their move!
                <br />
                it's your turn to play now.
              </Content>
              <SubContent>9th June 2022, 3:15pm</SubContent>
              <Button height onClick={() => navigate('/newgame')}>
                Play!
              </Button>
            </GameCard>
            <GameCard>
              <Heading smaller>Game with Hitesh</Heading>
              <Content>
                Hitesh just made their move!
                <br />
                it's your turn to play now.
              </Content>
              <SubContent>9th June 2022, 3:15pm</SubContent>
              <Button height onClick={() => navigate('/newgame')}>
                Play!
              </Button>
            </GameCard>
            <GameCard>
              <Heading smaller>Game with Hitesh</Heading>
              <Content>
                Hitesh just made their move!
                <br />
                it's your turn to play now.
              </Content>
              <SubContent>9th June 2022, 3:15pm</SubContent>
              <Button height onClick={() => navigate('/newgame')}>
                Play!
              </Button>
            </GameCard>
            <NewGameButton>
              <>+ </>
              <> New Game</>
            </NewGameButton>
          </>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Home;
