function sumArray(arr: (number | string)[]): number | string {
    if (typeof arr[0] === 'string') {
        let sum = '';
        arr.forEach(element => sum += String(element));
        return sum;
    } else {
        let sum = 0;
        arr.forEach(element => sum += Number(element));
        return sum;
    }
}

const numbers = [10, 20, 30, 40, 50];
const strings = ['A', 'B', 'C', 'D'];

console.log('Сума чисел:', sumArray(numbers));
console.log('Сума рядків:', sumArray(strings));
