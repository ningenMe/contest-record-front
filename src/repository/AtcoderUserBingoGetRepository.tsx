import axios from 'axios';
import BingoRank from '../interface/BingoRank'
import Api from '../constants/Api'

export const AtcoderUserBingoGetRepository = async (atcoderId:string): Promise<BingoRank[]> => {
    let bingoRanks = new Array<BingoRank>();

    if (atcoderId === null || atcoderId === undefined) {
        return bingoRanks;
    }

    const url = Api.atcoderUserBingoGet(atcoderId);
    await axios
        .get(url)
        .then((results) => {
            bingoRanks = results.data.atcoderUserHistories;
        })
        .catch((error) => {
            console.log(error.status);
        }); 
    return bingoRanks;
}
export default AtcoderUserBingoGetRepository