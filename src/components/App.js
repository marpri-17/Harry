import React from 'react';
import { Typography, Grid, CssBaseline } from '@material-ui/core';
import Spells from './Spells';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Grid >
          <Typography variant="h1">Potter Wiki</Typography>
        </Grid>
        <Spells />
      </div>
    );
  }
}


export default App;
