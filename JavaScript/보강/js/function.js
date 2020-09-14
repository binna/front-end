// 매개변수가 있는 함수
function func2(x) {
    for(let i=1; i<=x; i++){
        console.log('func2() 함수 호출!');
    }
}
// 디폴트 매개변수
const cal = function(num1=1, num2=1) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
}
// 나머지 매개변수
function func3(x1, x2, ...x3) {
    console.log(`x1의 값 : ${x1}`);
    console.log(`x2의 값 : ${x2}`);
    console.log(`x3의 값 : ${x3}`);
}
const Jumsu = function(...jum) {
    for(let i of jum){
        console.log(i);
    }
    console.log(`jum의 값 : ${jum}`);
}
// 리턴값이 있는 함수
function func4(start, end) {
    let sum = 0;
    for(let i=start; i<=end; i++){
        sum += i;
    }
    return sum;
}
// 화살표 함수
const Hello2 = () => console.log('안녕하세요. JavaScript');
const Hello3 = (x, y) => x + y;
const Hello4 = (x, y) => {
	let sum = 0;
	for(let i=x; i<=y; i++){
		sum += i;
	}
	return sum;
}
const Hello5 = (x, y) => {x + y;}   // {}를 사용하는 순간 return 키워드를 무조건 작성해야 한다.