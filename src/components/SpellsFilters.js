import React from 'react';
import { TextField, Select, MenuItem, InputLabel, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function getDifferentsTypes(spells) {
    let types = ["all"];
    for (let spell of spells) {
        if (types.includes(spell.type.toLowerCase())) {
        } else {
            types.push(spell.type.toLowerCase());
        }
    }
    return types
}


const spellsFilters = ({ handleSearchByName, spells, handleSelectByType }) => {

    const styles = makeStyles({
        // body: {
        //     flexGrow: 1
        // },
        inputname: {
            marginTop: "5%"
        },
        inputtype: {
            marginTop: "15%"
        }

    })

    const classes = styles();

    const renderSpellTypeSelect = () => {
        const types = getDifferentsTypes(spells);
        return (
            <Select id="spellsSelect" variant="standard" autoWidth={true} placeholder="Spell Type"   >
                {types.map(type => {
                    return (
                        <MenuItem value={type} key={`${type}`} divider={true}>{type}</MenuItem>
                    )
                })}
            </Select>
        )
    }


    return (spells.length !== 0) ?
        <Box className={classes.body} >

            <TextField autoFocus={true} id="spellUserQuery" label="Buscar el hechizo" type="search" variant="filled" htmlFor="search for spell's name" onChange={handleSearchByName} />

            <InputLabel id="spellsSelect">Filter by spell type</InputLabel>
            {renderSpellTypeSelect()}
        </Box>
        : ""

}

export default spellsFilters;