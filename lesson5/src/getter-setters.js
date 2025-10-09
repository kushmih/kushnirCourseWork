const person = {
    firstName: 'Іван',
    lastName: 'Петренко',
    address: {
        city: 'Львів',
        street: 'Зелена',
        number: 25
    },

    // Гетер для повного імені
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Сетер для оновлення імені
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1] || '';
    },

    // Метод, що виводить коротку інформацію
    getSummary() {
        return `👤 ${this.fullName}, проживає у місті ${this.address.city} на вулиці ${this.address.street}, ${this.address.number}.`;
    }
};

// Використання гетерів і сетерів
console.log(person.getSummary());
person.fullName = 'Олена Шевченко';
console.log('Оновлене імʼя:', person.fullName);
console.log(person.getSummary());
