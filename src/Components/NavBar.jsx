import { useState, useContext } from 'react';
import { DataContext } from '../Providers/dataProvider';

function NavBar() {
  const { chooseGame } = useContext(DataContext);

  return (
    <>
      <h2>Caroline's Rock Paper Scissors Lizard Spock</h2>

      <button onClick={() => chooseGame(3)}>
        Rock Paper Scissors (3)
      </button>

      <button onClick={() => chooseGame(5)}>
        Rock Paper Scissors Lizard Spock (5)
      </button>

    </>
  );
}
export default NavBar;
