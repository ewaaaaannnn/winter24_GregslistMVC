import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cars = [
    new Car({
      make: 'Jaguar',
      model: 'XE',
      year: 2017,
      color: 'silver',
      imgUrl: 'https://images.unsplash.com/photo-1630045698264-a0e3396c2cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphZ3VhciUyMHhlfGVufDB8fDB8fHww'
    }),
    new Car({
      make: 'Honda',
      model: 'Civic',
      year: 2020,
      color: 'red',
      imgUrl: 'https://images.unsplash.com/photo-1636915873177-a0c1a48d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbmRhJTIwY2l2aWN8ZW58MHx8MHx8fDA%3D',
      mileage: 500
    }),
    new Car({
      make: 'Tonka',
      model: 'Truck',
      year: 1993,
      color: 'yellow',
      imgUrl: 'https://images.unsplash.com/photo-1677372191857-f596af525205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9ua2ElMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D'
    }),
  ]


  houses = [
    new House({
      year: '1974', bedrooms: 3, bathrooms: 2.5, sqft: 1400, price: 375000, description: 'Newly renovated mid-century modern home', imgUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new House({ year: '1972', bedrooms: 5, bathrooms: 2.5, sqft: 1400, price: 575000, description: 'Newly renovated mid-century modern home', imgUrl: 'https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }),

  ]

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())