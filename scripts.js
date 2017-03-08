var dogFoodContainer = document.getElementById("dog-food-container");

function makeDom(xhrData) { //comes from makeDom(data) in the executeThisCodeAfterFileLoaded function
    var dogFoodString = "";
    var currentDogFood;
    var currentType;
    for (var i = 0; i < xhrData.dog_brands.length; i++) {
        currentDogFood = xhrData.dog_brands[i];
        dogFoodString += `<div>${currentDogFood.name}</div>`
        for (var j = 0; j < xhrData.dog_brands[i].types.length; j++) {
        	dogFoodString += `<li>${xhrData.dog_brands[i].types[j].type}<li>`
	        for (var k = 0; k < xhrData.dog_brands[i].types[j].type.length; k++) {
	        	console.log("third for loop: ", xhrData.dog_brands[i].types[j].volumes[k].name);
	        	// add .name
	        }
        }
        dogFoodString += ``
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