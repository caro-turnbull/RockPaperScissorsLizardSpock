import { useState, useContext } from 'react';
import { DataContext } from '../Providers/dataProvider';
import { Paper, Typography } from '@mui/material';

function Results() {
  const { result } = useContext(DataContext);


  let resultHeader;
  if (result.type === 'winner') {
    resultHeader = "You Win! 🎉";
  } else if (result === 'loser') {
    resultHeader = "You Lose. 😩";
  } else if (result === 'tie') {
    resultHeader = "Its a tie. 👔";
  } else {
    resultHeader = "Please play again.";
  }

  return (
    <>
      {/* <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}> */}
      <Paper color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Typography>
          {resultHeader}
          {result.reason}
        </Typography>
      </ Paper>
    </>

  );
}
export default Results;
