//To remove the created element
document.getElementById("rightSideCalculation").addEventListener('click', function (event) {
//    console.log(event.target);
    event.target.parentNode.removeChild(event.target);
})
