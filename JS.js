var score = 0;
var theButton = document.getElementById("button1");
var total = document.getElementById("theTotal");


theButton.addEventListener("click", sumPress);
var sum = 0;

function sumPress() {
    total.innerHTML += 1;
    sum += 1;
    total.innerHTML = sum;
    total.innerText = parseInt(total.innerText) + 1;
}