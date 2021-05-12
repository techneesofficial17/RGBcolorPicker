const body = document.querySelector('body');
const redItem = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const level = document.querySelectorAll('.level');

let redValue = 0;
let greenValue = 0;
let blueValue = 0;
console.log(level);

level.forEach(item => {
    item.addEventListener('change', () => {
        var redValue = red.value;
        var greenValue = green.value;
        var blueValue = blue.value;
        let color = `rgba(${redValue}, ${greenValue}, ${blueValue},0.4)`;
        console.log(color);
        body.style.backgroundColor = color;
    });
});