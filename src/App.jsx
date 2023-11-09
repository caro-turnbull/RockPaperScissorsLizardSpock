import { useState } from 'react';
import UserPick from './Components/UserPick';
import './App.css';
import NavBar from './Components/NavBar';
import CompPick from './Components/ComputerPick';
import Results from './Components/Results';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div>
        <UserPick />
        <CompPick />
      </div>
      <Results />
    </>
  );
}

export default App;
