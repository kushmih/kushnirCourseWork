function getData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Отримані дані:', data);
            return processData(data);
        })
        .then(summary => console.log('Результат обробки:', summary))
        .catch(error => console.error('Помилка:', error));
}

function processData(data) {
    return `Усього записів: ${data.length}`;
}

getData('https://jsonplaceholder.typicode.com/posts');
