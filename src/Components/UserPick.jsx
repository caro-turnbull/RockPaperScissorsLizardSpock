import { useState, useContext } from 'react';
// import { options3, options5 } from '../data';
import HandsButton from './HandsButton';
import { DataContext } from '../Providers/dataProvider';

import { Button, Container, Stack } from '@mui/material';

function UserPick() {
  const { game, userClick } = useContext(DataContext);
  return (
    <>
      <h3>Player picks:</h3>

      <Container>
        <Stack spacing={3} direction="row">

          {game.map((choice) => {
            return (
              <HandsButton
                key={choice.name}
                choice={choice}
              />

            );
          })
          }
        </Stack>
      </Container>

    </>
  );
}
export default UserPick;