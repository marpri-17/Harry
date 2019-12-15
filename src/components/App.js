import React from 'react';
import ResultCard from './ResultCard';
import { Typography, Grid, Paper, TextField, } from '@material-ui/core';
import '../styles/App.css';
// const keyForPotterApi = $2a$10$9XwMOrQ/SFxrwkZcUiuzTez37kkckl3TeyJuVhrPQlBjA554U37G6


class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      spells: [{
        description: "eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda",
        name: "Wingardium Leviosa",
        picture: "pic",
        type: "Spell",
        id: "spellS0",
      }, {
        description: "eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda",
        name: "Wingardium Leviosa",
        picture: "pic",
        type: "Charm",
        id: "spellS1",
      }, {
        description: "eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda",
        name: "Wingardium Leviosa",
        picture: "pic",
        type: "Spell",
        id: "spellS2",
      }, {
        description: "eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda",
        name: "Wingardium Leviosa",
        picture: "pic",
        type: "Spell",
        id: "spellS3",
      }
      ]
    };
  }

  render() {
    const { spells } = this.state;
    return (
      <div className="App">
        <Grid >
          <Typography variant="h1">Potter Wiki</Typography>
        </Grid>
        <Paper component="section">
          <Typography variant="h3">Hechizos</Typography>
          <TextField autoFocus={true} id="spellUserQuery" label="Buscar el hechizo" type="search" variant="filled" htmlFor="search for spell's name" />
          <Grid>
            {spells.map(spell => {
              return (
                <ResultCard spell={spell} />
              )
            })}
          </Grid>
        </Paper>
      </div>
    );
  }
}


export default App;
