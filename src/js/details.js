/// <reference types="../@types/jquery"/>

import { SideBar } from "./sidebar.js";
import { Display } from "./display.js";
let display = new Display()

export class Details {

    constructor() {
        new SideBar()
        this.getDetails()
    }

    async getDetails() {
        
        try {

            const urlParams = new URLSearchParams(window.location.search);
            const idMeal = urlParams.get('id');

            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            let data = await response.json()

            console.log(data.meals);

            display.detailsMeals(data.meals)

            $('.loading-screen').fadeToggle(1000)

        } catch (err) {
            console.log(err);
        }
    }
}
new Details();
