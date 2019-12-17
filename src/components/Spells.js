import React from 'react';
import ResultCard from './ResultCard';
import SpellsFilter from './SpellsFilter';
import getSpellsFromServer from '../services/getSpellsFromServer';
import { Typography, Grid, Paper, TextField } from '@material-ui/core';


class Spells extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            spells: [],
            isLoading: true,
            nameUserQuery: "",
        };
        this.renderSpellTypeImage = this.renderSpellTypeImage.bind(this);
        this.handleSearchByName = this.handleSearchByName.bind(this);

    }

    componentDidMount() {
        getSpellsFromServer()
            .then(fetchedSpells => this.setState({
                spells: fetchedSpells,
                isLoading: false,
            }
            ));

    }
    handleSearchByName(e) {
        this.setState({
            nameUserQuery: e.target.value.toLowerCase(),
        })
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
        // console.log(types)
    }

    renderSpellsList(spells) {
        const { nameUserQuery } = this.state
        spells = spells.filter(spell => spell.name.toLowerCase().includes(nameUserQuery))
        return (spells.map(spell => {
            return (
                <ResultCard spell={spell} key={spell.id} />
            )
        }))
    }


    render() {
        const { spells, isLoading } = this.state

        if (spells.length !== 0) {
            this.renderSpellTypeImage();
        }
        console.log(this.state)
        return (
            <Paper component="section">
                <Typography variant="h3">Hechizos</Typography>
                <Grid direction="row" container={true} wrap="nowrap">
                    <SpellsFilter handleSearchByName={this.handleSearchByName} />
                    <Grid direction="row" container={true} item={true} justify="space-evenly" alignItems="center" xs={12}>
                        {(isLoading) ?
                            <Typography variant="h5">Cargando</Typography> : this.renderSpellsList(spells)
                        }
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default Spells;