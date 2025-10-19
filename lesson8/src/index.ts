import { fetchUsers } from './fetch-data';
import { UserSummary } from './transform-data';
import { UserEntity, AddressInfo } from './abstraction';

async function main() : Promise<void> {
    try {
        console.log('Отримуємо користувачів...');
        const users = await fetchUsers();

        console.log('Отримано користувачів:', users.length);

        console.log('\n Короткі описи користувачів:');
        const summaries = users.map(user => new UserSummary(user));
        summaries.forEach(summary => console.log(summary.getSummary()));

        console.log('\n Абстракція та композиція:');
        const address = new AddressInfo('Bandery street 1', 'Lviv');
        const mykhailo = new UserEntity(1, 'Mykhailo Kushnir', 'mykhailo@mail.com', address);
        console.log(mykhailo.describe());
    } catch (error) {
        console.error('Помилка:', error);
    }
}

main();
