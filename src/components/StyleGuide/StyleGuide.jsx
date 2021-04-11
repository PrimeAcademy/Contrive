// Material-UI Themes (style sheet)
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Material-UI Components
import {
  Button, // replaces html5 <button> element
  ButtonGroup,
  FormControl,
  FormHelperText,
  Grid, //
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography, // replace html5 elements dealing with text, <h1>, <h2>, <h3>, <p>, etc...

} from '@material-ui/core';

import MaterialExamples from './MaterialExamples';

/**
 * Style Guide
 * 
 * The purpose of this component is to set out guidelines and general rules for styling.
 * Contrive will be implementing Material-UI from the get go.
 * 
 * Yellow       - #fefcc6
 * Dark Brown   - #984f26
 * Medium Brown - #ae784f
 * Light Brown  - #ccab7c
 */

const theme = createMuiTheme({
  palette: {
    background: {
      paper: "#fff",
      default: "#fff",
      level2: "#f5f5f5",
      level1: "#fff"
    },
    secondary: {
      light: '#fffff9',
      main: '#fefcc6',
      dark: '#cac995',
      contrastText: '#000000',
    },
    primary: {
      light: '#cd7c50',
      main: '#984f26',
      dark: '#652500',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Forum',
      'Raleway'
    ].join(','),
    align: 'justify'
  },

});

function StyleGuide() {
  return(
    <ThemeProvider theme={theme}>
      <MaterialExamples />
    </ThemeProvider>
  )
} // end StyleGuide

export default StyleGuide;