var css = document.querySelector("h3")
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    setCSSText();
}

function setRandomGradient() {
    color1.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    color2.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    setGradient();
}

function setCSSText() {
    css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ");";
}

setRandomGradient();

setCSSText();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomGradient);