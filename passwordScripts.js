var correctChecker = 0
function myFunction(event) {
    correctChecker = 0
    event.preventDefault();
    fetch("https://api.npoint.io/70445b38af1006b3b0e1")
    .then(urlResponse => urlResponse.json())
    .then(json => json.forEach(element => {
        if (element.password == document.getElementById("password").value.toLowerCase()) {
            console.log(element.ytlink)
            correctChecker = 1
            window.open(element.ytlink);
            document.getElementById("mainImage").src = "imgs/treasure_open.png"
            document.getElementById("confirmText").innerHTML = element.comment
        }    

    })).then( function finalfunciton() {
        if (correctChecker == 0) {
            document.getElementById("confirmText").innerHTML = "Damn, not quite the right password :("
            document.getElementById("mainImage").src = "imgs/treasure_closed.png"
        }} );
}

document.getElementById("submitButton").addEventListener("click", myFunction);