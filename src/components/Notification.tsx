import React from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import {Badge} from 'reactstrap'
import HomeContents from '../constants/HomeContents'

export const Notification: React.FC = () => {

    return (
        <Card style={{ backgroundColor: '#FEFAE3'}}>
            <Typography variant="h6" align="left" style={{ backgroundColor: '#483D8B', color: '#FFFFEE'}}>
                Notification
            </Typography>
            <CardContent>
                {
                    HomeContents.notification.map((item) => (
                        <Typography align="left">
                            <Badge color="info" style={{margin: 6,padding: 6}}> {item.date} </Badge>
                            {item.text}
                        </Typography>
                    ))
                }
            </CardContent>
        </Card>
      );
    }
export default Notification