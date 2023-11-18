import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener("click", (clickEvent) => {
    const getClickEvent = clickEvent.target
    if (getClickEvent.dataset.type === "walker") {
        const getCityId = parseInt(getClickEvent.dataset.cityid)
        for (const city of cities) {
            if (city.id === getCityId) {
                window.alert(`This walker works in ${city.name}.`)
            }
        }
    }
})

export const Walkers = () => {
    let walkerHTML = "<ul>"
    for (const walker of walkers) {
        walkerHTML += `
        <li data-type="walker" data-id="${walker.id}" data-cityid="${walker.cityId}">
            ${walker.name}
        </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}