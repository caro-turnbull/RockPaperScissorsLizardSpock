import { useState, useContext } from 'react';
import { DataContext } from '../Providers/dataProvider';

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
      <h1>{resultHeader} </h1>
      <br/>
      {result.reason}
    </>
  );
}
export default Results;
