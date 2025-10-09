const dog = {
    name: 'Хантер',
    age: 10,
    breed: 'Джек Рассел тер\'єр',
    owner: {
        name: 'Михайло',
        age: 35
    },
    hobbies: ['сваритись на інших собак', 'нищити іграшки', 'гавкати на людей за дверима'],
    bark: 'Гав-гав'
};

console.log(dog.bark, ' - каже пес');
console.log('Хобі дурнуватого пса:', dog.hobbies);
console.log('За все це відповідає', dog.owner.name);

const trainedDog = structuredClone(dog);
trainedDog.hobbies.push('приносити тапки');
trainedDog.hobbies = trainedDog.hobbies.filter(
    hobby => !['сваритись на інших собак', 'гавкати на людей за дверима'].includes(hobby)
);

console.log('Хобі тренованого пса:', trainedDog.hobbies);
trainedDog.sit = function() {
    console.log('Пес сідає за командою!');
};
trainedDog.sit();
