import React, { useState } from 'react';
import {TextField, Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'

import LinkPath from '../constants/LinkPath'

interface InnerProps{
    atcoderId: string
}

export const AtcoderBingoSearch: React.FC<InnerProps> = (props) => {      
    const [atcoderId, setAtcoderId] = useState(props.atcoderId);
    const reflectAtcoderId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAtcoderId(event.target.value);
    };
    const history = useHistory();
    const transitionAtcoderBingoUser = () => {
        history.push(LinkPath.atcoderBingo.url + "/" + atcoderId);
    }

    return (
        <>
            <TextField 
                required
                id="outlined-required"
                label="atcoder id"
                variant="outlined"
                placeholder="input atcoder id"
                onChange={reflectAtcoderId}
            />
            <Button variant="contained" onClick={transitionAtcoderBingoUser} size="large">search</Button>
        </>
    );
}
export default AtcoderBingoSearch