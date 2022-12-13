import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>
  <>
    <h1>Game of Thrones Characters</h1>
    <p>A React application that lists Game of Thrones Characters</p>
    <Link to="/characters">Go to characters list</Link>
  </>;

export default Home;