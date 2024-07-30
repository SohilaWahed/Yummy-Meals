/// <reference types="../@types/jquery"/>

export class Display {

    sideBar() {

        $('.side-bar').html(`<aside class=" overflow-hidden h-screen fixed inset-y-0 flex z-10">
            <header class="bg-white text-black t h-full p-2.5 flex flex-col justify-between items-center order-last" style="width:56px">
                <div class="logo">
                    <img src="./images/logo.png" alt="logo" class="w-10">
                </div>
                <div class="menu cursor-pointer">
                    <svg class="w-12 h-10 i-menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    <svg class="size-12 hidden i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="way-contact">
                    <svg class="size-6 pb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                    </svg>
                    <svg class="size-6 ps-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </header>
            <div class="content bg-black" style="width:0px; padding:0px">
                <ul class="links text-white hover:cursor-pointer overflow-hidden">
                    <li class="pb-3 top-60 search-link relative">Search</li>
                    <li class="pb-3 top-60 categories-link relative">Categories</li>
                    <li class="pb-3 top-60 areas-link relative">Area</li>
                    <li class="pb-3 top-60 ingredients-link relative">Ingredients</li>
                    <li class="pb-3 top-60 contact-link relative">Contact Us</li>
                </ul>
                <footer class="absolute -left-72 bottom-[10%]">
                    <div class="social">
                        <a href=""><i class="fa-brands fa-facebook text-white w-5 pe-1"></i></a>
                        <a href=""><i class="fa-brands fa-twitter  text-white w-5 pe-1"></i></a>
                        <a href=""><i class="fa-solid fa-globe  text-white w-5"></i></a>
                    </div>
                    <p class="text-white">Copyright Â© 2019 All Rights <br> Reserved.</p>
                </footer>
            </div>
        </aside>`)

    }

    async meals(list) {
        let cartona = ``
        for (let i = 0; i < list.length; i++) {
            cartona += `<div id="${list[i].idMeal}" class="meal cursor-pointer rounded-md mb-6 md:mb-0 relative overflow-hidden group">
                                <img class="rounded-md" src="${list[i].strMealThumb}" alt="meal-img">
                                <div class="layer rounded-md ps-2 bg-white bg-opacity-90
                                absolute inset-y-0 inset-x-0 flex justify-start items-center
                                translate-y-full group-hover:translate-y-0 transition duration-700 ease-in-out">
                                    <span class="font-medium text-lg">${list[i].strMeal}</span>
                                </div>
                        </div>`
        }
        $('.meals').html(cartona)
    }

    detailsMeals(meal) {
        console.log(meal);

        let recipses = ``
        for (let i = 1; i <= 20; i++) {
            if (meal[0][`strIngredient${i}`] === "") {
                break;
            }
            recipses += `<div class="inline text-base font-normal rounded-md p-2 m-2 bg-sky-200 text-sky-700">
                               ${meal[0][`strMeasure${i}`]} ${meal[0][`strIngredient${i}`]}</div>`
        }

        let tagsList = meal[0].strTags?.split(",");
        let tags = ``;
        if (tagsList) {
            for (let i = 0; i < tagsList.length; i++) {
                tags += `<div class="inline text-base font-normal rounded-md p-2 bg-red-200 text-red-700">
                                    ${tagsList[i]}</div>`
            }
        }

        let cartona = ` <div class="image w-1/3">
                <img class="rounded-md" src="${meal[0].strMealThumb}" alt="mael-img">
                <p class="pt-2 text-3xl font-medium">${meal[0].strMeal}</p>
            </div>
            <div class="detials w-2/3 pt-4 md:pt-0 md:ps-4">
                <h1 class="text-3xl font-medium">Instructions</h1>
                <p class="pt-2 text-base">${meal[0].strInstructions}</p>
                <div class="details text-2xl font-medium">
                    <div class="font-bold">Area : <span class="area font-medium">${meal[0].strArea}</span></div>
                    <div class="font-bold">Category : <span class="category font-medium">${meal[0].strCategory}</span></div>
                    <div>
                        <span class="font-medium">Recipes :</span>
                        <div class="recipe py-3 flex flex-wrap gap-3">${recipses}</div>
                    </div>
                    <div>
                        <span class="font-medium">Tags :</span>
                        <div class="tags pt-3">${tags}</div>
                    </div>
                    <div class="resourse py-4">
                        <span class="source inline text-base font-normal rounded-md p-2 me-1 bg-green-800">Source</span>
                        <span class="source inline text-base font-normal rounded-md p-2  bg-red-600">Youtube</span>
                    </div>
                </div>
            </div>`;

        $('.details-meal').html(cartona)
    }

    async categories(list) {

        let cartona = ``
        for (let i = 0; i < list.length; i++) {
            cartona += `<div id="${list[i].strCategory}" class="category cursor-pointer rounded-md mb-6 md:mb-0 relative overflow-hidden group">
                                <img class="rounded-md" src="${list[i].strCategoryThumb}" alt="meal-img">
                                <div class="layer overflow-hidden rounded-md ps-2 bg-white bg-opacity-90
                                absolute inset-y-0 inset-x-0 flex flex-col justify-start items-center
                                translate-y-[105%] group-hover:translate-y-0 transition duration-700 ease-in-out">
                                    <span class="font-medium text-lg">${list[i].strCategory}</span>
                                    <p class="p-1 text-center text-ellipsis overflow-hidden">${list[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                                </div>
                        </div>`
        }
        $('.categories').html(cartona)
    }

    async areas(list) {
        let cartona = ``
        for (let i = 0; i < list.length; i++) {
            cartona+=`<div id=${list[i].strArea} class="area rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop text-6xl font-black"></i>
                        <h3 class="text-2xl font-medium">${list[i].strArea}</h3>
                </div>`
        }
        $('.areas').html(cartona)
     }

    async ingredient(list) { 
        let cartona = ``
        for (let i = 0; i < list.length; i++) {
            cartona+=`<div id=${list[i].strIngredient} class="ingredient rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite  text-6xl font-black"></i>
                        <h3 class="text-2xl font-medium">${list[i].strIngredient}</h3>
                        <p>${list[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>`
        }
        $('.areas').html(cartona)
    }
}