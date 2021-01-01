import React from 'react';
import {Box, Container} from '@material-ui/core';
import {RouteComponentProps} from 'react-router-dom'

import AtcoderBingoRanking from '../components/AtcoderBingoRanking'
import AtcoderBingoSearch from '../components/AtcoderBingoSearch'

type PageProps = {} & RouteComponentProps<{atcoderId: string}>;

export const AtcoderBingo: React.FC<PageProps> = (props) => {
    return (
        <Container>
            <Box m={5}>
                <AtcoderBingoSearch atcoderId={props.match.params.atcoderId}/>
            </Box>
            <Box m={5}>
                <AtcoderBingoRanking atcoderId={props.match.params.atcoderId}/>
            </Box>
        </Container>
    );
}
export default AtcoderBingo