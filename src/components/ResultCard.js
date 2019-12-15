import React from 'react';
import { Card, Typography } from '@material-ui/core';

const ResultCard = ({ spell }) => {
    return (
        <Card>
            <Typography>{spell.name}</Typography>
        </Card>)

}

export default ResultCard;