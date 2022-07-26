const car = {
    _Fuel: 'gasoline',
    _Tires: '19 inch original BMW wheels',
    _Engine: 'inline-6',
    _Transmision: 'automatic',
    get info () {
        if (this._Fuel && this._Tires && this._Engine && this._Transmision){
            return `this beautiful car runs on ${this.Fuel}, its got a nice set of ${this.Tires}, its got a magnificent ${this.Engine} engine, equipped with an ${this.Transmision} transmision `
        }
    },
    set transmision(num) {
        if (typeof num === 'string'){
            this._Transmision = num
        }
    },
    set Tires(aros) {
        if (typeof aros === 'string'){
            this._Tires = aros
        }
    },
    set engine(motor) {
        if (typeof motor === 'string'){
            this._Engine = motor
        }
    },
    set fuel(gas) {
        if (typeof gas === 'string'){
            this._Fuel = gas
        }
    },
    funciones: {
        turnOn() {
            console.log('chichichi BROOOM')
    },
        Beep() {
            console.log('pipipipipiiiiii')
        },
        BurnOut() {
            console.log('uggrrrr')
        }
    }
}

car.fuel = 'race fuel'
car.engine = 'M54B25'
car.Tires = 'rpf1 wheels'
car.transmision = 'manual'

console.log(car)