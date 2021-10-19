var count = 3;
var countElement = document.querySelector("#count");

console.log(countElement);

function addLike() {
    count++;
    countElement.innerText = count + " like(s)"
}