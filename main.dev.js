"use strict";

var mybutton = document.getElementById("myBtn");
var stars = document.getElementById("star");
var title = document.getElementById("title");
var title2 = document.getElementById("title2"); // When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = 1;
  } else {
    mybutton.style.opacity = 0;
  }
} // When the user clicks on the button, scroll to the top of the document


function topFunction() {
  document.body.scrollTop = 0; // For Safari

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener('scroll', function () {
  var value = window.scrollY; // console.log(value);

  title.style.left = value + 'px';
  title2.style.right = value + 'px';
});