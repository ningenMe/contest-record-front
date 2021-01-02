import {TableCell,TableHead,TableRow} from '@material-ui/core'

export const AtcoderBingoRankingTableHead = () => {
    return (
        <TableHead>
            <TableRow style={{backgroundColor:'#CCFFFF', color: '#fafafa',}}>
                <TableCell>place</TableCell>
                <TableCell>url</TableCell>
                <TableCell>performance</TableCell>
            </TableRow>
        </TableHead>
    );
}
export default AtcoderBingoRankingTableHead