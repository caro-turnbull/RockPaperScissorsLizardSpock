import { useState } from 'react';
import { options3, options5 } from '../data';


function UserPick() {
  const [userChoice, setUserChoice] = useState('Rock');

  return (
    <>
      <h3>Player picks:</h3>
      {options5.map((choice) => {
        return (
          <button key={choice.name}>
            <p>{choice.name}</p>
            <img src={choice.img} alt='its broken' height={125} width={125} />
          </button>
        );
      })
      }

    </>
  );
}
export default UserPick;