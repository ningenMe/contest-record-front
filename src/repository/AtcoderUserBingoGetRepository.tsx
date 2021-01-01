import axios from 'axios';
import BingoRank from '../interface/BingoRank'
import Api from '../constants/Api'

export const AtcoderUserBingoGetRepository = async (atcoderId:string,bingoType:string): Promise<BingoRank[]> => {
    let bingoRanks = new Array<BingoRank>();

    if (atcoderId === null || atcoderId === undefined || bingoType === null || bingoType === undefined) {
        return bingoRanks;
    }

    const url = Api.atcoderUserBingoGet(atcoderId,bingoType);
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