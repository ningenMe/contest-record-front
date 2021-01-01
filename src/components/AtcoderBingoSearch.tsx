import React, { useState } from 'react';
import {TextField, Button, MenuItem} from '@material-ui/core';
import {useHistory} from 'react-router-dom'

import LinkPath from '../constants/LinkPath'
import AtcoderBingoContents from '../constants/AtcoderBingoContents'

interface InnerProps{
    atcoderId: string,
    bingoType: string
}

export const AtcoderBingoSearch: React.FC<InnerProps> = (props) => {      
    const [atcoderId, setAtcoderId] = useState(props.atcoderId);
    const reflectAtcoderId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAtcoderId(event.target.value);
    };
    const [bingoType, setBingoType] = useState(props.bingoType);
    const reflectBingoType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBingoType(event.target.value);
    };
    const history = useHistory();
    const transitionAtcoderBingoUser = () => {
        history.push(LinkPath.atcoderBingo.url + "/" + atcoderId + "?bingoType=" + bingoType);
    }

    return (
        <>
            <TextField 
                required
                id="outlined-required"
                label="atcoder id"
                variant="outlined"
                placeholder="input atcoder id"
                defaultValue={atcoderId}
                onChange={reflectAtcoderId}
            />
            <TextField 
                id="standard-select-currency"
                select
                variant="outlined"
                defaultValue={bingoType}
                onChange={reflectBingoType}
                style = {{width: '25ch'}}
                >
                    {AtcoderBingoContents.bingoTypeOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
            </TextField>
            <Button
                variant="contained"
                onClick={transitionAtcoderBingoUser}
                size="large"
            >search
            </Button>
        </>
    );
}
export default AtcoderBingoSearch