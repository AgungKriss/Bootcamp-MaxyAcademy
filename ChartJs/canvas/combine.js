const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
canvas.height = canvas.clientWidth;
ctx.transform(1, 0, 0, -1, 0, canvas.height);
let xMax = canvas.height;
let yMax = canvas.width;
let slope = 1.2;
let intercept = 70;

const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// Ploting Scatter
ctx.fillStyle = "red";
for(let i = 0; i < xArray.length-1; i++){
    let x = xArray[i]*400/150;
    let y = yArray[i]*400/15;
    ctx.beginPath();
    ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI*2);
    ctx.fill();
}

// Ploting Line
ctx.moveTo(0, intercept);
ctx.lineTo(xMax, f(xMax));
ctx.strokeStyle = "black";
ctx.stroke();

function f(x){
    return x * slope + intercept;
}