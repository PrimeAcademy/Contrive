// View of all messages between two specific users
// Reached by path '/search'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Import Custom Components

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

function SearchNetwork() {
  const dispatch = useDispatch();
  const classes = useStyles();

  // Grab information from Global Redux Store
  const features = useSelector((store) => store.features);
  const service = useSelector((store) => store.vendorTypes);

  // Local state that captures input data
  const [specialFeatures, setSpecialFeatures] = useState('');
  const [vendorTypes, setVendorTypes] = useState('');

  const handleVendorChange = (evt) => {
    // let newUser = evt.target.value;
    // if (newUser === '-1'){
    //   history.push(`/discover`);}
    // else {
    // userChange(newUser);
    // }
  };

  const handleCategoryChange = (evt) => {
    // let newUser = evt.target.value;
    // if (newUser === '-1'){
    //   history.push(`/discover`);}
    // else {
    // userChange(newUser);
    // }
  };

  // Variable to control conditional rendering of search results message:
  const [hasClickedSearch, setHasClickedSearch] = useState(0);
  console.log('hasClickedSearch in SearchNetwork:', hasClickedSearch);


  return (
    <div>
      <main>
        <Box align="center" width="100%">
          <Box className={classes.root}>
            <Box mb={2} align="center" width="100%">
              <Typography variant="h3">
                <Box mt={4} align="center" lineHeight={1}>
                  The Network
                </Box>
              </Typography>
            </Box>

            <FormControl className={classes.formControl}>
              <InputLabel id="vendor-type">Vendor Types</InputLabel>
              <Select
                labelId="vendor-type"
                id="vendor-type"
                name="Vendor Types"
                value={vendorTypes}
                onChange={(evt) => setVendorTypes(evt.target.value)}
              >
                {/* <MenuItem value="" disabled> -- Select Vendor Type -- </MenuItem> */}
                {service &&
                  service.length &&
                  service.map((category, i) => {
                    return (
                      <MenuItem key={i} value={category.id}>
                        {category.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="special-features">Special Features</InputLabel>
              <Select
                labelId="special-features"
                id="special-features"
                name="Special Features"
                value={specialFeatures}
                onChange={(evt) => setSpecialFeatures(evt.target.value)}
              >
                {features &&
                  features.length &&
                  features.map((feature, i) => {
                    return (
                      <MenuItem key={i} value={feature.id}>
                        {feature.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>

            <SearchBar hasClickedSearch={hasClickedSearch}
              setHasClickedSearch={setHasClickedSearch} />
          </Box>
          <SearchResults hasClickedSearch={hasClickedSearch}
            setHasClickedSearch={setHasClickedSearch} />
        </Box>
      </main>
    </div>
  );
}

export default SearchNetwork;
