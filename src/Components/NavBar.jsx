import { useState, useContext, createContext } from 'react';
import { DataContext } from '../Providers/dataProvider';
import useTheme from '@mui/material/styles/useTheme';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const ColorModeContext = createContext({ toggleColorMode: () => { } });


function NavBar() {
  const { chooseGame } = useContext(DataContext);

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
     Caroline's Rock Paper Scissors Lizard Spock
      <div>
        <button onClick={() => chooseGame(3)}>3</button>
        <button onClick={() => chooseGame(5)}>5</button>
      </div>
      
          {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton> */}
    </>
  );
}
export default NavBar;
