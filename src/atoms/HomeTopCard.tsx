import React from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import HomeContents from '../constants/HomeContents'

export const HomeTopCard: React.FC = () => {

    return (
        <Card style={{ backgroundColor: '#FEFAE3'}}>
            <CardContent>
                <Typography align="left">
                    {HomeContents.card}
                </Typography>
            </CardContent>
        </Card>
      );
    }
export default HomeTopCard