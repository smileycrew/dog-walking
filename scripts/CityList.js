import { getCities, getWalkers } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

export const findMatchingCity = (object, cities) => {
    let currentCity = null
    for (const city of cities) {
        if (city.id === object.cityId) {
            currentCity = city
        }
    }
    return currentCity
}

document.addEventListener("click", (clickEvent) => {
    const getClickElement = clickEvent.target
    if (getClickElement.dataset.type === "city") {
        const cityId = parseInt(getClickElement.dataset.id)
        let message = ""
        for (const walker of walkers) {
            if (walker.cityId === cityId) {
                message += ` ${walker.name}`
            }
        }
        window.alert(`${message} is servicing this city.`)
    }
})

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `
        <li data-type="city" data-id="${city.id}">
            ${city.name}
        </li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}