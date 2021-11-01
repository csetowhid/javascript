// const num = Number(prompt('Insert A Number'));

//     // if(num % 2 == 0){
//     //     alert('Even');
//     // }else{
//     //     alert('Odd');
//     // }


// const result = num % 2 == 0 ? 'Even' : 'Odd';
// console.log(result);


const bill = Number(prompt('Total Bill'));

const discount = bill >= 300 ? '30%' : bill >= 200 ? '20%' : bill >= 100 ? '10%' : 'No Discount';

console.log(discount);