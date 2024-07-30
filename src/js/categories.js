/// <reference types="../@types/jquery"/>

import { SideBar } from "./sidebar.js";
import { Display } from "./display.js";
let display = new Display()

export class Categories {
    constructor() {

        new SideBar()
        this.getCategorioes()

    }

    async getCategorioes() {
        
        try {

            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            let data = await response.json()

            await display.categories(data.categories)
            
            $('.category').on('click', async function (params) {
                window.location.href = `meals.html?from=categories&id=${this.id}`;
            })

            $('.loading-screen').fadeToggle(1000)


        } catch (err) {
            console.log(err);
        }
    }
}
new Categories();