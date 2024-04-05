import { useState, useContext } from 'react';
// import { options3, options5 } from '../data';
import HandsButton from './HandsButton';
import { DataContext } from '../Providers/dataProvider';


function UserPick() {
  const { game, userClick } = useContext(DataContext);
  return (
    <>
      <h3>Player picks:</h3>

     <div>
          {game.map((choice) => {
            return (
              <HandsButton
              key={choice.name}
              choice={choice}
              />
              
              );
            })
          }
          </div>

    </>
  );
}
export default UserPick;