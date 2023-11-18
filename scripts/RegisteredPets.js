import { getPets, getWalkers } from "./database.js"

document.addEventListener("click", (clickEvent) => {
    const whatWasClickedOn = clickEvent.target
    const walkerId = whatWasClickedOn.dataset.walkerforeignkey
    const walkers = getWalkers()
    const getPetName = whatWasClickedOn.innerHTML
    for (const walker of walkers) {
        if (walker.id == walkerId) {
            window.alert(`${getPetName} is being walked by ${walker.name}.`)
        }
    }
})

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-walkerForeignKey="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

