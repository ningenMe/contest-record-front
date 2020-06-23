import React  from 'react';
import {Box,Card,Container} from '@material-ui/core';
import AtcoderIdInput from '../components/AtcoderIdInput';


export default function MainCard() {
    return (
        <Container maxWidth="sm">
        <Box p={1}>
            <Card gutterBottom style={{ backgroundColor: '#FFFFFF'}}>
                <Box p={3}>
                        <AtcoderIdInput></AtcoderIdInput>
                </Box>
            </Card> 
        </Box>
        </Container>
    );
}