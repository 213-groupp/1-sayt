// slider33
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
var currentSlide = 0;

let manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
  currentSlide = manual;
};

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    manualNav(i);
  });
});

var repeat = function (activeClass) {
  let repeator = () => {
    setTimeout(function () {
      slides[currentSlide].classList.remove('active');
      btns[currentSlide].classList.remove('active');

      currentSlide++;

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      slides[currentSlide].classList.add('active');
      btns[currentSlide].classList.add('active');

      repeator();
    }, 3500);
  };
  repeator();
};

repeat();
// text anim1
// let textt=document.querySelector('.anim')
// let strText= textt.textContent;
// let splitText=strText.split("");
// textt.textContent="";
// for(let i=0; i<splitText.length; i++){
// textt.innerHTML += "<span>"+ splitText[i]+"</span>"
// };

// let char=0;
// let timer=setInterval(onTick,50);
// function onTick(){
//   let span=textt.querySelectorAll('span')[char];
//   span.classList.add('fade')
//   char++
//   if(char === splitText.length){
//     complete()
//     return;
//   }
// }
// function complete(){
//   clearInterval(timer)
//   timer=null
// }

let txts=document.querySelector(".animate-text").children,
txtslen=txts.length;
let index=0;
let textInTimer=3000,
textOutTimer=2800;
function animateText(){
  for(let i=0; i<txtslen; i++){
    txts[i].classList.remove("text-in","text-out")

  }
  txts[index].classList.add("text-in");
  setTimeout (function(){
    txts[index].classList.add("text-out");
        },textOutTimer)
       
    setTimeout (function(){
      if(index==txtslen-1){
        index=0;
            }else{
              index++;
            }
            animateText()
    },textInTimer);
  
 
}
window.onload=animateText;
