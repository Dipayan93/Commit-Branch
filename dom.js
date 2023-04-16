/*var items = document.getElementsByClassName('group-item1')
items[0].style.fontWeight = 'Bold'
var li = document.getElementsByTagName('li');
li[4].style.backgroundColor = 'yellow'
var qs = document.querySelectorAll('.list-group-item')
qs[1].style.backgroundColor = 'green'
qs[2].style.visibility = 'hidden' */
var item = document.querySelector('#items')
item.parentElement.style.backgroundColor = "grey"
item.lastElementChild.textContent = 'Hello 4'
item.firstElementChild.style.backgroundColor = "yellow"
console.log(item.lastChild)
console.log(item.firstChild)
item.nextElementSibling.style.color = "red";
console.log(item.nextSibling)
console.log(item.previousSibling)
var it = document.querySelectorAll('#sib')
it[2].previousElementSibling.textContent = 'New Item'
var cEle = document.createElement('div')
cEle.className = 'nClass'
cEle.setAttribute('title', 'Hello')
var nVar = document.createTextNode('World')
cEle.appendChild(nVar)
console.log(cEle)
