let menu  = document.getElementById('nav');
let open  = document.getElementById('menu-btn');
let close  = document.getElementById('close');


function openmenu(){
    menu.style.left="0";
    open.style.display="none";
    close.style.display="block";
}
function closemenu(){
    menu.style.left="-100%";
    open.style.display="block";
    close.style.display="none";
}

function change() {
    var nav = document.getElementById("navbar");
    var value = window.scrollY;
    if( value > 80) {
        nav.classList.add("nav-change");
    } else {
        nav.classList.remove("nav-change");

    } 
}

window.addEventListener("scroll", change); 



//localisation
const findmyposition= () => {
    const status = document.querySelector('.status');


    const success = (position) => {
        console.log(position)
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude + ' ' + longitude)

    }

    const error = () => {
        status.textContent = 'Unable to retrive your location';
    }
    navigator.geolocation.getCurrentPosition(success, error);
}

document.querySelector('.find-place').addEventListener('click', findmyposition); 