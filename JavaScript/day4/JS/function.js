function func1() {
    console.log('func1 함수가 호출되었습니다.');
}
function func2(x) {
    console.log(`전달된 값 : ${x}`);
}
function func3(x) {
    let sum = 0;
    for(let i = 1; i <= x; i++) {
        sum += i;
    }
    console.log(`1 부터 ${x} 까지의 총 합은 ${sum}입니다.`);
}
function func4(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
    console.log(`${x} - ${y} = ${x - y}`);
    console.log(`${x} * ${y} = ${x * y}`);
    console.log(`${x} / ${y} = ${x / y}`);
}
// 아래의 두개의 방법은 ECMA 6에서 새롭게 추가된 방식
function func5(x=1, y=1) {
    console.log(`${x} + ${y} = ${x + y}`);
    console.log(`${x} - ${y} = ${x - y}`);
    console.log(`${x} * ${y} = ${x * y}`);
    console.log(`${x} / ${y} = ${x / y}`);
}
function func6(x, ...y) {   // 하나의 x값과 나머지 떨거지들
                            // 나머지 떨거지들은 인덱스로 들어간다.
    for(let i = 0; i < y.length; i++) {
        console.log(y[i]);
    }
}