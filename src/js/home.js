/// <reference types="../@types/jquery"/>

import { SideBar } from "./sidebar.js";
import { Display } from "./display.js";
let display = new Display()

export class Home {

    constructor() {
        new SideBar()
        this.getRandomMeals()
    }

    async getRandomMeals() {

        try {
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            let data = await response.json()

            await display.meals(data.meals)

            $('.meal').on('click', async function (params) {
                window.location.href = `detailsMeal.html?id=${this.id}`
            })

            $('.loading-screen').fadeToggle(1000)

        } catch (err) {
            console.log(err);
        }
    }

}

new Home()