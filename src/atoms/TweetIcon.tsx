import React from 'react';
import LinkUrl from '../constants/LinkUrl'
import {Link} from '@material-ui/core'

interface InnerProps{
    text: string,
    url:  string,
};

export const TweetIcon: React.FC<InnerProps> = (props) => {
    const createTweetUrl = (text:string,url:string) => {
        return LinkUrl.twitterTweet.url + "?text=" + text + "&url=" + url; 
    }
    return (
        <Link href={createTweetUrl(props.text,props.url)} target="_blank">
            <img src="Twitter_Social_Icon_Rounded_Square_Color.png"
                 width="50"
                 height="50"
                 alt={LinkUrl.twitterTweet.url}
            />
        </Link>
    );
}
export default TweetIcon