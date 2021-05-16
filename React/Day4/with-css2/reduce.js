const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const val = 0;

const total = number.reduce((val1, val2, idx, arr) => {
    console.log(`val1 : ${val1}, val2 : ${val2}`);
    return val1 + val2;
}, val);

console.log(total);


/*
    reduce
    val1 : reduce() 함수의 두번째 파라미터 val 값이 넘어온다.
    val2 : number의 첫번째 데이터 1이 넘어온다.
    idx : reduce() 함수의 두번째 파라미터인 val를 사용했는지 안했는지에 따라 값이 달라진다.
          val을 사용했다면 0부터, 사용하지 않았다면 1부터 시작한다.
    arr : reduce() 함수가 호출된 배열, number가 리턴
*/