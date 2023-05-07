var fans = document.querySelector(".friends");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".paw");

fans.addEventListener("mouseover", function () {
    fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
    fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
    pets.innerText = "20K";
});