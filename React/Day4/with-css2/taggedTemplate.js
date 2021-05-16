const name = '김사과';
const message1 = `안녕, ${name}`;

console.log(message1);


// Template Literal을 사용할 때, ${} 안에 객체를 넣는다면?
const obj = {num:1};
const message2 = `${obj}`

console.log(message2);


// Template Literal을 사용할 때, ${} 안에 함수를 넣는다면?
const fn = () => true
const message3 = `${fn}`

console.log(message3);


const red = '빨간색';
const blue = '파란색';

function favoriteColors(texts, ...values) {
    // console.log(texts);
    // console.log(values);
    return texts.reduce((result, text, i) => `${result}${text}${values[i] ? `<b>${values[i]}</b>` : ''}`, '');
}

console.log(favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.` );