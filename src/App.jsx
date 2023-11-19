import { useState } from 'react';
import { Grid, Paper } from '@mui/material';

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
      <Grid container >
        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}

        <Grid item xs={12} sm={9}>
          <UserPick />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CompPick />
        </Grid>

      </Grid>
      <Results />
    </>
  );
}

export default App;
