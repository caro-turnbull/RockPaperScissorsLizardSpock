import { useState } from 'react';

import './App.css';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import UserPick from './Components/UserPick';
import NavBar from './Components/NavBar';
import CompPick from './Components/ComputerPick';
import Results from './Components/Results';
import NavBar2 from './Components/NavBar2';
import './index.css';

function App() {

  return (
    <>
      <div className="container mx-auto">

        {/* <NavBar /> */}
        <NavBar2 />
        <div>
          <UserPick />
          <CompPick />
          <Results />
        </div>
      </div>
    </>
  );
}

export default App;
