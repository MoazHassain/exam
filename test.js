
const currentValue = document.querySelector('.currentValue');

const form = document.forms.demo;
const radios = form.elements.characters;

// show selected on page load
currentValue.innerText = radios.value;

// convert the RadioNodeList to an Array and using [].find() to get the element
console.log(Array.from(form.elements.characters).find(radio => radio));

// show latest value when radio checked changes
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    currentValue.innerText = radios.value;
    console.log(currentValue.innerText);
  });
});
