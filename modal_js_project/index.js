const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-follow');


// Modal open function
function openModal(){
    console.log("Model is open");
    modal.classList.add('active');
    overlay.classList.add('overlayactive');
    
}

// Modal close function
function closeModal(){
    console.log("Model is close");
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
    
}

function redirectPage(){
    console.log('redirected to linkdine');
    window.location.href = 'https://www.linkedin.com/in/pratibha-upadhyay-ab3144214/';

}