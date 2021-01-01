import React, {useState,useEffect} from 'react';
import {Table} from '@material-ui/core'
import BingoRank from '../interface/BingoRank'
import AtcoderUserBingoGetRepository from '../repository/AtcoderUserBingoGetRepository'
import AtcoderBingoRankingTableHead  from '../atoms/AtcoderBingoRankingTableHead'
import AtcoderBingoRankingTableBody from '../atoms/AtcoderBingoRankingTableBody'

interface InnerProps{
    atcoderId: string,
    bingoType: string
};

export const AtcoderBingoRanking: React.FC<InnerProps> = (props) => {
    const [bingoRanks, setRows] = useState<BingoRank[]>([]);
    const fetchRows = async () => {
        setRows(await AtcoderUserBingoGetRepository(props.atcoderId,props.bingoType));
        console.log(bingoRanks);
    }
    useEffect(() => {
        fetchRows();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.atcoderId,props.bingoType]);
    return (
        <Table size="small" aria-label="a dense table">
            <AtcoderBingoRankingTableHead />
            <AtcoderBingoRankingTableBody bingoRanks={bingoRanks} />
        </Table>
    );
}
export default AtcoderBingoRanking