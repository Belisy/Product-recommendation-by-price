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
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);


// 아래에 getItemByAmount 함수를 작성하세요.

function getItemByAmount(itemArray, userMoney){
    // 사용자 입력값보다 작거나 같은 요소들 출력하는 함수
        const fillteredArray = itemArray.filter(function(element){
            return element.price<=userMoney
        )
    // 위의 함수에서 나온 값을 가격에 따라 정렬
    fillteredArray.sort(function(a,b){
        return b.price - a.price
    })
    // 가장 큰 값 출력
    return  fillteredArray[0]
    }

    // null을 반환하는 것은 잘 모르겠습니다...