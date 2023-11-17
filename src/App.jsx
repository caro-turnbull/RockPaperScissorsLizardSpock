import { useState } from 'react';
import { Grid } from '@mui/material';

import './App.css';
import UserPick from './Components/UserPick';
import NavBar from './Components/NavBar';
import CompPick from './Components/ComputerPick';
import Results from './Components/Results';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function App() {

  return (
    <>
      <NavBar />
      <Grid container>

        <Grid item>
          <UserPick />
        </Grid>
        <Grid item>
          <CompPick />
        </Grid>

      </Grid>
      <Results />
    </>
  );
}

export default App;
