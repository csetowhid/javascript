const bol = true;
const str = String(bol);
console.log(typeof str);

const str3 = 'We have string';
console.log(str3.includes('We'));
console.log(str3.startsWith('are'));
console.log(str3.endsWith('string'));

const str4 = str3.slice(1)
console.log(str4)


const pad = 'String';
const str5 = pad.padStart(10,'0');
console.log(str5.length);
console.log(str5);
const str6 = pad.padEnd(20,'0');
console.log(str6);


//reverse

let rev = 'String and number';
// console.log(rev.split('and'));
rev = rev.split('');
rev = rev.reverse();
rev = rev.join('');
console.log(rev);

const person = {
    firstName: 'Towhid',
    lastName: 'Hasan',
    age: '20'
};

console.log(person.firstName + ' ' + person.lastName + ' is ' + person.age + ' Years Old');

//Template String

console.log(`${person.firstName} ${person.lastName} is ${person.age} Years Old`);

console.log(`First Line
Second Line
Third Line`);