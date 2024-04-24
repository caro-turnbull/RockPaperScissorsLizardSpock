import { useState, useContext } from 'react';
import { DataContext } from '../Providers/dataProvider';

const HandsButton = (props) => {
  const { game, userClick } = useContext(DataContext);
  return (
    <button 
      onClick={() => userClick(props.choice.name)}
    >
      <p>{props.choice.name}</p>
      <img src={props.choice.img} alt='hand' height={125} width={125} />
    </button>
  );
};
export default HandsButton;