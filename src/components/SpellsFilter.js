import React from 'react';
import { TextField } from '@material-ui/core'

const spellsFilter = ({ handleSearchByName }) => {
    return (
        <TextField autoFocus={true} id="spellUserQuery" label="Buscar el hechizo" type="search" variant="filled" htmlFor="search for spell's name" onChange={handleSearchByName} />
    )
}

export default spellsFilter;