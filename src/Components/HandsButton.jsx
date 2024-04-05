import { useState, useContext } from 'react';

import { Container, Stack, Button } from "@mui/material";
import { DataContext } from '../Providers/dataProvider';

const HandsButton = (props) => {
  const { game, userClick } = useContext(DataContext);
  return (
    <Button
      variant="outlined"
      onClick={() => userClick(props.choice.name)}
    >
      <p>{props.choice.name}</p>
      <img src={props.choice.img} alt='hand' height={125} width={125} />
    </Button>
  );
};
export default HandsButton;