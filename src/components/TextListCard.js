import React  from 'react';
import {Box,Card,CardContent,Typography} from '@material-ui/core';

export default class TextListCard extends React.Component {
    render() {
        const listItems = this.props.items.map((item) =>
            <Typography align="left">
                {item}
            </Typography>
        );
        return (
            <Box p={1}>
                <Card gutterBottom style={{ backgroundColor: '#FFFFCC'}}>
                    <Typography variant="h6" align="left" style={{ backgroundColor: '#483D8B', color: '#FFFFEE'}}>
                        {this.props.title}
                    </Typography>
                    <CardContent>
                        {listItems}
                    </CardContent>
                </Card> 
            </Box>
        );
    }
}