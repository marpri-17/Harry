import React from 'react';
import charmPic from '../images/charmPic.jpg';
import enchantmentPic from '../images/Enchantment.jpg';
import spellPic from '../images/spell.jpg';
import hexPic from '../images/hex.jpg';
import cursePic from '../images/curse.png';
import jinxPic from '../images/jinx.jpg';
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
        < Card className={classes.card} >
            <CardActionArea>
                <CardMedia
                    className={classes.pic}
                    image={SelectPic(spell.type)}
                    title="Encantamiento o hechizo"
                />
                <Typography component="h4" variant="h5">{spell.name}</Typography>
                <Typography variant="overline" >{spell.type}</Typography>
                <Divider />
                <Typography variant="body1" paragraph={true} className={classes.bodyfont}>{spell.description}</Typography>
            </CardActionArea>
        </Card >
    )
}

export default ResultCard;