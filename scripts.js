var dogFoodContainer = document.getElementById("dog-food-container");

function makeDom(xhrData) { //comes from makeDom(data) in the executeThisCodeAfterFileLoaded function
    var dogFoodString = "";
    var currentDogFood;
    for (var i = 0; i < xhrData.dog_brands.length; i++) {
        currentDogFood = xhrData.dog_brands[i];

        dogFoodString += ``
        dogFoodString += ``
        dogFoodString += ``
        dogFoodString += ``
        dogFoodString += ``
        dogFoodString += ``
        dogFoodString += ``
        console.log("this iteration works!", [i])
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