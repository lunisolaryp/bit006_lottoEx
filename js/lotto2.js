
const btn2 = document.getElementById("btn2")
// console.log(btn)

btn2.addEventListener("click",()=>{
    const target2 = document.getElementById("resultDiv2")
    const balls2 = lotto2()

    target2.innerHTML = ''
    // 1.1 - let으로 선언하는 이유는 += 때문
    let str = ``
    // 1 - <h3>태그와 로또 번호 함께 변수에 담고, innerHTML 이용해 .html에 입력되게 하기
    for (const num2 of balls2) {
        str += `<h3>${num2}</h3>`
        target2.innerHTML = str
    }
    // console.log(str)
}, false)


function lotto2(){
    const lottoArr2 = []

    for (let i = 0; i < 6; i++) {
        const num2 = parseInt(Math.random() * 45) + 1

        if (lottoArr2.indexOf(num2) > 0) {
            console.log("중복")
            i--
            continue
        }
        lottoArr2.push(num2)
    }

    lottoArr2.sort((a, b) => a - b)

    return lottoArr2
}