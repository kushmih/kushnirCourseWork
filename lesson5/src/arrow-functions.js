// Та сама логіка, але через стрілкову функцію
const sumArray = (arr) => {
    return arr.reduce((acc, value) => {
        if (typeof value === 'number') {
            return acc + value;
        } else {
            console.log(`Пропускаю нечислове значення: ${value}`);
            return acc;
        }
    }, 0);
};

const nums = [5, 15, 25, 35];
const words = ['JS', ' ', 'rules', '!'];

console.log('Сума чисел (arrow):', sumArray(nums));
console.log('Робота з рядками (arrow):', sumArray(words));
