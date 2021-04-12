// Material-UI Components
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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

// Material-UI Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  formControl: {
    background: '#fff',
  },
  wrapper: {
    padding: '1em 1em 1em 1em'
  }
});


function MaterialExamples() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>

      <Typography variant="h1" align="center">Contrive Style Guide</Typography>
  
      <Typography variant="body1" align="justify">
        The purpose of this document is to showcase and reference the styles that will be used to build out the Contrive Application. With the implementation of Material-UI within this application, this document also serves as a reference for what "vanilla" html elements are being replaced and how. This is an an example of a <strong>Typography Element with a "body1" variant and a "p" component</strong>.
      </Typography>


      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="button-accordion-content"
          id="button-accordion-header"
        >
          <Typography>Expand for Button Examples</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="forms-accordion-content"
          id="forms-accordion-header"
        >
          <Typography>Expand for Form Examples</Typography>
        </AccordionSummary>
        <AccordionDetails>
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

        </AccordionDetails>
      </Accordion>
    </div>
  )
} // end MaterialExamples

export default MaterialExamples;