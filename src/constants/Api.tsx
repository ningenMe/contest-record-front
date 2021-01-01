export const Api = {
    atcoderUserBingoGet : ((atcoderId:string, bingoType:string):string => ("https://api.ningenme.net/v1/compro/sites/AtCoder/users/"+atcoderId+"/bingo/" + bingoType))
}   
export default Api