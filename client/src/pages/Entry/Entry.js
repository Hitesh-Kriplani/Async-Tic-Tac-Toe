import React from 'react';
import { Button, ContentWrapper } from '../../components/styles';
import './entry.css';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const navigate = useNavigate();
  return (
    <div className='content'>
      <ContentWrapper>
        <div className='entry_main'>
          <div className='entry_text'>
            <span className='entry_sub'>async</span>
            <br />
            tic tac
            <br />
            toe
          </div>
        </div>
        <div className='entry_section'>
          <Button margin onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button margin color='#2F80ED' onClick={() => navigate('/register')}>
            Register
          </Button>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Entry;
