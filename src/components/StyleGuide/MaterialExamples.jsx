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

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  formControl: {
    background: '#fff',
  },
  wrapper: {
    padding: '2em 0 2em 2em',
  }
});


function MaterialExamples() {
  const classes = useStyles();
  return (
    <Grid 
      container 
      alignContent="center" 
      alignItems="center" 
      justify="center" 
      spacing={10}  
      component={Paper}
      className={classes.wrapper}
    >

        <Grid item container xs={12} justify="center">
          <Grid item xs={12}>
            <Typography variant="h1" align="center">Contrive Style Guide</Typography>
          </Grid> 

          <Grid item xs={12}>
            <Typography variant="body1" align="justify">
              The purpose of this document is to showcase and reference the styles that will be used to build out the Contrive Application. With the implementation of Material-UI within this application, this document also serves as a reference for what "vanilla" html elements are being replaced and how. This is an an example of a <strong>Typography Element with a "body1" variant and a "p" component</strong>.
            </Typography>
          </Grid>
        </Grid>

        <Grid item container spacing={2} xs={12}>
          <Grid item container xs={12} justify="center">
            <Button color="primary" variant="contained">Primary Button</Button>
          </Grid>

          <Grid item container xs={12} justify="center">          
            <Button color="secondary" variant="contained">Secondary Button</Button>
          </Grid>

          <Grid item container xs={12} justify="center">
            <ButtonGroup>
              <Button color="primary" variant="contained">Primary Button</Button>
              <Button color="secondary" variant="contained">Secondary Button</Button>
            </ButtonGroup>
          </Grid>
        </Grid>

        <Grid item container spacing={2} xs={12}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="text-input-example"
                label="Text input example"
                type="text"
                placeholder="Add some text"
                helperText="Example helper text"
                variant="outlined"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField 
                id="password-input-example" 
                label="Password input example"
                type="password"
                autoComplete="current-password"
                helperText="Your password can include symbols and numbers."
                variant="outlined"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField 
                id="password-input-example" 
                label="Password input example"
                type="password"
                autoComplete="current-password"
                helperText="Your password can include symbols and numbers."
                variant="outlined"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                type="text"
                multiline
                rows={4}
                defaultValue='Example of a multiline form (i.e. "Description")'
                variant="outlined"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="selector-example-label">Selector Example</InputLabel>
              <Select
                // value={state}
                // onChange={handleChange}
                labelId="selector-example-label"
                id="selector-example"
                label="Selector Example" // this must be the same string from this selector's <InputLabel />
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
  )
} // end MaterialExamples

export default MaterialExamples;