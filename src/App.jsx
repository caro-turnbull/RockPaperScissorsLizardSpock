import { useState } from 'react';
import { Stack, Box, Container } from '@mui/material';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Container sx={{margin: "4em", padding: "2em"}}>
      <Stack spacing={4}>
        <Box><UserPick /></Box>
        <Box><CompPick /></Box>
        <Box><Results /></Box>
      </Stack>
     </Container>
    
    </>
  );
}

export default App;
