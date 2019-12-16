import React from 'react';
import charmPic from '../images/spellPic.jpg';
import enchancementPic from '../images/enchancement.jpg';
import { Card, CardMedia, Typography, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const ResultCard = ({ spell }) => {
    const useStyles = makeStyles({
        card: {

            maxWidth: "25%",
        },
        pic: {
            height: 60
        }
    })

    const classes = useStyles();

    const SelectPic = (spellType) =>
        (spellType.toLowerCase() === "charm") ? true : false;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.pic}
                    image={SelectPic(spell.type) ? charmPic : enchancementPic}
                    title="Encantamiento o hechizo"
                />
                <Typography component="h4" variant="h5">{spell.name}</Typography>
                <Typography variant="subtitle1" paragraph={true}>{spell.type}</Typography>
            </CardActionArea>
            <Typography variant="body2" component="p">{spell.description}</Typography>
        </Card>)
}

export default ResultCard;