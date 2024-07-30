/// <reference types="../@types/jquery"/>

import { SideBar } from "./sidebar.js";
import { Display } from "./display.js";
let display = new Display()

export class Ingredient{
    constructor(){
        new SideBar()
        this.getIngredients()
    }

    async getIngredients(){
        console.log("heeeere");
        try{

            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            let data = await response.json()

            await display.ingredient(data.meals.slice(0,20))

            $('.ingredient').on('click',function(){
                window.location.href = `meals.html?from=ingredients&id=${this.id}`
            })

            $('.loading-screen').fadeToggle(1000)

        }catch(err){
            console.log(err)
        }
    }
}
new Ingredient();