for (let i = 0; i <= 9; i++) {
    console.log('Ітератор від 0 до 9:', i);
}

console.log(' --- ');

for (let j = 100; j >= 0; j -= 10) {
    console.log('Ітератор від 100 до 0:', j);
}

console.log(' --- ');

let m = 0;
while (m <= 9) {
    console.log("while — ітерація:", m);
    m++;
}

let n = 100;
while (n >= 0) {
    console.log("while — ітерація:", n);
    n -= 10;
}

console.log(' --- ');

const numbers = [];
for (let i = 0; i <= 9; i++) {
    numbers.push(i);
}
numbers.forEach((num, index) => {
    console.log(`forEach — елемент №${index}:`, num);
});

const moreNumbers = [];
for (let j = 100; j >= 0; j -= 10) {
    moreNumbers.push(j);
}
moreNumbers.forEach((num, index) => {
    console.log(`forEach — елемент №${index}:`, num);
});
