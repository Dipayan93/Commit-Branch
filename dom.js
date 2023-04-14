/*var items = document.getElementsByClassName('group-item1')
items[0].style.fontWeight = 'Bold'
var li = document.getElementsByTagName('li');
li[4].style.backgroundColor = 'yellow'
var qs = document.querySelectorAll('.list-group-item')
qs[1].style.backgroundColor = 'green'
qs[2].style.visibility = 'hidden' */
var item = document.querySelector('#items')
item.parentElement.style.backgroundColor = '#f4f4f4'
item.lastElementChild.textContent = 'Hello 4'
item.lastChild.style.backgroundColor = 'red'

