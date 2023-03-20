import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#D8C3A5',
      light: '#EAE7DC'
    },
    secondary: {
      main: '#8E8D8A',
    },
    error: {
      main: red.A400,
      light: '#E98074'
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md'
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',

          '@media (min-width: 600px)': {
            maxWidth: '680px'
          }
        },
        maxWidthMd: {
          maxWidth: '860px',

          '@media (min-width: 900px)': {
            maxWidth: '860px'
          }
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'none'
      },
      styleOverrides: {
        root: {
          color: 'white',
          cursor: 'pointer',
          background: 'transparent',
          // '&:hover': {
          //   background: '#c2af94'
          // },

          // '&.active': {
          //   background: '#ac9c84'
          // }
        }
      }
    }
  }
});