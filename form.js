const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.style.background = 'red';
    document.querySelector('body').classList.add('bg-dark')
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
    localStorage.setItem("users", JSON.stringify(userRecords));

    });
btn.addEventListener('mouseover', (e) => {
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
    });









