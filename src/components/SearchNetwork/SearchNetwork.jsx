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
import { Typography, Select } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function SearchNetwork() {
  const classes = useStyles();
  // const [input, setInput] = useState('');

  // useEffect( () => {
  //   dispatch({
  //   });
  // },[]);

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

  return (
    <div>
      <main>
        <Box align="center" width="100%">
          <Box className={classes.root}>

            <Box mb={2} align="center" width="100%" >
              <Typography variant="h3">
                <Box mt={4} align="center" lineHeight={1}>
                  The Network
                </Box>
              </Typography>
            </Box>

            <select
              name="VendorType"
              onChange={handleVendorChange}
            >
              <option key="-1" value="-1">-- Select Vendor Type --</option>
            </select>

            <select
              name="userListSelect"
              onChange={handleCategoryChange}
            >
              <option key="-1" value="-1"> -- Select A Category -- </option>
            </select>

            <SearchBar
            //  input={input} 
            //  onChange={updateInput}
            />

          </Box>
          <SearchResults />
        </Box>
      </main>
    </div>
  );
}

export default SearchNetwork;