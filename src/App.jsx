import { useState } from 'react';
import UserPick from './Components/UserPick';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <UserPick />

    </>
  );
}

export default App;
