import { User } from './models/index';

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data: User[] = await response.json();
    return data;
}
