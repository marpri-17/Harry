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

        inputname: {
            marginTop: "5%"
        },
        inputtype: {
            marginTop: "15%"
        },
        font: {
            color: "white",
        }

    })

    const classes = styles();

    const renderSpellTypeSelect = () => {
        const types = getDifferentsTypes(spells);
        return (
            <Select id="spellsSelect" variant="standard" placeholder="Spell Type" onChange={handleSelectByType} defaultValue={types[0]} className={classes.font}>
                {types.map(type => {
                    return (
                        <MenuItem value={(type === "all") ? "" : type} key={`${type}`} divider >{type}</MenuItem>
                    )
                })}
            </Select>
        )
    }


    return (spells.length !== 0) ?
        <Box className={classes.body} >

            <TextField autoFocus={true} id="spellUserQuery" label="Buscar el hechizo" type="search" variant="filled" htmlFor="search for spell's name" onChange={handleSearchByName} className={classes.font} />

            <InputLabel id="spellsSelect" className={classes.font}>Filter by spell type</InputLabel>
            {renderSpellTypeSelect()}
        </Box>
        : ""

}

export default spellsFilters;