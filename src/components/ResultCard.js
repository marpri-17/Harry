import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const ResultCard = ({ spell }) => {
    const useStyles = makeStyles({
        card: {
            height: "140px"
        }
    })

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Typography>{spell.name}</Typography>
        </Card>)

}

export default ResultCard;