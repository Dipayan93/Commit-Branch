const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    //btn.style.background = 'red';
    //document.querySelector('body').classList.add('bg-dark')
    let userRecords = new Array();
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Phone = document.getElementById('phone').value;
    let Date = document.getElementById('date').value;
    let Time = document.getElementById('time').value;
    userRecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    userRecords.push({
        "name": Name,
        "email": Email,
        "phone" : Phone,
        "date" : Date,
        "time" : Time
    })
    localStorage.setItem(Email, JSON.stringify(userRecords));

    var newItem = document.getElementById("getcall").insertAdjacentHTML("afterend",
                "<h5>"+"> "+Name+" - "+Email+" - "+Phone+" - "+Date+" - "+Time+"</h5>");
    // Create new li element
    var newEle = document.createElement('form');
    // Add class
    newEle.className = 'row g-3';
    // Add text node with input value
    newEle.appendChild(document.createTextNode(newItem));

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('DELETE'));

    // Append button to li
    newEle.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(newEle);

});
var itemList = document.getElementById('items');
itemList.addEventListener('click', removeItem);
// Remove item
function removeItem(e){
if(e.target.classList.contains('delete')){
  if(confirm('Are You Sure?')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}
}
/*btn.addEventListener('mouseover', (e) => {
e.preventDefault();
document.querySelector('#myform').style.background = 'red';
btn.style.background = 'red';
document.querySelector('body').classList.add('bg-dark');
});
btn.addEventListener('mouseout', (e) => {
    //e.preventDefault();
    document.querySelector('#myform').style.background = 'red';
    btn.style.background = 'red';
    document.querySelector('body').classList.add('bg-white');
    });*/









