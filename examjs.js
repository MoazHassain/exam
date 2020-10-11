var nameInput = document.getElementById("name");

document.querySelector("form.exam-form").addEventListener("submit", function (e) {

    
    console.log(nameInput.value);    
});
var ageInput = document.getElementById("age");

document.querySelector("form.exam-form").addEventListener("submit", function (e) {

        e.preventDefault();
        console.log(ageInput.value);    
});


const currentValue = document.querySelector(".currentValue");

 const form = document.forms.demo;
const radios = form.elements.option;


radios.forEach(() => {
        document.querySelector("form.exam-form").addEventListener("submit", () => {
     currentValue.innerText = radios.value;
    console.log(currentValue.innerText);
  });
});

var cityInput = document.getElementById("cities");
document.querySelector("form.exam-form").addEventListener("submit", function (e) {
        var value = cityInput.options[cityInput.selectedIndex].value;
        console.log(value); 
});
function validate(){
        alert("Name: "+nameInput.value+"; "+"Age: "+ageInput.value+"; "+"Gender: "+radios.value+"; "+"City: "+cityInput.value+"; \n"+ "Do want to save?");
}