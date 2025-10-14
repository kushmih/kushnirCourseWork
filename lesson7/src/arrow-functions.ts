const arrowSumArray = (arr: (number | string)[]) => {
    if (typeof arr[0] === 'string') {
        let sum = '';
        arr.forEach(element => sum += String(element));
        return sum;
    } else {
        let sum = 0;        
        arr.forEach(element => sum += Number(element));
        return sum;
    }
};

const arrowFunctionNumbers = [10, 20, 30, 40, 50];
const arrowFunctionStrings = ['A', 'B', 'C', 'D'];

console.log('Сума чисел:', arrowSumArray(numbers));
console.log('Сума рядків:', arrowSumArray(strings));
