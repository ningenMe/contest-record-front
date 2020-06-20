import React  from 'react';
import * as Contents from '../assets/Contents';
import TextListCard from '../components/TextListCard';
import {Box,Card,CardContent,Typography} from '@material-ui/core';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Box p={1}>
                    <Card gutterBottom style={{ backgroundColor: '#FFFFCC'}}>
                        aaa
                    </Card> 
                </Box>

                <TextListCard title={Contents.HistoryTitle} items={Contents.HistoryBody}></TextListCard>
            </div>
        );
    }
}