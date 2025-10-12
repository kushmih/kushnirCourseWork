async function fetchData() {
    const mainUrl = 'https://nonexistent-api.example.com/data';
    const backupUrl = 'https://jsonplaceholder.typicode.com/posts';

    try {
        console.log('Пробуємо основний ресурс...');
        const response = await fetch(mainUrl);
        const data = await response.json();
        console.log('Отримані дані з основного ресурсу:', data);
    } catch (error) {
        console.warn('Помилка основного запиту:', error.message);
        console.log('Пробуємо запасний ресурс...');
        try {
            const backupResponse = await fetch(backupUrl);
            const backupData = await backupResponse.json();
            console.log('Отримані дані із запасного ресурсу:', backupData);
        } catch (secondError) {
            throw new Error(`Помилка і на запасному ресурсі: ${secondError.message}`);
        }
    }
}

fetchData().catch(err => console.error('Фінальна помилка:', err.message));
