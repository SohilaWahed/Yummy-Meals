/// <reference types="../@types/jquery"/>

import { SideBar } from "./sidebar.js";
import { Display } from "./display.js";
let display = new Display()

export class Search {

    constructor() {
        new SideBar()
        this.getMealsByName()
        this.getMealsByLetter()
    }

    getMealsByName(){
        $('#name').on('input',async function (params) {
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${$('#name').val()}`)
            let data = await response.json()
            console.log(data);
            await display.meals(data.meals)
            $('.meal').on('click', async function (params) {
                window.location.href = `detailsMeal.html?id=${this.id}`
            })
        })
    }
    getMealsByLetter(){
        $('#letter').on('input',async function (params) {
            $('#letter').val($('#letter').val().substring(0,1))
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${$('#letter').val()}`)
            let data = await response.json()
            await display.meals(data.meals)
            $('.meal').on('click', async function (params) {
                window.location.href = `detailsMeal.html?id=${this.id}`
            })
        })
    }
}

new Search()