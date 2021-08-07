// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = parseInt(line);


// 아래에 getItemByAmount 함수를 작성하세요.
// 1. 사용자가 입력한 값보다 작거나 같은 요소를 출력
const getItemByAmount = (data, amount) => {
    newArr = [];
    for(i=0; i<data.length; i++){
        if (amount >= data[i].price){
            newArr.push(data[i])
        }
    }


// 2. 출력한 값중에 최댓값을 출력
// 배열안의 객체들의 value값만 추출해서 최대값을 구해서 해당하는 객체만 추출하는 방법 알아오기
    // 방법1. - 어느 금액을 넣어도 0번째 인덱스값만 추출됨
    for(i=0; i<newArr.length; i++){
        if (newArr[i].price=Math.max(newArr[i].price)){
            return newArr[i]
        }
    }
    // 방법2. - 불완전한코드. 방법알아와서 다시 작성할 것
    newArrValues = Object.values(newArr.price)
    return Math.max(newArrValues)
}

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
`${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
'살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);




