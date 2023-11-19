import { createTheme } from '@mui/material/styles';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#33877c',
      main: '#00695c',
      dark: '#004940',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c7f7d4',
      main: '#b9f6ca',
      dark: '#81ac8d',
      contrastText: '#000',
    },
  }
});


export default theme;
