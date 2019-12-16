import React from 'react';
import { Card, CardMedia, Typography, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const ResultCard = ({ spell }) => {
    const useStyles = makeStyles({
        card: {
            height: "140px",
            maxWidth: "25%",
        }
    })

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <Typography component="h4" variant="h5">{spell.name}</Typography>
                <Typography variant="subtitle1" paragraph={true}>{spell.type}</Typography>
            </CardActionArea>
            <Typography variant="body2">{spell.description}</Typography>
        </Card>)
}

export default ResultCard;