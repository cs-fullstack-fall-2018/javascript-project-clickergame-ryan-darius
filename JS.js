var nextUpgrade = 10;
var score = 0;
var sumButton = document.getElementById("button1");
var total = document.getElementById("theTotal");
var upgrade = document.getElementById("button2");
upgrade.addEventListener("click", upgrade1);
sumButton.addEventListener("click", sumPress);
var multiplier = 1;

//This function is going to add 1 to the score when you click it
function sumPress() {
    score += multiplier;
    total.innerHTML = score;
    if (score >= nextUpgrade) {
        upgrade.removeAttribute("disabled");
    }
}

//This function is going to upgrade when it gets to a certain score
function upgrade1() {
    if (score >= 300) {
        nextUpgrade = -1;
        console.log("greater than 250");
    }
    else {
        multiplier = multiplier * 2;
        switch (nextUpgrade) {
            case 10:
                nextUpgrade = 50;
                break;
            case 50:
                nextUpgrade = 100;
                break;
            case 100:
                nextUpgrade = 150;
                break;
        }
    }
    upgrade.setAttribute("disabled", "disabled");
    upgrade.value = "Upgrade: " + nextUpgrade;
}

