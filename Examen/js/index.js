document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

document.getElementById("logo").onclick = function() {
    location.href = "#invi-nav-0"
};

function scrollValue() {
    var navbar = document.getElementById('navbar_top');
    var scroll = window.scrollY;

    console.log(scroll);

    if (scroll < 800) {
        navbar.classList.remove('nav-link-black');
        navbar.classList.remove('blackline')
    } else if (scroll > 2400 && scroll <= 3216) {
        navbar.classList.remove('nav-link-black');
        navbar.classList.remove('blackline')
    } else {
        navbar.classList.add('nav-link-black');
        navbar.classList.add('blackline')
    }
}


window.addEventListener('scroll', scrollValue)


const motor = () => {
    document.getElementById("motor-txt").style.display = "block";
    document.getElementById("motor-img").style.display = "block";
    document.getElementById("chasis-txt").style.display = "none";
    document.getElementById("chasis-img").style.display = "none";
    document.getElementById("ergonomia-img").style.display = "none";
    document.getElementById("ergonomia-txt").style.display = "none";
    document.getElementById("carroceria-txt").style.display = "none";
    document.getElementById("carroceria-img").style.display = "none";
    document.getElementById("electronica-txt").style.display = "none";
    document.getElementById("electronica-img").style.display = "none";
}

const chasis = () => {
    document.getElementById("chasis-txt").style.display = "block";
    document.getElementById("chasis-img").style.display = "block";
    document.getElementById("motor-txt").style.display = "none";
    document.getElementById("motor-img").style.display = "none";
    document.getElementById("ergonomia-img").style.display = "none";
    document.getElementById("ergonomia-txt").style.display = "none";
    document.getElementById("electronica-txt").style.display = "none";
    document.getElementById("electronica-img").style.display = "none";
    document.getElementById("carroceria-txt").style.display = "none";
    document.getElementById("carroceria-img").style.display = "none";

}

const ergonomia = () => {
    document.getElementById("motor-txt").style.display = "none";
    document.getElementById("motor-img").style.display = "none";
    document.getElementById("chasis-img").style.display = "none";
    document.getElementById("chasis-txt").style.display = "none";
    document.getElementById("carroceria-txt").style.display = "none";
    document.getElementById("carroceria-img").style.display = "none";
    document.getElementById("electronica-txt").style.display = "none";
    document.getElementById("electronica-img").style.display = "none";
    document.getElementById("ergonomia-img").style.display = "block";
    document.getElementById("ergonomia-txt").style.display = "block";

}

const carroceria = () => {
    document.getElementById("motor-txt").style.display = "none";
    document.getElementById("motor-img").style.display = "none";
    document.getElementById("chasis-img").style.display = "none";
    document.getElementById("chasis-txt").style.display = "none";
    document.getElementById("ergonomia-img").style.display = "none";
    document.getElementById("ergonomia-txt").style.display = "none";
    document.getElementById("electronica-txt").style.display = "none";
    document.getElementById("electronica-img").style.display = "none";
    document.getElementById("carroceria-txt").style.display = "block";
    document.getElementById("carroceria-img").style.display = "block";

}

const electronica = () => {
    document.getElementById("motor-txt").style.display = "none";
    document.getElementById("motor-img").style.display = "none";
    document.getElementById("chasis-img").style.display = "none";
    document.getElementById("chasis-txt").style.display = "none";
    document.getElementById("ergonomia-img").style.display = "none";
    document.getElementById("ergonomia-txt").style.display = "none";
    document.getElementById("carroceria-txt").style.display = "none";
    document.getElementById("carroceria-img").style.display = "none";
    document.getElementById("electronica-txt").style.display = "block";
    document.getElementById("electronica-img").style.display = "block";

}

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}