var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);


// Add item
function addItem(e)
{
  
  e.preventDefault();
  let userRecords = new Array();
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Phone = document.getElementById('phone').value;
    userRecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    if(userRecords.some((v)=>{return v.Email==Email}))
    {
        alert("Duplicate Data");
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