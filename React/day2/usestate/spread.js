const dog = {
    name: '루시'
};

// const cuteDog = {
//     name: '루시',
//     attribute: 'cute'
// };

// const whiteCuteDog = {
//     name: '루시',
//     attribute: 'cute',
//     color: 'white'
// }

// console.log(dog);
// console.log(cuteDog);
// console.log(whiteCuteDog);


// 기존 객체를 사용하면서 수정하지 않은 상태로 새로운 객체를 만들어내는 방법
const cuteDog = {
    ...dog,
    attribute: 'cute'
};

const whiteCuteDog = {
    ...cuteDog,
    color:'white'
};

console.log(dog);
console.log(cuteDog);
console.log(whiteCuteDog);