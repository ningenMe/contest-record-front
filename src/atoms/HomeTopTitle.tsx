import React from 'react';
import {Box, Typography} from '@material-ui/core';
import HomeContents from '../constants/HomeContents'

export const HomeTopTitle: React.FC = () => {
    return (
        <Typography component="div">
            <Box fontSize="h5.fontSize" fontWeight="fontWeightBold">
                {HomeContents.title}
            </Box>
        </Typography>
    );
}
export default HomeTopTitle