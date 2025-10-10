const fruits = ['яблуко', 'банан', 'вишня', 'груша'];
const numbers = [5, 2, 4, 3, 1];
const flags = [true, false];
const mixed = [1, 'Абабагаламага', true, { someKey: 'someValue' }];

console.log('Довжина масиву fruits:', fruits.length);
console.log('Перший елемент numbers:', numbers[0]);
console.log('Останній елемент mixed:', mixed[fruits.length - 1]);

console.log(fruits);
fruits[1] = 'апельсин';
console.log(fruits);

fruits.push('ананас');
console.log(fruits);

flags.pop();
console.log(flags);

fruits.shift();
console.log(fruits);

fruits.unshift('полуниця');
console.log(fruits);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Парні числа:', evenNumbers);

const found = numbers.find(num => num < 3);
console.log('Перше число менше за 3:', found);

numbers.sort((a, b) => a - b);
console.log('Після сортування зростанням:', numbers);

const fruitsAndNumbers = numbers.concat(fruits);
console.log(fruitsAndNumbers);

console.log('fruits містить "вишня"?', fruits.includes('вишня'));

fruits.forEach((fruit, i) => console.log(`Фрукт №${i + 1}: ${fruit}`));

const squared = numbers.map(num => num * num);
console.log('Квадрати чисел:', squared);
