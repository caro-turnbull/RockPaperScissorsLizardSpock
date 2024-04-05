import { useState, useContext, createContext } from 'react';
import IconButton from '@mui/material/IconButton';
import { DataContext } from '../Providers/dataProvider';
import { AppBar, Box, Chip, Stack, Typography } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const ColorModeContext = createContext({ toggleColorMode: () => { } });


function NavBar() {
  const { chooseGame } = useContext(DataContext);

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <AppBar >
        <Stack direction="row"  alignItems="center" sx={{ padding:'1rem'}}>

        <Typography align='left'>
          Caroline's Rock Paper Scissors Lizard Spock
        </Typography>
        <Box >

          <Box>
            <Chip color="secondary" label='3' onClick={() => chooseGame(3)} />
            <Chip color="secondary" label='5' onClick={() => chooseGame(5)} />
          </Box>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
        </Stack>

      </AppBar>
    </>
  );
}
export default NavBar;
