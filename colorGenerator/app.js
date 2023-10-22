
const colorArray = ["#FF5733", "#46A0E2", "#F6E14B", "#AC3B61", "#00A885", "#FFD700",  "#4CAF50", "#FF4081",  "#7D3C98",  "#FF5722"  ];


const htmlShowColor = document.getElementById("htmlShowColor");

function colorChanger() {
    const randomNum = Math.floor(Math.random() * colorArray.length);
    const randomColor = colorArray[randomNum];
    document.body.style.backgroundColor = randomColor;
    htmlShowColor.textContent = `Background Color: ${randomColor}`;
}
