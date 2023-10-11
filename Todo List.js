var Name = document.getElementById("name").value
var Description = document.getElementById("description").value
var Additem = document.getElementById('todo')
var pendingTodo = document.getElementById('pending')
var completeTodo = document.getElementById('complete')
var Status = 'p'

Additem.addEventListener('submit', addItem)



pendingTodo.addEventListener('click', completeTodoList)

pendingTodo.addEventListener('click', removeTodoList)

var link = "https://crudcrud.com/api/287b739f990b49c8aef3dc7389808990"+"/todos/"
var todoList = {
    Name,
    Description,
    Status
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get(link)
    .then((res) => {
      for(var i=0; i < res.data.length; i++) {
        if(Status == 'p')
            addpendingTodos(res.data[i])
        else
            addcompleteTodos(res.data[i])

        localStorage.setItem(res.data[i].Description, JSON.stringify(res.data[i]));
      }
    })
    .catch((err) => {
      console.log(err)
    })
  })

function addItem(e)
{
    var Name = document.getElementById("name").value
    var Description = document.getElementById("description").value
      var todoList = {
        Name,
        Description,
        Status
    }
    e.preventDefault();
    axios.post(link, todoList)
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
    localStorage.setItem(Description, JSON.stringify(todoList));
    addpendingTodos(todoList)
}


function removeTodoList(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Delete this todo?')){
        var li = e.target.parentElement;
        pendingTodo.removeChild(li);
          const Desc1 = e.target.parentElement.firstChild.nodeValue.split('- ')[1]
        let id;
        let i = 0;
        axios.get(link)
    .then((res) => {
      console.log(res + Desc1)
        for(i=0; i < res.data.length; i++) {
          console.log(res)
          if(res.data[i].Description == Desc1){
            id = res.data[i]._id;
            break;
          }  
        }
        axios.delete(link+ id)
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


function completeTodoList(e){
    if(e.target.classList.contains('edit')){
      if(confirm('Todo completed?')){
        var li = e.target.parentElement;
          pendingTodo.removeChild(li);
        const Desc2 = e.target.parentElement.firstChild.nodeValue.split(' ')[1]
        let id;
        let i = 0;
        localStorage.removeItem(Desc2)
        axios.get(link)
    .then((res) => {
        for(i=0; i < res.data.length; i++) {
          
          if(res.data[i].Description == Desc2){
            id = res.data[i]._id;
            break;
          }  
        }
        let Name = document.getElementById('name').value;
        let Description = document.getElementById('description').value;
          var todoRecords1 = {
              Name,
              Description,
              Status
          }
            axios.put(link + id, todoRecords1)
            .then(
            addcompleteTodos(todoRecords1)
            )
            .catch((err) => console.log(err))
            
          })
          .catch((err) => (console.log(err)))
          
        
      }
    }
}


function addpendingTodos(todoList)  {  
  var newItem = todoList.Name + " - " + todoList.Description;

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
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  pendingTodo.appendChild(li);
  
  
  // Create edit button element
  var completeBtn = document.createElement('button');

  // Add classes to del button
  completeBtn.className = 'btn btn-success btn-sm float-right edit';

  // Append text node
  completeBtn.appendChild(document.createTextNode('✓'));

  // Append button to li
  li.appendChild(completeBtn);

  // Append li to list
  pendingTodo.appendChild(li);
}


function addcompleteTodos(todoList)  {  
    var newItem = todoList.Name + " - " + todoList.Description;
  
    // Create new li element
    var li = document.createElement('li');
  
    // Add class
    li.className = 'list-group-item';
  
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
  
    
  
    // Append li to list
    completeTodo.appendChild(li);
  }
