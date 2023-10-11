var Name = document.getElementById('name').value
var Desc = document.getElementById('desc').value
var addTodo = document.getElementById('todo')
var todoObj = {
    Name,
    Desc
}
var link = ''
function createTodo(e)
{
    e.preventDefault()
    axios.post(link+"/pending")
    .then()
    .catch()

}



function deleteTodo(e)
{
    axios.delete(link+"/pending/"+id)
}




function completeTodo(e)
{
    axios.post(link+"/complete")
    .then(
        deleteTodo(e)
    )
}