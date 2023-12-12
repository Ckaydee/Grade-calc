// SIMPLE ADDITION IPO CALCULATOR
document.getElementById("btn").addEventListener("click" , accumulationOfPercentages)
document.getElementById("light").addEventListener("click" , lighten);
document.getElementById("dark").addEventListener("click" , darken);
document.getElementById("reset").addEventListener("click" , reset);
document.getElementById("clearBtn").addEventListener("click" , clearInputs);

function clearInputs(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
}

function lighten(){
    document.getElementById("html").style.backgroundColor = "white";
    document.getElementById("body").style.backgroundColor = "lightGrey";
    document.getElementById("body").style.color = "black";
    document.getElementById("btn").style.backgroundColor = "yellow";
    document.getElementById("btn").style.color = "black";
    document.getElementById("light").style.backgroundColor = "yellow";
    document.getElementById("light").style.color = "black";
    document.getElementById("dark").style.backgroundColor = "yellow";
    document.getElementById("dark").style.color = "black";
    document.getElementById("reset").style.backgroundColor = "yellow";
    document.getElementById("reset").style.color = "black";
    document.getElementById("input1").style.backgroundColor = "white"
    document.getElementById("input2").style.backgroundColor = "white"
    document.getElementById("input3").style.backgroundColor = "white"
    document.getElementById("input4").style.backgroundColor = "white"
    document.getElementById("input5").style.backgroundColor = "white"
    document.getElementById("input1").style.color = "black"
    document.getElementById("input2").style.color = "black"
    document.getElementById("input3").style.color = "black"
    document.getElementById("input4").style.color = "black"
    document.getElementById("input5").style.color = "black"
}

function darken(){
    document.getElementById("html").style.backgroundColor = "black";
    document.getElementById("body").style.backgroundColor = "rgb(94, 90, 90)";
    document.getElementById("body").style.color = "white";
    document.getElementById("btn").style.backgroundColor = "yellow";
    document.getElementById("btn").style.color = "black";
    document.getElementById("light").style.backgroundColor = "yellow";
    document.getElementById("light").style.color = "black";
    document.getElementById("dark").style.backgroundColor = "yellow";
    document.getElementById("dark").style.color = "black";
    document.getElementById("reset").style.backgroundColor = "yellow";
    document.getElementById("reset").style.color = "black";
    document.getElementById("input1").style.backgroundColor = "black"
    document.getElementById("input2").style.backgroundColor = "black"
    document.getElementById("input3").style.backgroundColor = "black"
    document.getElementById("input4").style.backgroundColor = "black"
    document.getElementById("input5").style.backgroundColor = "black"
    document.getElementById("input1").style.color = "white"
    document.getElementById("input2").style.color = "white"
    document.getElementById("input3").style.color = "white"
    document.getElementById("input4").style.color = "white"
    document.getElementById("input5").style.color = "white"
}

function reset(){
    document.getElementById("html").style.backgroundColor = "black";
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("body").style.color = "black";
    document.getElementById("btn").style.backgroundColor = "yellow";
    document.getElementById("btn").style.color = "black";
    document.getElementById("light").style.backgroundColor = "yellow";
    document.getElementById("light").style.color = "black";
    document.getElementById("dark").style.backgroundColor = "yellow";
    document.getElementById("dark").style.color = "black";
    document.getElementById("reset").style.backgroundColor = "yellow";
    document.getElementById("reset").style.color = "black";
    document.getElementById("input1").style.backgroundColor = "white"
    document.getElementById("input2").style.backgroundColor = "white"
    document.getElementById("input3").style.backgroundColor = "white"
    document.getElementById("input4").style.backgroundColor = "white"
    document.getElementById("input5").style.backgroundColor = "white"
    document.getElementById("input1").style.color = "black"
    document.getElementById("input2").style.color = "black"
    document.getElementById("input3").style.color = "black"
    document.getElementById("input4").style.color = "black"
    document.getElementById("input5").style.color = "black"

}
// INPUT
function accumulationOfPercentages(){
    let I1 = +document.getElementById("input1").value;
    let I2 = +document.getElementById("input2").value;
    let I3 = +document.getElementById("input3").value;
    let I4 = +document.getElementById("input4").value;
    let I5 = +document.getElementById("input5").value;
// PROCESS
    let ans = (I1+I2+I3+I4+I5) / 5;

// OUTPUT
document.getElementById("result").innerHTML = `<span id = "detailedAnswer">${ans}</span>`;  
}

