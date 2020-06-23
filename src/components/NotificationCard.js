import React  from 'react';
import {Box,Card} from '@material-ui/core';

export default class TextListCard extends React.Component {
    render() {
        return (
            <Box p={1}>
                <Card gutterBottom style={{ backgroundColor: '#CBFFD3'}}>
                        {this.props.body}
                </Card> 
            </Box>
        );
    }
}