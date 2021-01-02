export const AtcoderUser = {
    getPerformanceColor : ((performance:number) => {
        if(typeof performance !== 'number' || performance <= 0) return '#000000';
        if(performance < 400 ) return '#808080'; //gray
        if(performance < 800 ) return '#804000'; //brown
        if(performance < 1200) return '#008000'; //green
        if(performance < 1600) return '#00C0C0'; //cyan
        if(performance < 2000) return '#0000FF'; //blue
        if(performance < 2400) return '#C0C000'; //yellow
        if(performance < 2800) return '#FF8000'; //orange
        return '#FF0000';                        //red
    })
}   
export default AtcoderUser