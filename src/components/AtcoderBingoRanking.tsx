import React, {useState,useEffect} from 'react';
import {Table} from '@material-ui/core'
import BingoRank from '../interface/BingoRank'
import AtcoderUserBingoGetRepository from '../repository/AtcoderUserBingoGetRepository'
import AtcoderBingoRankingTableHead  from '../atoms/AtcoderBingoRankingTableHead'
import AtcoderBingoRankingTableBody from '../atoms/AtcoderBingoRankingTableBody'

interface InnerProps{
    atcoderId: string
};

export const AtcoderBingoRanking: React.FC<InnerProps> = (props) => {
    const [rows, setRows] = useState<BingoRank[]>([]);
    const fetchRows = async () => {
        setRows(await AtcoderUserBingoGetRepository(props.atcoderId));
    }
    useEffect(() => {
        fetchRows();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <Table size="small" aria-label="a dense table">
            <AtcoderBingoRankingTableHead />
            <AtcoderBingoRankingTableBody bingoRanks={rows} />
        </Table>
    );
}
export default AtcoderBingoRanking