import { AppState } from "../AppState.js";
import { House } from "../models/House.js";



export class HouseController {
  constructor() {
    console.log('hello!')
    this.drawHouses()
  }



  drawHouses() {
    console.log('✏️🚙🚙');
    const housesListingsElm = document.getElementById('house-listings');
    housesListingsElm.innerHTML = '';
    AppState.houses.forEach(house => housesListingsElm.innerHTML += house.houseCard);
  }

}