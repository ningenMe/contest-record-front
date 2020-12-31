import React from 'react';
import {Box, Container} from '@material-ui/core';

import Notification from '../components/Notification'

export const Home: React.FC = () => {
    return (
        <Container>
            <Box m={1}>
                <Notification/>
            </Box>
        </Container>
      );
    }
export default Home