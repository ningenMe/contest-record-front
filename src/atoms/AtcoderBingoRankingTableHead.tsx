import {TableCell,TableHead,TableRow} from '@material-ui/core'

export const AtcoderBingoRankingTableHead = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>place</TableCell>
                <TableCell>contestName</TableCell>
                <TableCell>url</TableCell>
            </TableRow>
        </TableHead>
    );
}
export default AtcoderBingoRankingTableHead