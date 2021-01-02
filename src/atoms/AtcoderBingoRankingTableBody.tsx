import React from 'react';
import {Link,TableBody,TableCell,TableRow,Typography} from '@material-ui/core'
import BingoRank from '../interface/BingoRank'
import AtcoderUser from '../constants/AtcoderUser'

interface InnerProps{
    bingoRanks:BingoRank[]
};

export const AtcoderBingoRankingTableBody: React.FC<InnerProps> = (props) => {
    const createPerformance = (performance:number) => {
        if(typeof performance !== 'number' || performance <= 0) return '';
        return performance;
    }
    const createTableCell = (bingoRank:BingoRank) => {
        if(bingoRank.contestId === "UNKNOWN") {
            return (
                <TableRow key={bingoRank.place} style={{backgroundColor:'#757575', color: '#fafafa',}}>
                    <TableCell component="th" scope="row">{bingoRank.place}</TableCell>
                    <TableCell size="medium">
                        <Typography>No Contest</Typography>
                    </TableCell>
                    <TableCell size="medium"></TableCell>
                </TableRow>
            );
        }
        else {
            return (
                <TableRow key={bingoRank.place} hover>
                    <TableCell component="th" scope="row">{bingoRank.place}</TableCell>
                    <TableCell size="medium">
                        <Link href={bingoRank.url} target={"_blank"}>{bingoRank.contestId}</Link>
                    </TableCell>
                    <TableCell size="medium" style={{color: AtcoderUser.getPerformanceColor(bingoRank.performance)}}>{createPerformance(bingoRank.performance)}</TableCell>
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