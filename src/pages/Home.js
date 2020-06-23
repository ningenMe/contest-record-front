import React  from 'react';
import * as Contents from '../assets/Contents';
import TextListCard from '../components/TextListCard';
import NotificationCard from '../components/NotificationCard';
import MainCard from '../components/MainCard';

export default class Home extends React.Component {
    render() {        
        return (
            <div>
                <NotificationCard body={Contents.NotificationBody}></NotificationCard>
                <MainCard></MainCard>
                <TextListCard title={Contents.HistoryTitle} items={Contents.HistoryBody}></TextListCard>
            </div>
        );
    }
}