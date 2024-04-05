// src/components/ThirdNavbar.js

import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';



const ThirdNavbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#4CAF50; ' }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="h6" color="inherit">
          Εφαρμογή | Ή ώρα σε διάφορες πόλεις του κόσμου
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ThirdNavbar;
