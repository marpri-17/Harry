import React from 'react';
import ResultCard from './ResultCard';
import { Typography, Grid, Paper, TextField, } from '@material-ui/core';
import getSpellsFromServer from '../services/getSpellsFromServer';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      spells: [],
      isLoading: true,
    };


  }

  componentDidMount() {
    getSpellsFromServer()
      .then(fetchedSpells => this.setState({
        spells: fetchedSpells,
        isLoading: false,
      }));
  }

  render() {
    const { spells, isLoading } = this.state;
    return (
      <div className="App">
        <Grid >
          <Typography variant="h1">Potter Wiki</Typography>
        </Grid>
        <Paper component="section">
          <Typography variant="h3">Hechizos</Typography>
          <TextField autoFocus={true} id="spellUserQuery" label="Buscar el hechizo" type="search" variant="filled" htmlFor="search for spell's name" />
          <Grid>
            {(isLoading) ?
              <Typography variant="caption">"Cargando"</Typography> :
              spells.map(spell => {
                return (
                  <ResultCard spell={spell} key={spell.id} />
                )
              })}
          </Grid>
        </Paper>
      </div>
    );
  }
}


export default App;
