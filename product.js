var Name = document.getElementById("name").value
var Description = document.getElementById("description").value
var Additem = document.getElementById('todo')
var pendingTodo = document.getElementById('pending')
var completeTodo = document.getElementById('complete')
var Status = 'p'
Additem.addEventListener('submit', addItem)



pendingTodo.addEventListener('click', completeTodoList)

pendingTodo.addEventListener('click', removeTodoList)

var link = "https://crudcrud.com/api/91f7fb7045d64abda572a1d7662f6cf9"+"/todos/"
var todoList = {
    Name,
    Description,
    Status
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get(link)
    .then((res) => {
      console.log(res)
      let sum=0;
      for(var i=0; i < res.data.length; i++) {
            addpendingTodos(res.data[i])
            sum+=res.data[i].Name;
      }
      console.log(sum)
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
    addpendingTodos(todoList)
}


function removeTodoList(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Delete this product?')){
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
        let Name = e.target.parentElement.innerText.split(' - ')[0]
        let Description = e.target.parentElement.innerText.split(' - ')[1]
        let Status = 'c'
        Description = Description.substring(0,Description.length-2);
        var li = e.target.parentElement;
        pendingTodo.removeChild(li);
        let id;
        let i = 0;
        axios.get(link)
    .then((res) => {
        for(i=0; i < res.data.length; i++) {
          
          if(res.data[i].Description == Description){
            id = res.data[i]._id;
            break;
          }  
        }
          var todoRecords1 = {
              Name,
              Description,
              Status
          }
          console.log(todoRecords1)
            axios.put(link + id, todoRecords1)
            .then((res) => {
            addcompleteTodos(todoRecords1)
            }
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

  li.id = todoList.Name;

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('Delete Product'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  pendingTodo.appendChild(li);
  
  
}