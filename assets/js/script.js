

var settingsmenu = document.querySelector(".nav-menu"); /* to add new class on click */

var darkBtn = document.getElementById("dark-btn"); /* to add & remove class on click */



/* to add new class function*/
function menuToggle(){
    settingsmenu.classList.toggle("nav-menu-toggle");
}
/* to add new class function*/




/* to add & remove class function*/
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}
/* to add & remove class function*/