
const textDisplay = document.getElementById('typewriter')
// const phrases = ['<span class="low-width">',"Hello World!  ", '<span class="hand"> &#128075;</span>', "<br>", "<br>", '</span>',"I'm", "<b>", " Nathan,", "</b>"," a Dubai based Developer who loves to code and build new experiences."]
const phrases = ['<span class="low-width">',"Hello World!  ", '<span class="hand"> &#128075;</span></span>', " "]
let i = 0
let j = 0
let currentPhrase = []
let isBR = false

async function displayAnimations() {
  await new Promise(r => setTimeout(r, 500));
  document.querySelector(".hand").style.animationPlayState = "running";
  await new Promise(r => setTimeout(r, 2000));
  document.querySelector(".scroll-indicator").style.animationPlayState = "running";
  
}

function type() {
  textDisplay.innerHTML = currentPhrase.join('')
  if (i < phrases.length) {
    if (j <= phrases[i].length) {
      if (phrases[i][j] == '<' || phrases[i][j] == '&') {
        if (phrases[i] == '<br>') {
          isBR = true
        }
        currentPhrase.push(phrases[i])
        i++;
        j = 0
      } else {
        currentPhrase.push(phrases[i][j])
        j++
        textDisplay.innerHTML = currentPhrase.join('')
      }
    }
    if (j == phrases[i].length) {
      i++;
      j = 0;
    }
  } else {
    displayAnimations()
    return;
  }
if (isBR) {
    setTimeout(type, 400)
    isBR = false
  } else {
    setTimeout(type, 150)
  }
}
// type()

AOS.init({
  easing: 'ease-in-quad',
});

$("#button").click(function() {
  $('html, body').animate({
      scrollTop: ($("#experience").offset().top)-60
  }, 1300);
  
});
$("#exp-nav").click(function() {
  $('html, body').animate({
      scrollTop: $("#experience").offset().top
  }, 1300);
});

$("#proj-nav").click(function() {
  $('html, body').animate({
      scrollTop: $("#projects").offset().top
  }, 1300);
});

$(".logo").click(function() {
  $('html, body').animate({
      scrollTop: 0
  }, 1300);
});

// var test = true;


// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     if(scroll > 10 && test) {
//       $('html, body').animate({
//         scrollTop: $("#work").offset().top
//     }, 1300);
//     test = false;
//     } 
    
// });
// $(window).scroll(function() {
//   if(window.scrollY<10){
//       test = true;
//   }

// });
(function () {
  const header = document.querySelector('.mobile-header');
    const icon = document.querySelector('.icon-container');
    icon.onclick = function () {
        header.classList.toggle('menu-open');
    }
}());
(function () {
  const header = document.querySelector('.mobile-header');
    const link = document.querySelector('.menu-list');
    link.onclick = function () {
        header.classList.toggle('menu-open');
    }
}());
