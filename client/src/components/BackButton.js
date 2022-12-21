import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ padding: '25px 0', marginBottom: '10px' }}
      onClick={() => navigate(-1)}
    >
      <i className='fa-solid fa-chevron-left fa-xl'></i>
    </div>
  );
};

export default BackButton;
