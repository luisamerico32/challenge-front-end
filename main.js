// Using the input to change background-color 

const inputColor = document.querySelector('.input-color')
const codeZone = document.querySelector('.code-zone-text')

inputColor.addEventListener("input", function() {
    codeZone.style.backgroundColor = inputColor.value;
}, false);