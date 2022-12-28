
const si = document.getElementById('si');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
si.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

no.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    no.style.setProperty('top',randomY+'%');
    no.style.setProperty('left',randomX+'%');
    no.style.setProperty('transform',`translate(-${randomX}%,-${randomY})`);
})
