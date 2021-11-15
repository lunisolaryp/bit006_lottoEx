
// 4 - 이벤트 처리 (버튼을 어떤 행동? 어떻게 작동?)
// 4.1 - lotto.html에서 CLICK 버튼 찾기
const btn = document.getElementById("btn")
// console.log(btn)

btn.addEventListener("click",()=>{
    // 4.2 - 로또 번호가 로또 페이지에 나오게 할거야(CLICK 버튼 밑 <div>에 → div의 id = resultDiv로 쉽게 찾을 수 있게 표시해줌)
    const target = document.getElementById("resultDiv")
    // 4.3 - 번호들이 h3 크기로 나왔으면 좋겠어 → **5번 안으로
    // const tag = document.createElement("h3")
    const balls = lotto()
    // 4.3.1 - 데이터를 텍스트로 표현할때
    // const textNode = document.createTextNode(balls)
    // 4.4 - resultDiv 안에 h3태그 안에 로또 번호가 들어가게 → **5번 안으로
    // resultDiv.appendChild(tag)
    // resultDiv.appendChild(textNode)

    // 5 - 로또 번호 하나씩 한 줄에 나오게
    // for (const num of balls) {
    //     const tag = document.createElement("h3")
    //     const textNode = document.createTextNode(num)
    //     resultDiv.appendChild(tag)
    //     tag.appendChild(textNode)
    // }

    // 6 - CLICK버튼 누르면 로또 1세트만 나오게 하기 (누를때마다 이어서 나옴)
    target.innerHTML = ''

    // 5.1 - forin loop
    for (const num in balls) {
        const tag = document.createElement("h3")
        const textNode = document.createTextNode(balls[num]) // num을 넣으면 index값만 나와
        resultDiv.appendChild(tag)
        tag.appendChild(textNode)
    }
}, false)


// 3 - 함수로 만들기
function lotto(){
    // 1 - 번호 6개 담을 배열
    const lottoArr = []
    // 2 - 랜덤 번호 6개 만드는 for loop
    for (let i = 0; i < 6; i++) {
        const num = parseInt(Math.random()*45)+1
        // 2.1 - num이 배열에 포함되어있지 않으면 -1 → 배열에 넣어야해
        // if(lottoArr.indexOf(num) === -1){
        //     lottoArr.push(num)
        // // 2.2 - 배열에 있는 칭구칭긔면 i번째 번호 다시 뽑아야해 = 중복 번호뽑은 i번째만 초기화
        // } else {i--}

        if(lottoArr.indexOf(num) > 0) {
            console.log("중복")
            i--
            continue
        }
        lottoArr.push(num)
    }
    // 3.1 - 함수의 return값 = lottoArr 배열인데, 숫자 오름차순 정렬
    lottoArr.sort((a,b)=>a-b)
    // lottoArr.sort() - 이상한 정렬이 돼
    return lottoArr
}

// console.log(lottoArr)
