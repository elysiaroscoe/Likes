var countArray = [count1, count2, count3]


var count1 = 9;
var count1Element = document.querySelector("#count1");

console.log(count1Element);

function addLike1() {
    count1++;
    count1Element.innerText = count1 + " like(s)"
    countArray[0] = count1
}

countArray[0] = count1


var count2 = 12;
var count2Element = document.querySelector("#count2");

console.log(count2Element);

function addLike2() {
    count2++;
    count2Element.innerText = count2 + " like(s)"
    countArray[1] = count2
}



var count3 = 9;
var count3Element = document.querySelector("#count3");

console.log(count3Element);

function addLike3() {
    count3++;
    count3Element.innerText = count3 + " like(s)"
    countArray[2] = count3
}