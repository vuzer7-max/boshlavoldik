let elKattarasm = document.querySelector(".katta-rasm")
let elKichikrasm1 = document.querySelector(".kichik-rasm1")
let elKichikrasm2 = document.querySelector(".kichik-rasm2")
let elKichikrasm3 = document.querySelector(".kichik-rasm3")
let elKichikrasm4 = document.querySelector(".kichik-rasm4")

elKichikrasm1.addEventListener("click", function(){
    elKattarasm.src = elKichikrasm1.src;
});

elKichikrasm2.addEventListener("click", function(){
    elKattarasm.src = elKichikrasm2.src;
});

elKichikrasm3.addEventListener("click", function(){
    elKattarasm.src = elKichikrasm3.src;
});

elKichikrasm4.addEventListener("click", function(){
    elKattarasm.src = elKichikrasm4.src;
});