/////////////////// REFERENCES //////////////////

var dogFoodContainer = document.getElementById("dog-food-container");
var catFoodContainer = document.getElementById("cat-food-container");
var myRequest = new XMLHttpRequest();
var myRequest2 = new XMLHttpRequest();

/////////////////// DOG FOOD //////////////////

function makeDom(xhrData) { //comes from makeDom(data) in the executeThisCodeAfterFileLoaded function
    var dogFoodString = "";
    var currentDogFood;
    var currentOz;

    for (var i = 0; i < xhrData.dog_brands.length; i++) {
        currentDogFood = xhrData.dog_brands[i];
        dogFoodString += `<div>${currentDogFood.name}</div>`;
        for (var j = 0; j < xhrData.dog_brands[i].types.length; j++) {
            dogFoodString += `<li>${xhrData.dog_brands[i].types[j].type}<li>`;
            for (var k = 0; k < xhrData.dog_brands[i].types[j].volumes.length; k++) {
                currentOz = xhrData.dog_brands[i].types[j].volumes[k];
            }
            dogFoodString += `${currentOz.name} for $`;
            dogFoodString += `${currentOz.price}`;
        }
    }
    dogFoodContainer.innerHTML = dogFoodString;
}

function executeThisCodeAfterFileLoaded() {
    var data = JSON.parse(this.responseText); //there's also a .stringify
    makeDom(data);
}

function executeThisCodeAfterFileFails() {
    console.log("not working")
}


myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dog.json");
myRequest.send();


/////////////////// CAT FOOD //////////////////

function makeDom2(xhrData2) {
	var catFoodString = "";
    var currentCatFood;
    var currentOz2;

    for (var i = 0; i < xhrData2.cat_brands.length; i++) {
        currentCatFood = xhrData2.cat_brands[i];
        console.log("first cat string works");
        catFoodString += `<div>${currentCatFood.brand}</div>`;
        for (var j = 0; j < xhrData2.cat_brands[i].breeds.length; j++) {
        	console.log("second cat string works");
            catFoodString += `<li>${xhrData2.cat_brands[i].breeds[j].type}<li>`;
            for (var k = 0; k < xhrData2.cat_brands[i].breeds[j].volumes.length; k++) {
            	console.log("third cat string works");
                currentOz2 = xhrData2.cat_brands[i].breeds[j].volumes[k];
            }
            catFoodString += `${currentOz2.age}`;
            catFoodString += `${currentOz2.name} for $`;
            catFoodString += `${currentOz2.price}`;
        }
    }
    catFoodContainer.innerHTML = catFoodString;
}

function executeThisCodeAfterFileLoaded2() {
    var data2 = JSON.parse(this.responseText);
    makeDom2(data2);
}

myRequest2.addEventListener("load", executeThisCodeAfterFileLoaded2);
myRequest2.addEventListener("error", executeThisCodeAfterFileFails);
myRequest2.open("GET", "cat.json");
myRequest2.send();


