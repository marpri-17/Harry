import React from 'react';
import charmPic from '../images/spellPic.jpg';
import enchancementPic from '../images/enchancement.jpg';
import { Card, CardMedia, Typography, CardActionArea, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const ResultCard = ({ spell }) => {
    const useStyles = makeStyles({
        card: {
            width: "50%",
            height: "auto",
            maxWidth: "200px",
            margin: "2%"
        },
        pic: {
            height: 60
        },
        bodyfont: {
            fontSize: "100%"
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
                <Typography variant="overline" >{spell.type}</Typography>
                <Divider />
                <Typography variant="body1" paragraph={true} className={classes.bodyfont}>{spell.description}</Typography>
            </CardActionArea>
        </Card>)
}

export default ResultCard;