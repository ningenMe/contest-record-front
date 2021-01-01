import React from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import AtcoderBingoContents from '../constants/AtcoderBingoContents'

export const AtcoderBingoTopCard: React.FC = () => {

    return (
        <Card style={{ backgroundColor: '#FEFAE3'}}>
            <CardContent>
                <Typography align="left">
                    {AtcoderBingoContents.card}
                </Typography>
            </CardContent>
        </Card>
      );
    }
export default AtcoderBingoTopCard