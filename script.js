var names, item;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


names = [];


document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text').value);
  names.unshift(getNumberOrString(document.getElementById('text').value));

  element_list.appendChild(new_li);

});

document.getElementById('button2').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list2');
  let new_li2 = document.createElement('li');
  names.forEach((item) => {
    new_li2.innerText = randomMember(names);
  });

  element_list2.appendChild(new_li2);

});
