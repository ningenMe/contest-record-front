import React from 'react';
import TweetIcon from '../atoms/TweetIcon'
import LinkPath from '../constants/LinkPath'
import LinkUrl from '../constants/LinkUrl'

interface InnerProps{
    atcoderId: string,
    bingoType: string
}

export const AtcoderBingoTweetIcon: React.FC<InnerProps> = (props) => {
    if(props.atcoderId===undefined || props.atcoderId===null || props.bingoType===undefined || props.bingoType===null) {
        return <></>;
    }    
    else {
        return (
            <TweetIcon text={""} url={LinkUrl.contestRecord.url + "/%23" + LinkPath.atcoderBingo.url + "/" + props.atcoderId + "?bingoType=" + props.bingoType}/>
        );
    }
}
export default AtcoderBingoTweetIcon