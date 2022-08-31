import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';
const Home = () => {
  /* const { user } = useContext(UserContext); */
  return (
    <div className="container text-center" style={{ marginTop: '12rem' }}>
      <div className="alert alert-primary p-5">
        <h1>
          {/* 	{user && <span className="text-success">{user}'s</span>}{" "} */}
          Herzliches Willkommen 
        </h1>
        <p>Code challenge...</p>
        
      </div>
     <Link to='/login'>
      <Fab className="w-25" variant="extended">
       Bitte Login
      </Fab>
      </Link>
    </div>
  );
};

export default Home;
