import React  from 'react';
import {Box,Card} from '@material-ui/core';
import AtcoderIdInput from '../components/AtcoderIdInput';
import Grid from '@material-ui/core/Grid';

export default function MainCard() {
    return (
        <Box p={3}>
            <Card gutterBottom style={{ backgroundColor: '#FFFFFF'}}>
                <Box p={1}>
                    <Grid container alignItems="center" justify="center">
                        <Grid item xs={2} md={4}></Grid>
                        <Grid item xs={8} md={4}>
                            <AtcoderIdInput></AtcoderIdInput>
                        </Grid>   
                        <Grid item xs={2} md={4}></Grid>
                    </Grid>
                </Box>
            </Card> 
        </Box>
    );
}