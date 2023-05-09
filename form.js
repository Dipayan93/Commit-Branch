myObj myDetails = {
    Name: document.getElementById('name').value,
    Email: document.getElementById('email').value,
    Phone: document.getElementById('phone').value,
    Date: document.getElementById('date').value,
    Time: document.getElementById('time').value
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.style.background = 'red';
    document.querySelector('body').classList.add('bg-dark')

    localStorage.setItem("Name",document.getElementById('name').value)
    localStorage.setItem("Email",document.getElementById('email').value)
    localStorage.setItem("Phone",document.getElementById('phone').value)
    localStorage.setItem("Date",document.getElementById('date').value)
    localStorage.setItem("Time",document.getElementById('time').value)
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









