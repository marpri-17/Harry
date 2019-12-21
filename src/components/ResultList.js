import React from 'react';
import ResultCard from './ResultCard';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const ResultList = (props) => {

    const styles = makeStyles({
        containerList: {
            maxHeight: "100vh",
            overflow: "auto",
            flexGrow: 1,
        }
    })

    const { spells } = props;

    const classes = styles();
    return (
        <Grid className={classes.containerList} container item >
            {spells.map(spell => {
                return (
                    <ResultCard spell={spell} key={spell.id} />
                )
            })}
        </Grid>

    )

}

export default ResultList;