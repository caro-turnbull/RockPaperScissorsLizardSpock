import { useState, useContext } from 'react';
import { DataContext } from '../Providers/dataProvider';
import { Box, Paper, Stack, Typography } from '@mui/material';

function Results() {
  const { result } = useContext(DataContext);


  let resultHeader;
  if (result.type === 'winner') {
    resultHeader = "You Win! 🎉";
  } else if (result.type === 'loser') {
    resultHeader = "You Lose. 😩";
  } else if (result.type === 'tie') {
    resultHeader = "Its a tie. 👔";
  } else {
    resultHeader = "Please play again.";
  }

  return (
    <>
      {/* <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}> */}
      <Paper >
      <Stack direction="row" spacing={2}>
          <Box>{resultHeader}</Box>
          <Box>{result.reason}</Box>
        </Stack>
      </ Paper>
    </>

  );
}
export default Results;
