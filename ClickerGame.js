var score = 0;
function upgrade1() {

    while (score <= 9) {
        score++;
        console.log(" Power UP ")
    }
    if (score === 10) {

        console.log(" This is what I call Super Sayian Full power.")
    }
}
upgrade1();



function upgrade2() {
    while ( score <=19){
        score++;
        console.log(" HAAAAAAAAAAAAAAA!!!")
    }
    if (score ===20 ){
        console.log ( " And this is what I call Super Sayian 2 , or an  Ascended Sayian .")
    }

}

upgrade2();

function upgrade3(){
    while (score <50){
        score++;
        console.log(" And THIS is to go FURTHER BEYOND ! AHHHHHHHHHHHHHHHHHH!!!!")
    }
    if ( score === 50 ){
        console.log(" And this is my newset form, Super Sayian 3. # No Eyebrows ");
    }
}

upgrade3();



setInterval(function AutoClika() {
    var autoScore = 0
    while (autoScore !=50){
        document.getElementById("AutoButton").click();
        console.log(" Is working great !")
    }  1000;


})

setInterval();