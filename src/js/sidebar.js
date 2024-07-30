/// <reference types="../@types/jquery"/>

import { Display } from "./display.js";
let display = new Display()

export class SideBar {

    constructor() {
        display.sideBar()
        this.setActionsBar()
    }

    setActionsBar() {

        $('.i-close').on('click', function (params) {

            $('.content').animate({'width':'0', 'padding':'0'},500)
            $('.content footer').animate({'left':'-288px'},500)
            $('.links').children().animate({
                'top': '240px',
            },500)

            $('.i-close').addClass('hidden')
            $('.i-menu').removeClass('hidden')
        })

        $('.i-menu').on('click', function (params) {
        
            $('.content').animate({'width':'250px','padding':'24px'},1000)

            $('.content footer').animate({'left':'24px'},1000)

            for (let i = 0; i < 5; i++) {
                $('.links').children().eq(i).animate({
                    'top': '0px'
                },(i + 5) * 100)
            }
            
            $('.links').children().animate({
                'top': '0px'
            }, 500)

            $('.i-menu').addClass('hidden')
            $('.i-close').removeClass('hidden')

        })

        $('.logo').on('click',function () {
            window.location.href = `index.html`
        })

        $('.search-link').on('click', function (params) {
            window.location.href = `search.html`
        })

        $('.categories-link').on('click', function (params) {
            window.location.href = `categories.html`
        })
        $('.areas-link').on('click', function (params) {
            window.location.href = `areas.html`
        })
        $('.ingredients-link').on('click', function (params) {
            window.location.href = `ingredients.html`
        })
        $('.contact-link').on('click', function (params) {
            window.location.href = `contact.html`
        })
    }
}