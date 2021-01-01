import React from 'react';
import {TableBody,TableCell,TableRow,Typography} from '@material-ui/core'
import BingoRank from '../interface/BingoRank'
import { NavLink } from 'reactstrap';

interface InnerProps{
    bingoRanks:BingoRank[]
};

export const AtcoderBingoRankingTableBody: React.FC<InnerProps> = (props) => {
    const createTableCell = (bingoRank:BingoRank) => {
        if(bingoRank.contestId === "UNKNOWN") {
            return (
                <TableRow key={bingoRank.place} style={{backgroundColor:'#757575', color: '#fafafa',}}>
                    <TableCell component="th" scope="row">{bingoRank.place}</TableCell>
                    <TableCell size="medium">
                        <Typography>No Contest</Typography>
                    </TableCell>
                </TableRow>
            );
        }
        else {
            return (
                <TableRow key={bingoRank.place} hover>
                    <TableCell component="th" scope="row">{bingoRank.place}</TableCell>
                    <TableCell size="medium">
                        <NavLink href={bingoRank.url} target={"_blank"}>{bingoRank.contestId}</NavLink>
                    </TableCell>
                </TableRow>
            );
        }
    };

    return (
        <TableBody>
        {
            props.bingoRanks.map(
                (bingoRank) => (createTableCell(bingoRank)) 
            )
        }
        </TableBody>
    );
}
export default AtcoderBingoRankingTableBody