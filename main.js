
const textDisplay = document.getElementById('typewriter')
const phrases = ['<span class="low-width">',"Hello World! ", '<span class="hand">&#128075;</span>', "<br>", "<br>", '<span>',"I'm", "<b>", " Nathan", "</b>", ", a Developer ", "&#x1F468;&#x200D;&#x1F4BB;", " based in Dubai"]
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
    setTimeout(type, 500)
    isBR = false
  } else {
    setTimeout(type, 130)
  }
}
type()

AOS.init({
  easing: 'ease-in-quad',
});

$("#button").click(function() {
  document.querySelector(".scroll-indicator").style.animation = "disappear 1s";
  $('html, body').animate({
      scrollTop: $("#work").offset().top
  }, 1300);
  
});
$("#exp-title").click(function() {
  $('html, body').animate({
      scrollTop: $("#work").offset().top
  }, 1300);
});

$("#proj-title").click(function() {
  $('html, body').animate({
      scrollTop: $("#projects").offset().top
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


