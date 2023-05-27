var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var editDet = document.getElementById('items');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

itemList.addEventListener('click', editItem);
// Add item
function addItem(e)
{
  e.preventDefault();
  let Name = document.getElementById('name').value;
  let Email = document.getElementById('email').value;
  let Phone = document.getElementById('phone').value;
  let userRecords = new Array();
    userRecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    if(localStorage.getItem(Email) !== null)
    {
        alert('Duplicate Data, please enter different email ID')
    }
    else
    {    
        userRecords.push({
            "name": Name,
            "email": Email,
            "phone" : Phone
        })
        localStorage.setItem(Email, JSON.stringify(userRecords));
    
        // Get input value
        var newItem = document.getElementById('name').value + ' ' + document.getElementById('email').value 
        + ' ' + document.getElementById('phone').value;

        // Create new li element
        var li = document.createElement('li');

        // Add class
        li.className = 'list-group-item';

        // Add text node with input value
        li.appendChild(document.createTextNode(newItem));

        // Create del button element
        var deleteBtn = document.createElement('button');

        // Add classes to del button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

        // Append text node
        deleteBtn.appendChild(document.createTextNode('DELETE'));

        // Append button to li
        li.appendChild(deleteBtn);

        // Append li to list
        itemList.appendChild(li);
        
        
        // Create edit button element
        var editBtn = document.createElement('button');

        // Add classes to del button
        editBtn.className = 'btn btn-success btn-sm float-right edit';

        // Append text node
        editBtn.appendChild(document.createTextNode('EDIT'));

        // Append button to li
        li.appendChild(editBtn);

        // Append li to list
        itemList.appendChild(li);
    }
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
      localStorage.removeItem(document.getElementById('email').value)
    }
  }
}
function editItem(e){
  if(e.target.classList.contains('edit')){
    if(confirm('Edit this user details?')){
      var li = e.target.parentElement;
      let Name = document.getElementById('name').value;
      let Email = document.getElementById('email').value;
      let Phone = document.getElementById('phone').value;
      if((Name == null || Name == "") && (Email == null || Email == "") && (Phone == null || Email == ""))
      {
        alert('No value to edit')
      }
      else if(localStorage.getItem(Email) !== null)
      {
        alert('Duplicate Data, please enter different email ID')
      }
      else
      {
        itemList.removeChild(li)
        let userRec = new Array();
        userRec = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];  
        userRec.push({
            "name": Name,
            "email": Email,
            "phone" : Phone
        })
        console.log(userRec)
        localStorage.setItem(Email, JSON.stringify(userRec));
    
        // Get input value
        var newItem = document.getElementById('name').value + ' ' + document.getElementById('email').value 
        + ' ' + document.getElementById('phone').value;

        // Create new li element
        var li = document.createElement('li');

        // Add class
        li.className = 'list-group-item';

        // Add text node with input value
        li.appendChild(document.createTextNode(newItem));

        // Create del button element
        var deleteBtn = document.createElement('button');

        // Add classes to del button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

        // Append text node
        deleteBtn.appendChild(document.createTextNode('DELETE'));

        // Append button to li
        li.appendChild(deleteBtn);

        // Append li to list
        editDet.appendChild(li);
        
        
        // Create edit button element
        var editBtn = document.createElement('button');

        // Add classes to del button
        editBtn.className = 'btn btn-success btn-sm float-right edit';

        // Append text node
        editBtn.appendChild(document.createTextNode('EDIT'));

        // Append button to li
        li.appendChild(editBtn);

        // Append li to list
        editDet.appendChild(li);
        
      }
    }
  }
}