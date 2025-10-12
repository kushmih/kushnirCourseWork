async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Отримані дані:', data);
        const summary = processData(data);
        console.log('Результат обробки:', summary);
    } catch (error) {
        console.error('Помилка:', error);
    }
}

function processData(data) {
    return `Кількість елементів: ${data.length}`;
}

getData('https://jsonplaceholder.typicode.com/posts');
