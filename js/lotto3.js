
function lotto3(){
    const lottoArr3 = []
    for (let i = 0; i < 6; i++) {
        const num3 = parseInt(Math.random()*45) +1
        if(lottoArr3.indexOf(num3) === -1){
            lottoArr3.push(num3)
        } else {i--}
    }// for end
    lottoArr3.sort((a,b)=>a-b)

    return lottoArr3
}