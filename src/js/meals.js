/// <reference types="../@types/jquery"/>

import { SideBar } from "./sidebar.js";
import { Display } from "./display.js";
let display = new Display()

export class Meals {

    constructor() {

        new SideBar()

        const urlParams = new URLSearchParams(window.location.search);
        const from = urlParams.get('from');
        if (from === 'categories') {
            console.log("true");
            this.getMealsCategory()
        } else if (from === 'areas') {
            this.getMealsArea()
        } else if (from === 'ingredients') {
           this.getMealsIngredient()
        }else{
            console.log('no match');
        }
    }

    async getMealsCategory() {

        try {

            const urlParams = new URLSearchParams(window.location.search);
            const category = urlParams.get('id');

            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            let data = await response.json()

            console.log(data);

            await display.meals(data.meals.slice(0, 20));

            $('.meal').on('click', async function (params) {
                window.location.href = `detailsMeal.html?id=${this.id}`
            })

            $('.loading-screen').fadeToggle(1000)


        } catch (err) {
            console.log(err);
        }
    }

    async getMealsArea() {

        try {

            const urlParams = new URLSearchParams(window.location.search);
            const area = urlParams.get('id');

            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            let data = await response.json()

            await display.meals(data.meals.slice(0, 20));

            $('.meal').on('click', async function (params) {
                window.location.href = `detailsMeal.html?id=${this.id}`
            })

            $('.loading-screen').fadeToggle(1000)


        } catch (err) {
            console.log(err);
        }
    }

    async getMealsIngredient() {
        try {

            const URLParams = new URLSearchParams(window.location.search)
            const ingredient = URLParams.get('id');

            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            let data = await response.json()

            console.log(data);

            await display.meals(data.meals.slice(0, 20));

            $('.meal').on('click', async function (params) {
                window.location.href = `detailsMeal.html?id=${this.id}`
            })

            $('.loading-screen').fadeToggle(1000)


        } catch (err) {
            console.log(err);
        }


    }
}
new Meals()