const person = [
    'Towhid',
    'Khulna',
    'Bangladesh'
]

// console.log(person[0]);
// console.log(typeof person);

const arr = [1,2,3,4,5,6];
arr[0] = 'one';
arr[1] = 'two';
// console.log(arr);


const arr2 = [1,2,3];
arr2.push(4);
// arr2.pop();
arr2.unshift(0);
arr2.shift();
// console.log(arr2);

const arr3 = [1,2,3,4,5];
const arr4 = [6,7,8,9,10];
// const arr5 = arr3.concat(arr4);
const arr5 = arr3.slice(0,3);
const arr6 = arr3.splice(0,3,'one','two','three');
console.log(arr5);
console.log(arr6);
console.log(arr);



const arr7 = [1,2,3,4,5,2];
// console.log(arr7.indexOf(2));
// console.log(arr7.lastIndexOf(2));

const arr8 = [1,2,3,4,5];
console.log(arr8.reverse());

const str = ['one','two','three','four'];
const str2 = [10,30,5,333,80];
str2.sort(function(a,b){
    return b - a;
})
console.log(str2);
