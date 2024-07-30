/// <reference types="../@types/jquery"/>

import { SideBar } from "./sidebar.js";
import { Display } from "./display.js";
let display = new Display()

export class Areas {
    constructor() {
        new SideBar()
        this.getAreas()
    }
    async getAreas() {
        try {

            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            let data = await response.json()

            console.log("heere");
            console.log(data.meals);

            await display.areas(data.meals.slice(0, 20))

            $('.area').on('click', async function (params) {
                window.location.href = `meals.html?from=areas&id=${this.id}`;
            })

            $('.loading-screen').fadeToggle(1000)


        } catch (err) {
            console.log(err);
        }
    }

}
new Areas()