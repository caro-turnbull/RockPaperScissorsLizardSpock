import { useState } from 'react';
import UserPick from './Components/UserPick';
import './App.css';
import NavBar from './Components/NavBar';
import CompPick from './Components/ComputerPick';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div>
        <UserPick />
        <CompPick />
      </div>
    </>
  );
}

export default App;
