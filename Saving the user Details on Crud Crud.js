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

const apiLink = ' https://crudcrud.com/api/a9f95e5dcb36479cb406151dae37dd0b'+'/expense/';
// Add item
window.addEventListener("DOMContentLoaded", () => {
  axios.get(apiLink)
  .then((res) => {
    console.log(res)
    for(var i=0; i < res.data.length; i++) {
      getResponse(res.data[i]);
      localStorage.setItem(res.data[i].Desc, JSON.stringify(res.data[i]));
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
        var userRecords = {
            Price,
            Desc,
            Catgy
        }
        axios.post(apiLink, userRecords)
        .then((res) => {console.log(res)})
        .catch((err) => {console.log(err)})
        localStorage.setItem(Desc, JSON.stringify(userRecords));
        getResponse(userRecords);
      }
      

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
        itemList.removeChild(li);
        const Desc1 = e.target.parentElement.firstChild.nodeValue.split(' ')[1]
      let id;
      let i = 0;
      axios.get(apiLink)
  .then((res) => {
      for(i=0; i < res.data.length; i++) {
        
        if(res.data[i].Desc == Desc1){
          id = res.data[i]._id;
          break;
        }  
      }
      axios.delete(apiLink+ id)
      .then((res1) => {console.log(res1)
        
        localStorage.removeItem(Desc1)
      })
      .catch((err1) => {console.log(err1)})
  })
  .catch((err) => {
    console.log(err)
  })
    }
  }
}
function editItem(e){
  if(e.target.classList.contains('edit')){
    if(confirm('Edit this user details?')){
      var li = e.target.parentElement;
        itemList.removeChild(li);
      if((Price == null || Price == "") && (Desc == null || Desc == "") && (Catgy == null || Desc == ""))
      {
        alert('No value to edit')
      }
      else
      {
      const Desc2 = e.target.parentElement.firstChild.nodeValue.split(' ')[1]
      let id;
      let i = 0;
      localStorage.removeItem(Desc2)
      axios.get(apiLink)
  .then((res) => {
    
      for(i=0; i < res.data.length; i++) {
        
        if(res.data[i].Desc == Desc2){
          id = res.data[i]._id;
          break;
        }  
      }
      let Price = document.getElementById('price').value;
      let Desc = document.getElementById('desc').value;
      let Catgy = document.getElementById('catgy').value;
        var userRecords1 = {
            Price,
            Desc,
            Catgy
        }
          axios.put(apiLink + id, userRecords1)
          .then((res1) => {
          getResponse(userRecords1)
          })
          .catch((err) => console.log(err))
          
        })
        .catch((err) => (console.log(err)))
        
      }
    }
  }
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