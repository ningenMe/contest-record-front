import React from 'react';
import {Box, Container, TextField} from '@material-ui/core';
import BingoRanking from '../components/BingoRanking'
import {RouteComponentProps} from 'react-router-dom'

type PageProps = {} & RouteComponentProps<{atcoderId: string}>;

export const AtcoderBingo: React.FC<PageProps> = (props) => {
    return (
        <Container>
            <Box m={3}>
                <TextField
                    required
                    id="outlined-required"
                    label="atcoder id"
                    variant="outlined"
                />
            </Box>
            {props.match.params.atcoderId}
            <Box m={1}>
                <BingoRanking/>
            </Box>
        </Container>
      );
    }
export default AtcoderBingo