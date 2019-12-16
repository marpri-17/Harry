import React from 'react';
import ResultCard from './ResultCard';
import getSpellsFromServer from '../services/getSpellsFromServer';
import { Typography, Grid, Paper, TextField } from '@material-ui/core';

class Spells extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            spells: [],
            isLoading: true,
        };
        this.renderSpellTypeImage = this.renderSpellTypeImage.bind(this);

    }

    componentDidMount() {
        getSpellsFromServer()
            .then(fetchedSpells => this.setState({
                spells: fetchedSpells,
                isLoading: false,
            }
            ));

    }

    renderSpellTypeImage() {
        const { spells } = this.state;
        let types = [];
        for (let spell of spells) {
            if (types.includes(spell.type.toLowerCase())) {
            } else {
                types.push(spell.type.toLowerCase())
            }
        }
        console.log(types)
    }


    render() {
        const { spells, isLoading } = this.state

        if (spells.length !== 0) {
            this.renderSpellTypeImage();
        }

        return (
            <Paper component="section">
                <Typography variant="h3">Hechizos</Typography>
                <TextField autoFocus={true} id="spellUserQuery" label="Buscar el hechizo" type="search" variant="filled" htmlFor="search for spell's name" />
                <Grid>
                    {(isLoading) ?
                        <Typography variant="caption">"Cargando"</Typography> :
                        spells.map(spell => {
                            debugger;
                            return (
                                <ResultCard spell={spell} key={spell.id} />
                            )
                        })}
                </Grid>
            </Paper>
        )
    }
}

export default Spells;