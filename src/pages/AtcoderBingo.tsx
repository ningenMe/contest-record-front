import React from 'react';
import {Box, Container} from '@material-ui/core';
import {RouteComponentProps} from 'react-router-dom'

import AtcoderBingoRanking from '../components/AtcoderBingoRanking'
import AtcoderBingoSearch from '../components/AtcoderBingoSearch'
import AtcoderBingoTopTitle from '../atoms/AtcoderBingoTopTitle'
import AtcoderBingoTopCard from '../atoms/AtcoderBingoTopCard'
import queryString from 'query-string'

type PageProps = {} & RouteComponentProps<{atcoderId: string, bingoType: string}>;

export const AtcoderBingo: React.FC<PageProps> = (props) => {
    const queryParams = queryString.parse(props.location.search);
    const bingoType = (typeof queryParams.bingoType === 'string' ? queryParams.bingoType : "all");

    return (
        <Container>
            <Box m={2}>
                <AtcoderBingoTopTitle/>
            </Box>
            <Box m={1}>
                <AtcoderBingoTopCard/>
            </Box>
            <Box m={3}>
                <AtcoderBingoSearch atcoderId={props.match.params.atcoderId} bingoType={bingoType}/>
            </Box>
            <Box m={1}>
                <AtcoderBingoRanking atcoderId={props.match.params.atcoderId} bingoType={bingoType}/>
            </Box>
        </Container>
    );
}
export default AtcoderBingo