import { useState, useContext } from 'react';
import { DataContext } from '../Providers/dataProvider';


function CompPick() {
  const { compChoice } = useContext(DataContext);

  let includeImage;
  if (compChoice !== 'None') {
    includeImage = <img src={compChoice.img} alt='its broken' height={125} width={125} />;
  }

  return (
    <>
      <h3>The Computer picks:</h3>
      <p>{compChoice.name}</p>
      {includeImage}
    </>
  );
}
export default CompPick;