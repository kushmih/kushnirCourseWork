async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Отримані дані:', data);
    const summary = processData(data);
    console.log('Результат обробки:', summary);
}

function processData(data) {
    return `Кількість елементів: ${data.length}`;
}

(async () => {
    await getData('https://jsonplaceholder.typicode.com/posts');
})();
