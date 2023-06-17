
/*============ Form Validation ===============*/
$(document).ready(function() {
    $("#jobForm").validate();
});

$(document).ready(function() {
    $("#articleForm").validate();
});

$(document).ready(function() {
    $("#roomForm").validate();
});

$(document).ready(function() {
    $("#logInForm").validate();
});

$(document).ready(function() {
    $("#registerForm").validate();
});


/*============ Modal Box Close ===============*/
let navbar = document.querySelector('.navbar-collapse');
let nav_item_job = document.querySelector('.dropdown-a');
let nav_item_article = document.querySelector('.dropdown-b');
let nav_item_room = document.querySelector('.dropdown-c');
let nav_item_login = document.querySelector('.dropdown-d');
let nav_item_register = document.querySelector('.dropdown-e');
let nav_toggle = document.querySelector('.navbar-toggler');

nav_toggle.addEventListener('click', function(){
    if(navbar.style.display =='none'){
        navbar.style.display = 'block';
    }
    else if(navbar.style.display == 'block'){
        navbar.style.display = 'none';
    }
});

nav_item_job.addEventListener('click', function(){
    navbar.style.display = 'none';
});
nav_item_article.addEventListener('click', function(){
    navbar.style.display = 'none';
});
nav_item_room.addEventListener('click', function(){
    navbar.style.display = 'none';
});
nav_item_login.addEventListener('click', function(){
    navbar.style.display = 'none';
});
nav_item_register.addEventListener('click', function(){
    navbar.style.display = 'none';
});


/*============ Checkbox in Select ===============*/
var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}
function showCheckboxes1() {
    var checkboxes1 = document.getElementById("checkboxes1");
    if (!expanded) {
      checkboxes1.style.display = "block";
      expanded = true;
    } else {
      checkboxes1.style.display = "none";
      expanded = false;
    }
}


/*============ Sweet Alert after Successful upload  ===============*/
window.popup = function(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    }) 
    Toast.fire({
        icon: 'success',
        title: 'Uploaded Successfully'
    })
}

function disappearJob(){
    popup();
    document.getElementById('job').style.display='none';
}
function disappearArticle(){
    popup();
    document.getElementById('article').style.display='none';
}
function disappearRoom(){
    popup();
    document.getElementById('room').style.display='none';
}
function disappearLogin(){
    popup();
    document.getElementById('login').style.display='none';
}
function disappearRegister(){
    popup();
    document.getElementById('register').style.display='none';
}





