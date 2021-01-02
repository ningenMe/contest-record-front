import React from 'react';
import {Box, Container} from '@material-ui/core';

import Notification from '../components/Notification'
import HomeTopTitle from '../atoms/HomeTopTitle'
import HomeTopCard from '../atoms/HomeTopCard'

export const Home: React.FC = () => {
    return (
        <Container>
            <Box m={1}>
                <HomeTopTitle/>
            </Box>
            <Box m={1}>
                <HomeTopCard/>
            </Box>
            <Box m={5}>
                <Notification/>
            </Box>
        </Container>
      );
    }
export default Home