const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.style.background = 'red';
    document.querySelector('body').classList.add('bg-dark');
    });
btn.addEventListener('mouseover', (e) => {
//e.preventDefault();
document.querySelector('#myform').style.background = '#ccc';
document.querySelector('body').classList.add('bg-dark');
});
btn.addEventListener('mouseout', (e) => {
    //e.preventDefault();
    document.querySelector('#myform').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-white');
    });