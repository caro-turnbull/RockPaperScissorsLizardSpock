import { useState, useContext } from 'react';
import { DataContext } from '../Providers/dataProvider';


function CompPick() {
  const { compChoice } = useContext(DataContext);

  return (
    <>
      <h3>The Computer picks:</h3>
      <p>{compChoice}</p>
      <h2>Alice is dynamite!</h2>
    </>
  );
}
export default CompPick;