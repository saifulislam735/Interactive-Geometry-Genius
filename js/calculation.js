//To create element on right side and do calculation 
document.getElementById("btn-1").addEventListener('click', function () {
    calculateWithHalf("valueOf_b","valueOf_h")
})
document.getElementById("btn-4").addEventListener('click', function () {
    calculateWithHalf("valueOf_d1","valueOf_d2")
})
document.getElementById("btn-5").addEventListener('click', function () {
    calculateWithHalf("valueOf_p","valueOf_c")
})
document.getElementById("btn-2").addEventListener('click', function () {
    calculateWithFull("valueOf_w","valueOf_i")
})
document.getElementById("btn-3").addEventListener('click', function () {
    calculateWithFull("valueOf_s","valueOf_t")
})
document.getElementById("btn-6").addEventListener('click', function () {
    calculateWithPi("valueOf_x","valueOf_y")
})
