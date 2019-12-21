import React from 'react';
import { Typography, CssBaseline, Container } from '@material-ui/core';
import Spells from './Spells';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/App.css';

const App = () => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      //height: "100%",
      overflow: "auto",
      // backgroundColor: "#32a852",
    },
    title: {
      color: "white",
      padding: "2%"
    },
    maingrid: {
      //height: "100%",
      maxHeight: "70vh"
    }
  })

  const classes = useStyles();

  return (
    <Container className="App" maxWidth={false}>
      <CssBaseline />
      <Typography component="h1" variant="h1" className={`${classes.title}`} paragraph={true}>Potter Wiki</Typography>
      <Spells maingrid={classes.maingrid} />
    </Container>
  );

}


export default App;
