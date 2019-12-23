import React from 'react';
import charmPic from '../images/charmPic.jpg';
import enchantmentPic from '../images/Enchantment.jpg';
import spellPic from '../images/spell.jpg';
import hexPic from '../images/hex.jpg';
import cursePic from '../images/curse.png';
import jinxPic from '../images/jinx.jpg';
import { Card, CardMedia, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const ResultCard = ({ spell }) => {
    const useStyles = makeStyles({
        cardActionArea: {
            height: "100%",
            padding: "0"

        },
        card: {
            width: "15rem",
            //flexGrow: 0.5,
            height: "15rem",
            //maxWidth: "200px",
            margin: "2%",
            backgroundColor: 'rgb(99, 128, 123)',
            transition: 'all 1s',
            '&:hover': {
                backgroundColor: 'rgba(206, 227, 188)',
                backgroundSize: "cover"
            },
        },
        pic: {
            height: "6.25rem",
            justifySelf: "flex-start",
            alignSelf: "flex-start"
        },
        bodyfont: {
            fontSize: "100%"
        }

    })

    const classes = useStyles();

    const SelectPic = (spellType) => {
        const imagesPath = {
            charm: `${charmPic}`,
            enchantment: `${enchantmentPic}`,
            spell: `${spellPic}`,
            hex: `${hexPic}`,
            curse: `${cursePic}`,
            jinx: `${jinxPic}`
        }
        spellType = spellType.toLowerCase()
        if (imagesPath[spellType]) {
            return imagesPath[spellType]
        } return jinxPic

    }

    return (
        < Card className={classes.card}>
            <CardMedia
                className={classes.pic}
                image={SelectPic(spell.type)}
                title="Encantamiento o hechizo"
            />
            <Typography component="h4" variant="h5">{spell.name}</Typography>
            <Typography variant="overline" >{spell.type}</Typography>
            <Divider />
            <Typography variant="body1" className={classes.bodyfont}>{spell.description}</Typography>


        </Card >
    )
}

export default ResultCard;