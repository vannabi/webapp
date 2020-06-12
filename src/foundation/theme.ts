import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  shape: {
    borderRadius: 0,
  },
  palette: {
    primary: {
      main: '#00381D',
    },
    secondary: {
      main: '#19857B',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
    },
  },
});

export default theme;
