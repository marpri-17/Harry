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
            typeUserQuery: "",
            // limit: 20,
            // offset: 0, 
        };
        this.handleSearchByName = this.handleSearchByName.bind(this);
        this.handleSelectByType = this.handleSelectByType.bind(this);

    }

    componentDidMount() {
        getSpellsFromServer()
            .then(fetchedSpells => this.setState({
                spells: fetchedSpells,
                isLoading: false,
            }
            ));
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
        this.setState({
            typeUserQuery: e.target.value,
        })
        console.log(e.target.value);
    }

    renderSpellsList(spells) {
        const { nameUserQuery, typeUserQuery } = this.state;
        spells = spells.filter(spell => {
            return spell.name.toLowerCase().includes(nameUserQuery)
        }).filter(spell => (typeUserQuery === "") ? true : spell.type.toLowerCase() === typeUserQuery)
        return (
            <ResultList spells={spells} />
        )
    }


    render() {

        const { spells, isLoading } = this.state;

        const classes = this.props;
        return (
            <Paper component="section" className={classes.mainSurface}>
                <Typography variant="h3" className={classes.mainText}>Hechizos</Typography>
                <Grid className={`${classes.maingrid}`} direction="row" container={true} item={true} wrap="nowrap" xs={12} justify="space-evenly">
                    {(isLoading) ?
                        <Typography variant="h5" align="center" className={classes.mainText}>Cargando</Typography> :
                        <>
                            <SpellsFilters handleSearchByName={this.handleSearchByName} spells={spells} handleSelectByType={this.handleSelectByType} />
                            {this.renderSpellsList(spells)}
                        </>
                    }
                </Grid>
            </Paper >
        )
    }
}

export default Spells;