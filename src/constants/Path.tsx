export const Path = {
        root:         '/',
        home:         '/home',
        twitterSeach: '/twitter-search',
        bingo:        '/bingo',
        transition: (path: string) => {
            return '#' + path;
        }
    }   
export default Path