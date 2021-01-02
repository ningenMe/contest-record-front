import Message from '../interface/Message'

const notification : Message[] = [
    {date:"2020-12-31",text:"bingoページの追加を行いました"},
    {date:"2020-06-20",text:"開設"}
];

export const HomeContents = {
    notification,
    title: "Contest Record",
    card: "競技プログラミング関連のwebアプリケーションのサイトです。ナビゲーションバーに順次機能追加していきます。不具合は上記リンクの@ningenMeまで。"
}
export default HomeContents