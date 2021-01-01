import React from 'react';
import {Box, Typography} from '@material-ui/core';
import AtcoderBingoContents from '../constants/AtcoderBingoContents'

export const AtcoderBingoTopTitle: React.FC = () => {
    return (
        <Typography component="div">
            <Box fontSize="h5.fontSize" fontWeight="fontWeightBold">
                {AtcoderBingoContents.title}
            </Box>
        </Typography>
    );
}
export default AtcoderBingoTopTitle