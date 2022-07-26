const car = {
    Fuel: 'gasoline',
    Tires: '19 inch original BMW wheels',
    Engine: 'inline-6',
    Transmision: 'automatic',
    get info () {
        if (this.Fuel && this.Tires && this.Engine && this.Transmision){
            return `this beautiful car runs on ${this.Fuel}, its got a nice set of ${this.Tires}, its got a magnificent ${this.Engine} engine, equipped with an ${this.Transmision} transmision `
        }
    },
    set _transmision(num) {
        if (typeof num === 'string'){
            this.Transmision = num
        }
    },
    set _Tires(aros) {
        if (typeof aros === 'string'){
            this.Tires = aros
        }
    },
    set _engine(motor) {
        if (typeof motor === 'string'){
            this.Engine = motor
        }
    },
    set _fuel(gas) {
        if (typeof gas === 'string'){
            this.Fuel = gas
        }
    },
    funciones: {
        prendelo() {
            console.log('chichichi BROOOM')
    },
        pitar() {
            console.log('pipipipipiiiiii')
        },
        Ceritos() {
            console.log('uggrrrr')
        }
    }
}


const car2 =  Object.create(car);
//car2.funciones.Ceritos();

carKeys = Object.keys(car);
//console.log(carKeys);

carEntries = Object.entries(car);
//console.log(carEntries);

newCar = Object.assign({Windows: 'tinted', Sunroof: true, Airconditioning: false}, car);
//console.log(newCar);

const {funciones} = car
//funciones.prendelo()
const {Engine} = car
const {Tires} = car

car._fuel = 'race fuel'
car._engine = 'M54B25'
car._Tires = 'rpf1 wheels'
car._transmision = 'manual'

//console.log(Engine);

console.log(car.info)