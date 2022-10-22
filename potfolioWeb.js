window.addEventListener("load", () => {
  setTimeout(type, newTextDelay+250);
  });
// window.addEventListener('click', () => {
const text = document.querySelector('.txt');
// text.style.color = "red"; 
const menubar = document.querySelector('.menuBar');
const navlinks = document.querySelector('nav');
const topBar = document.querySelector('.top');
const middleBar = document.querySelector('.middle');
const bottomBar = document.querySelector('.bottom');
const typedTextSpan = document.querySelector('.typed-text');
typedTextSpan.style.color = "blueviolet";
const cursorSpan = document.querySelector('.cosor');
const textArray = ["Mwas.2.0","a Coder","Android Developer", "Software Developer", "Web Developer","Genarist Developer","Frontend Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;
// typing  effect
function type(){
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
}
// erasing
function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    }
  else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length)
            textArrayIndex =0;
        setTimeout(type, typingDelay + 1100);
    } 
}
navlinks.addEventListener('click', () => {
  navlinks.classList.toggle('open');
  topBar.style.transform = "translateY(0) rotateZ(0deg)";
    middleBar.style.opacity = "1";
    bottomBar.style.transform = "translateY(0px) rotateZ(0deg)";
});
// var typed_strings = text.text();
// var typed = new Typed('.txt', {
  //   strings: typed_strings.split(','),
//   typeSpeed: 100,
//   backSpeed: 20,
//   smartBackspace: false,
//   loop:true
// });
// const followbtn = document.querySelector(".main #followBtn");
// 
    // followbtn.addEventListener('click', () => {
    //     //  alert(icons);
    //     icons.classList.toggle('openclass');

    // });

menubar.addEventListener('click', () => {
  navlinks.classList.toggle('open');
  // topBar.style.background = "red";
  if (navlinks.classList=='open') {
    topBar.style.transform = "translateY(12px) rotateZ(45deg)";
    middleBar.style.opacity = "0";
    bottomBar.style.transform = "translateY(-4px) rotateZ(-45deg)";
  }
  else {
    topBar.style.transform = "translateY(0) rotateZ(0deg)";
    middleBar.style.opacity = "1";
    bottomBar.style.transform = "translateY(0px) rotateZ(0deg)";
  }
    //const body = document.querySelector('.main');
    // body.style.background = "rgba(0,0,4,0.7)";
  //  alert("helo");

});
// });
