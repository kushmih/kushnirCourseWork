// Та сама логіка, але через стрілкову функцію
const sumArray = (arr) => {
    let sum = typeof arr[0] === 'string' ? '' : 0;
    arr.forEach(element => sum += element);
    return sum;
};

const numbers = [10, 20, 30, 40, 50];
const strings = ['A', 'B', 'C', 'D'];

console.log('Сума чисел:', sumArray(numbers));
console.log('Сума рядків:', sumArray(strings));
