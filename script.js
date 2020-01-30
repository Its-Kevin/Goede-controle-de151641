const antwoorden = {
    Frankrijk : "Parijs",
    spin : "8",
    meer : "IJsselmeer"
};

function checkAnwsers() {
    let allGood = true;

    Object.keys(antwoorden).forEach(function (item) {
        let element = document.getElementById(item)
        if (element.value === antwoorden[item]){
            element.classList.add("bg-green");
        } else {
            element.classList.add("bg-red");
            allGood = false;
        }
    });

    if (allGood){
        document.getElementById("correct").innerText = "Alle antwoorden zijn correct"
    }
}