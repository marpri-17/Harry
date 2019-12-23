import React from 'react';
import { Typography, CssBaseline, Container } from '@material-ui/core';
import Spells from './Spells';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/App.css';
import backgroundImage from '../images/background.jpg';

const App = () => {

  const useStyles = makeStyles({
    root: {
      width: "100%",
      //height: "100%",
      overflow: "auto",
      // backgroundColor: "#32a852",
      backgroundImage: `url(${backgroundImage})`
    },
    title: {
      color: "white",
      padding: "2%"
    },
    maingrid: {
      //height: "100%",
      maxHeight: "70vh"
    },
    mainSurface: {
      backgroundColor: 'rgba(99, 128, 123,0.4)'
    },
    mainText: {
      color: "white"
    }
  })

  const classes = useStyles();

  return (
    <Container className={`App ${classes.root}`} maxWidth={false}>
      <CssBaseline />
      <Typography component="h1" variant="h1" className={`${classes.title}`} paragraph={true}>Potter Wiki</Typography>
      <Spells maingrid={classes.maingrid} mainSurface={classes.mainSurface} mainText={classes.mainText} />
    </Container>
  );

}


export default App;
