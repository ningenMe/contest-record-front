import Link from '../interface/Link'

const root             : Link = {url:"/"       ,                        name:"root"}
const home             : Link = {url:"/home"   ,                        name:"home"}
const twitter          : Link = {url:"/twitter",                        name:"twitter"}
const atcoderBingo     : Link = {url:"/atcoder-bingo",                  name:"atcoder-bingo"}
const atcoderBingoUser : Link = {url:"/atcoder-bingo/users/:atcoderId", name:"atcoder-bingo"}

export const LinkPath = {
    root,
    home,
    twitter,
    atcoderBingo,
    atcoderBingoUser,
    transition: (url: string) => {return '#' + url;}
}   
export default LinkPath 