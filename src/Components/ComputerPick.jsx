import { useState, useContext } from 'react';
import { DataContext } from '../Providers/dataProvider';
import ClipLoader from "react-spinners/ClipLoader";
import { red } from '@mui/material/colors';



function CompPick() {
  const { compChoice, loading } = useContext(DataContext);

  let includeImage;
  if (compChoice !== 'None') {
    includeImage = <img src={compChoice.img} alt='its broken' height={125} width={125} />;
  }

  return (
    <>
      <h3>The Computer picks:</h3>
      {loading ? (<>
        <ClipLoader
        color={red}
        loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> 
      <div>load</div>
      </>
      ) : (
      <div> 
        <p>{compChoice.name}</p>
        {includeImage} 
      </div> 
      )}
     {/* <div className="sweet-loading"> */}
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      
    </>
  )
}
export default CompPick;