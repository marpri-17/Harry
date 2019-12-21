import React from 'react';
import SpellsFilters from './SpellsFilters';
import ResultList from './ResultList';
import getSpellsFromServer from '../services/getSpellsFromServer';
import { Typography, Grid, Paper } from '@material-ui/core';





class Spells extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            spells: [],
            isLoading: true,
            nameUserQuery: "",
            // limit: 20,
            // offset: 0, 
        };
        this.handleSearchByName = this.handleSearchByName.bind(this);
        // this.handlePagination = this.handlePagination.bind(this);

    }

    componentDidMount() {
        getSpellsFromServer()
            .then(fetchedSpells => this.setState({
                spells: fetchedSpells,
                isLoading: false,
            }
            ));
        console.log(this.props)
    }

    // handlePagination() {
    //     const { limit, offset } = this.state;

    // }

    handleSearchByName(e) {
        this.setState({
            nameUserQuery: e.target.value.toLowerCase(),
        })
    }

    handleSelectByType(e) {
        console.log(e.target.value);
    }

    renderSpellsList(spells) {
        const { nameUserQuery } = this.state
        spells = spells.filter(spell => spell.name.toLowerCase().includes(nameUserQuery))
        return (
            <ResultList spells={spells} />
        )
    }


    render() {

        const { spells, isLoading } = this.state;

        const classes = this.props;
        return (
            <Paper component="section">
                <Typography variant="h3">Hechizos</Typography>
                <Grid className={`${classes.maingrid}`} direction="row" container={true} item={true} wrap="nowrap" xs={12} justify="space-evenly">
                    {(isLoading) ?
                        <Typography variant="h5" align="center">Cargando</Typography> :
                        <>
                            <SpellsFilters handleSearchByName={this.handleSearchByName} spells={spells} />
                            {this.renderSpellsList(spells)}
                        </>
                    }
                </Grid>
            </Paper >
        )
    }
}

export default Spells;