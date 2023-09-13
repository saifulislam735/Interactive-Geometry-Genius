function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;//Here you can use 10000000 also as your wish
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);//This thing convert number in hexadecimal a
    let randColor = randomNumber.padStart(6, 0); //This thing confirm there must be value of 6 digit in hexadecimal.if not then add 0 in the empty place.
    randColorFinal = randColor.toUpperCase();//here toUpperCase convert the value into Uppercase for letter value.
    return `#${randColorFinal}`//Here `#${}` this thing do add # in front of the randomFinal Number B923AF to make it like for example: #B923AF and return help to return the final value
}
function calculateWithHalf(value1,value2) {
    valueOf_b = document.getElementById(value1).value;
    value1 = parseFloat(valueOf_b);
    valueOf_h = document.getElementById(value2).value;
    value2 = parseFloat(valueOf_h);

    const para = document.createElement("p");
    const area = 0.5 * value1 * value2;
    // para.innerText = "Area (0.5 X variable1 X Variable2)=" + area;
    // const element = document.getElementById("rightSideCalculation");
    // element.appendChild(para);
    
    const node = document.createTextNode("Area (0.5 X variable1 X Variable2)=" + area+ "cm^2");
    para.appendChild(node);
    // para.classList.add("item");
    para.setAttribute('id','items');
    const element = document.getElementById("rightSideCalculation");
    element.appendChild(para);
}
function calculateWithFull(value1, value2) {
    valueOf_b = document.getElementById(value1).value;
    value1 = parseFloat(valueOf_b);
    valueOf_h = document.getElementById(value2).value;
    value2 = parseFloat(valueOf_h);

    const para = document.createElement("p");
    const area = value1*value2;
    const node = document.createTextNode("Area (variable1 X Variable2)=" + area+ "cm^2");
    para.appendChild(node);
    para.classList.add("item");
    const element = document.getElementById("rightSideCalculation");
    element.appendChild(para);
}
function calculateWithPi(value1, value2) {
    valueOf_b = document.getElementById(value1).value;
    value1 = parseFloat(valueOf_b);
    valueOf_h = document.getElementById(value2).value;
    value2 = parseFloat(valueOf_h);

    const para = document.createElement("p");
    const area = 3.1416*value1*value2;
    const node = document.createTextNode("Area (Pi X variable1 X Variable2)=" + area+ "cm^2");
    para.appendChild(node);
    para.classList.add("item");
    const element = document.getElementById("rightSideCalculation");
    element.appendChild(para);
}