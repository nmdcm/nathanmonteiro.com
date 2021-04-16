
const textDisplay = document.getElementById('typewriter')
const phrases = ['<span class="low-width">',"Hello World! ", '<span class="hand">&#128075;</span>','<span>', "<br>", "<br>", "I'm", "<b>", " Nathan", "</b>", ", a Developer ", "&#x1F468;&#x200D;&#x1F4BB;", " based in Dubai"]
let i = 0
let j = 0
let currentPhrase = []
let isBR = false

async function displayAnimations() {
  await new Promise(r => setTimeout(r, 500));
  document.querySelector(".hand").style.animationPlayState = "running";
  await new Promise(r => setTimeout(r, 4000));
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




