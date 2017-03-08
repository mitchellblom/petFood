var dogFoodContainer = document.getElementById("dog-food-container");

function makeDom(xhrData) { //comes from makeDom(data) in the executeThisCodeAfterFileLoaded function
    var dogFoodString = "";
    var currentDogFood;
    var currentOz;

    for (var i = 0; i < xhrData.dog_brands.length; i++) {
        currentDogFood = xhrData.dog_brands[i];
        dogFoodString += `<div>${currentDogFood.name}</div>`;
        for (var j = 0; j < xhrData.dog_brands[i].types.length; j++) {
            dogFoodString += `<li>${xhrData.dog_brands[i].types[j].type}<li>`;
            for (var k = 0; k < xhrData.dog_brands[i].types[j].type.length; k++) {
                currentOz = xhrData.dog_brands[i].types[j].volumes[k];
                console.log("currentOz", currentOz); // adding .name to currentOz results in "cannot read property of undefined"
                // for (var l = 0; l < xhrData.dog_brands[i].types[j].type[k].length; l++) {
                //     console.log("currentOz", currentOz);	
                //     // console.log("third for loop: ", currentOz.name);			
                //     // dogFoodString += `<li>${currentOz.name}</li>`;
                // }
            }
        }
        dogFoodString += ``
        dogFoodString += ``
        dogFoodString += ``
        dogFoodString += ``
    }

    dogFoodContainer.innerHTML = dogFoodString;
}

function executeThisCodeAfterFileLoaded() {
    // console.log("Data returned: ", Date.now());
    var data = JSON.parse(this.responseText); //there's also a .stringify
    makeDom(data);
}

function executeThisCodeAfterFileFails() {
    // console.log("not working")
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dog.json");
myRequest.send();