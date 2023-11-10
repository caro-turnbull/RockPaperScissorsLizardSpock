import { useState, useContext } from 'react';
import { DataContext } from '../Providers/dataProvider';

function Results() {
  const { result } = useContext(DataContext);


  let resultHeader;
  if (result === 'winner') {
    resultHeader = <h1>You Win! 🎉</h1>;
  } else if (result === 'looser') {
    resultHeader = <h1>You Loose. 😩</h1>;
  } else {
    resultHeader = <h1>Please play again. </h1>;
  }

  return (
    <>
      {resultHeader}
    </>

  );
}
export default Results;
