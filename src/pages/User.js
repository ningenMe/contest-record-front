import React  from 'react';
import axios from 'axios';

const API_ATCODER_USERS = 'https://api.ningenme.net/compro/atcoder/users/';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rank : 0
        };
    }
    getAtcoderUser() {
        axios
        .get(API_ATCODER_USERS+this.props.match.params.userId)
        .then((results) => {
            this.setState({
                rank: results.data.rank
            });
        },
        )
        .catch(() => {
            console.log('failed');
        });
    }

    render() {
        return (
            <div>
                {this.props.match.params.userId}<br/>
                {this.state.rank}<br/>
                <input
                    type="button"
                    value="get"
                    onClick={() => this.getAtcoderUser()}
                />
            </div>
        );
    }
}