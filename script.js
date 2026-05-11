console.log("Script started");

let feedButton = document.getElementById("feed-btn");
let hungerDisplay = document.getElementById("hunger-level");
let petDisplay = document.getElementById("pet");

let currentHunger = 50;

function feedPet() {
    console.log("clicked");
    currentHunger = currentHunger + 20;
    if (currentHunger > 100) {
        currentHunger = 100;
    }

    hungerDisplay.innerText = currentHunger;

    if (currentHunger >= 80) {
        petDisplay.innerText = "😸";
    }
}
feedButton.addEventListener("click", feedPet);


let sleepButton = document.getElementById("play-btn");
let energyDisplay = document.getElementById("energy-level");

let currentEnergy = 50;

function sleep() {
    console.log("clicked");
    currentEnergy = currentEnergy + 20;
    if (currentEnergy > 100) {
        currentEnergy = 100;
    }

    energyDisplay.innerText = currentEnergy;

    if (currentEnergy >= 80) {
        petDisplay.innerText = "";
    }

}
sleepButton.addEventListener("click", sleep);

let playButton = document.getElementById("play-btn");
let happinessDisplay = document.getElementById("happiness-level");

let currentHappiness = 50;


function play() {
    console.log("clicked");
    currentHappiness = currentHappiness + 20;
    if (currentHappiness > 100) {
        currentHappiness = 100;
    }

    happinessDisplay.innerText = currentHappiness;

    if (currentHappiness >= 80) {
        petDisplay.innerText = "";
    }
}

