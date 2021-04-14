import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import './searchNetwork.css';

function SearchResultDetails({ vendor }) {
  console.log('vendor:', vendor);

  const history = useHistory();

  function goToVendor(vendorUserId) {
    console.log('====================================');
    console.log('vendorUserId:', vendorUserId);
    console.log('====================================');
    history.push(`/vendor/${vendorUserId}`)
  }

  return (

    <Grid item xs={5}>
      <Box mt={3} mb={3} onClick={() => goToVendor(vendor.vendorUserId)}>
        <img src={vendor.profilePic} alt={vendor.companyName} className="vendorProfilePic" />
        {/* ToDo: Add Vendor Rating (Stretch) here */}
        {/* <Box>{vendor.rating}</Box> */}
        <Box>{vendor.companyName}</Box>
      </Box>
    </Grid>


  );
}

export default SearchResultDetails;