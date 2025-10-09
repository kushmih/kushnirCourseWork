const witcher = {
    firstName: 'Geralt',
    lastName: 'of Rivia',
    goldBalance: 0,
    activeContracts: {
        Striga: { reward: 100, status: 'active' },
        Kikimora: { reward: 80, status: 'active' },
        Leshen: { reward: 200, status: 'active' }
    },
    currentLocation: {
        region: 'Kaedwen',
        city: 'Kaer Morhen'
    },

    get getGoldBalance() {
        return this.goldBalance;
    },

    set changeGoldBalance(value) {
        this.goldBalance += value;
    },

    get getActiveContracts() {
        return this.activeContracts;
    },

    witcherSummary() {
        return `${this.firstName} ${this.lastName} знаходиться в ${this.currentLocation.city}, ${this.currentLocation.region}. Поточний баланс золота: ${this.goldBalance}. Активні контракти: ${Object.keys(this.activeContracts).join(', ')}.`;
    },

    closeContract(contract) {
        this.changeGoldBalance = this.activeContracts[contract].reward;
        delete this.activeContracts[contract];
    },

    contractSummary() {
        let sum = 0;
        for (const key in this.activeContracts) {
            sum += this.activeContracts[key].reward;
        }
        return sum;
    }
};

console.log(witcher.witcherSummary());

witcher.closeContract('Striga');
console.log('Баланс золота після закриття контракту зі Стригою:', witcher.getGoldBalance);
console.log('Контракти після закриття контракту зі Стригою:', witcher.getActiveContracts);
console.log('Сумарна винагорода за активні контракти:', witcher.contractSummary());
