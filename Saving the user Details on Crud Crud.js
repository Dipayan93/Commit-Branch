var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var editDet = document.getElementById('items');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

itemList.addEventListener('click', editItem);
let Price = document.getElementById('price').value;
  let Desc = document.getElementById('desc').value;
  let Catgy = document.getElementById('catgy').value;
        const userRecords = {
            Price,
            Desc,
            Catgy
        }
// Add item
window.addEventListener("DOMContentLoaded", () => {
  axios.get("https://crudcrud.com/api/6e5b3477a08d400e9608cbeb29de1453/expense")
  .then((res) => {
    console.log(res)
    for(var i=0; i < res.data.length; i++) {
      getResponse(res.data[i]);
    }
  })
  .catch((err) => {
    console.log(err)
  })
})
function addItem(e)
{
  e.preventDefault();
  let Price = document.getElementById('price').value;
  let Desc = document.getElementById('desc').value;
  let Catgy = document.getElementById('catgy').value;
        const userRecords = {
            Price,
            Desc,
            Catgy
        }
        axios.post("https://crudcrud.com/api/6e5b3477a08d400e9608cbeb29de1453/expense", userRecords)
        .then((res) => {console.log(res)})
        .catch((err) => {console.log(err)})
        //localStorage.setItem(Desc, JSON.stringify(userRecords));
        getResponse(userRecords);
      }
      function getResponse(userRecords)  {  
        var newItem = userRecords.Price + ' ' + userRecords.Desc
        + ' ' + userRecords.Catgy;

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

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
      localStorage.removeItem(document.getElementById('desc').value)
    }
  }
}
function editItem(e){
  if(e.target.classList.contains('edit')){
    if(confirm('Edit this user details?')){
      var li = e.target.parentElement;
      let Price = document.getElementById('price').value;
      let Desc = document.getElementById('desc').value;
      let Catgy = document.getElementById('catgy').value;
      if((Price == null || Price == "") && (Desc == null || Desc == "") && (Catgy == null || Desc == ""))
      {
        alert('No value to edit')
      }
      else
      {
        itemList.removeChild(li)
        let userRec = new Array();
        userRec = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];  
        userRec.push({
            "price": Price,
            "desc": Desc,
            "catgy" : Catgy
        })
        localStorage.setItem(Desc, JSON.stringify(userRec));
    
        // Get input value
        var newItem = document.getElementById('price').value + ' ' + document.getElementById('desc').value 
        + ' ' + document.getElementById('catgy').value;

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