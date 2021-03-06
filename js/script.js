var slideIndex = 1;
showDivs(slideIndex);

function moveSlide(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider__img");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
}

// tabs gallery
// var index = 1;
// showSlides(index);

// function plusSlides(n) {
//   showSlides(index += n);
// }

// function currentSlide(n){
//   showSlides(index = n);
// }

// function showSlides(n){
//   var i;
//   var slides = document.getElementsByClassName("img--full__slider");
//   var thumbs = document.getElementsByClassName("tab__img--thumbnail");
//   if(n > showSlides.length){
//     index = 1;
//   }
//   if (n < 1){
//     index =
//   }

//   for(i = 0; i < thumbs.length; i++){
//     thumbs[i].className = thumbs[i].className.replace("  active", "");
//   }
//   thumbs[slideiNdex-1].className += " active";
// }

function timer() {
  var countDown = new Date("December 31 2019 23:59:59").getTime();

  var interval = setInterval(function() {
    var current = new Date().getTime();
    var timeDiff = countDown - current;

    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
  }, 1000);
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

addLoadEvent(timer);
