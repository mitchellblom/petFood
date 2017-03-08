var dogFoodContainer = document.getElementById("dog-food-container");

function makeDom(xhrData) { //comes from makeDom(data) in the executeThisCodeAfterFileLoaded function
    var dogFoodString = "";
    var currentDogFood;
    var currentType;
    for (var i = 0; i < xhrData.dog_brands.length; i++) {
        currentDogFood = xhrData.dog_brands[i];

      	// console.log(xhrData.dog_brands[i].type.length);

        dogFoodString += ``
        dogFoodString += ``
        dogFoodString += `<div> ${currentDogFood.name} </div>`
        for (var j = 0; j < xhrData.dog_brands[i].types.length; j++) {
        	console.log("second for loop works", xhrData.dog_brands[i].types[j].type)
        	// currentType = xhrData.dog_brands.types[j];
        	// dogFoodString += `<div> ${currentType.type} </div>`
        }
        dogFoodString += ``
        dogFoodString += ``
        dogFoodString += ``
        console.log("first for loop works", [i])
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