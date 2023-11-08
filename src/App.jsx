import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>We're going to make Rock Paper Scissors Lizard Spock</h1>

      <img src="../public/hands/fist.svg" width={200} alt="no img" />
    </>
  );
}

export default App;
