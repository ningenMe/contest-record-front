import Link from '../interface/Link'

const root    : Link = {url:"/"       , name:"root"}
const home    : Link = {url:"/home"   , name:"home"}
const twitter : Link = {url:"/twitter", name:"twitter"}
const bingo   : Link = {url:"/bingo"  , name:"bingo"}

export const LinkUrl = {
    root,
    home,
    twitter,
    bingo,
    transition: (url: string) => {return '#' + url;}
}   
export default LinkUrl 