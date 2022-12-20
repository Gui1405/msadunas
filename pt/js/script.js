const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

// // Automatic Slideshow - change image every 4 seconds
// var myIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//        x[i].style.display = "none";  
//     }
//     myIndex++;
//     if (myIndex > x.length) {myIndex = 1}    
//     x[myIndex-1].style.display = "block";  
//     setTimeout(carousel, 4000);    
// }

// // Used to toggle the menu on small screens when clicking on the menu button
// function myFunction() {
//     var x = document.getElementById("navDemo");
//     if (x.className.indexOf("w3-show") == -1) {
//         x.className += " w3-show";
//     } else { 
//         x.className = x.className.replace(" w3-show", "");
//     }
// }

// // When the user clicks anywhere outside of the modal, close it
// var modal = document.getElementById('ticketModal');
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
