/// <reference types="../@types/jquery"/>
import { SideBar } from "./sidebar.js";

export class Contact {
    constructor() {
        new SideBar()
        this.validateInput()
    }

    validateInput() {
        let reg = {
            name: /^[a-zA-Z]+$/,
            email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
            password: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
        }

        let flagName, flagEmail, flagPhone, flagAge, flagPassword, flagRepassword = false;
        $('input').on('input', function (params) {

            if ($(this).attr('id') === 'name') {
                if (!(reg[$(this).attr('id')].test($(this).val()))) {
                    $(this).next().removeClass('hidden')
                } else {
                    $(this).next().toggleClass('hidden', true)
                    flagName = true
                }
            }

            if ($(this).attr('id') === 'email') {
                if (!(reg[$(this).attr('id')].test($(this).val()))) {
                    $(this).next().removeClass('hidden')
                } else {
                    $(this).next().toggleClass('hidden', true)
                }
                flagEmail = true
            }

            if ($(this).attr('id') === 'phone') {
                if (!(reg[$(this).attr('id')].test($(this).val()))) {
                    $(this).next().removeClass('hidden')
                } else {
                    $(this).next().toggleClass('hidden', true)
                }
                flagPhone = true 
            }

            if ($(this).attr('id') === 'age') {
                if (!(reg[$(this).attr('id')].test($(this).val()))) {
                    $(this).next().removeClass('hidden')
                } else {
                    $(this).next().toggleClass('hidden', true)
                    flagAge = true
                }
            }

            if ($(this).attr('id') === 'password') {
                if (!(reg[$(this).attr('id')].test($(this).val()))) {
                    $(this).next().removeClass('hidden')
                } else {
                    $(this).next().toggleClass('hidden', true)
                    flagPassword = true
                }
            }

            if ($(this).attr('id') === 'repassword') {
                if (!($('#password').val() === $(this).val())) {
                    $(this).next().removeClass('hidden')
                } else {
                    $(this).next().toggleClass('hidden', true)
                    flagRepassword = true
                }
            }

            if(flagName&flagEmail&flagPhone&flagAge&flagPassword,flagRepassword){
                $('button').removeAttr('disabled').addClass('hover:bg-[rgb(220,53,69)] hover:text-white focus:outline-none focus:shadow-[0_0_0_4px_rgba(220,53,69,0.5)]')
            }else{
                $('button').attr('disabled')
            }

        })
    }
}

new Contact()