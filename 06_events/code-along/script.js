
let eye = document.querySelector('#eye');
eye.addEventListener('click', function () {
    eye.classList.toggle('bloody');
});

let follow_me = document.querySelector('#follow_me');
document.addEventListener('mousemove', function(e) {
    let posX = e.clientX;
    let posY = e.clientY;

    follow_me.style.left = posX + 'px';
    follow_me.style.top = posY + 'px';
    console.log("maus wurde bewegt:", posX, posY);

})
