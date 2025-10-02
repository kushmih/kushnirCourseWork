const temperature = 12;
const isRaining = true;

if (temperature > 25) {
    console.log('Сьогодні жарко');
}

if (temperature < 0) {
    console.log('Winter is coming');
} else if (temperature < 10) {
    console.log('Дубак');
} else if (temperature < 20 && isRaining) {
    console.log('Ви у Львові');
} else if (temperature < 20) {
    console.log('Якшо ви у Львові - скоро піде дощ');
} else {
    console.log('Ви не у Львові');
}
