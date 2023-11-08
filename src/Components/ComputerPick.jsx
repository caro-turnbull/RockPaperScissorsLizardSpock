import { useState, useContext } from 'react';
import DataProvider from '../Providers/dataProvider';


function CompPick() {
  const compPick = useContext(DataProvider);

  return (
    <>
      <h3>The Computer picks:</h3>
      <p>{compPick}</p>
      <h2>Alice is dynamite!</h2>
    </>
  );
}
export default CompPick;