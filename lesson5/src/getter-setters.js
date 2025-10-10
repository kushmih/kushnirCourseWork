const witcher = {
    _firstName: 'Geralt',
    _lastName: 'of Rivia',
    _goldBalance: 0,
    _activeContracts: {
        Striga: { reward: 100, status: 'active' },
        Kikimora: { reward: 80, status: 'active' },
        Leshen: { reward: 200, status: 'active' }
    },
    currentLocation: {
        region: 'Kaedwen',
        city: 'Kaer Morhen'
    },

    get goldBalance() {
        return this._goldBalance;
    },

    set goldBalance(value) {
        this._goldBalance += value;
    },

    get activeContracts() {
        return this._activeContracts;
    },

    witcherSummary() {
        return `${this._firstName} ${this._lastName} знаходиться в ${this.currentLocation.city}, ${this.currentLocation.region}. Поточний баланс золота: ${this.goldBalance}. Активні контракти: ${Object.keys(this._activeContracts).join(', ')}.`;
    },

    closeContract(contract) {
        this.goldBalance = this._activeContracts[contract].reward;
        delete this._activeContracts[contract];
    },

    contractSummary() {
        let sum = 0;
        for (const key in this._activeContracts) {
            sum += this._activeContracts[key].reward;
        }
        return sum;
    }
};

console.log(witcher.witcherSummary());

witcher.closeContract('Striga');
console.log('Баланс золота після закриття контракту зі Стригою:', witcher.goldBalance);
console.log('Контракти після закриття контракту зі Стригою:', witcher.activeContracts);
console.log('Сумарна винагорода за активні контракти:', witcher.contractSummary());
