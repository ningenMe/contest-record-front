import React from 'react';
import {TableBody,TableCell,TableRow} from '@material-ui/core'
import BingoRank from '../interface/BingoRank'
import { NavLink } from 'reactstrap';

interface InnerProps{
    bingoRanks:BingoRank[]
};

export const AtcoderBingoRankingTableBody: React.FC<InnerProps> = (props) => {
    return (
        <TableBody>
        {
            props.bingoRanks.map((bingoRank) => (
                <TableRow key={bingoRank.place}>
                    <TableCell component="th" scope="row">{bingoRank.place}</TableCell>
                    <TableCell>
                        <NavLink href={bingoRank.url} target={"_blank"}>{bingoRank.contestId}</NavLink>
                    </TableCell>
                </TableRow>
            ))
        }
        </TableBody>
    );
}
export default AtcoderBingoRankingTableBody