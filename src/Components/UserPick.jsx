import { useState, useContext } from 'react';
import { options3, options5 } from '../data';
import { DataContext } from '../Providers/dataProvider';


function UserPick() {
  const { game } = useContext(DataContext);
  return (
    <>
      <h3>Player picks:</h3>

      {game.map((choice) => {
        console.log("in the user component", choice.name);
        return (
          <button key={choice.name} >
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