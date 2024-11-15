window.onscroll = ()=>{
    const navBar = document.querySelector('.navbar');
    if(window.scrollY>300){
        navBar.classList.add('nav-nav');
    }
    else{
        navBar.classList.remove('nav-nav');
    }
}
const toTop = document.querySelector('.to-top');

window.addEventListener("scroll", () => {
  if(window.scrollY > 500){
    toTop.classList.add('active');
  }
  else{
    toTop.classList.remove('active');
  }
});

let counterInterval;
let count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0;

const target1 = 596, target2 = 552, target3 = 5962, target4 = 1009, target5 = 434;

const duration = 5000;

const step1 = target1 / (duration / 10);
const step2 = target2 / (duration / 10);
const step3 = target3 / (duration / 10);
const step4 = target4 / (duration / 10);
const step5 = target5 / (duration / 10);

function updateCounters() {
    let completed = true;

    if (count1 < target1) {
        count1 += step1;
        document.querySelector('.counter1').textContent = Math.floor(count1);
        completed = false;
    } else {
        count1 = target1;
    }

    if (count2 < target2) {
        count2 += step2;
        document.querySelector('.counter2').textContent = Math.floor(count2);
        completed = false;
    } else {
        count2 = target2;
    }

    if (count3 < target3) {
        count3 += step3;
        document.querySelector('.counter3').textContent = Math.floor(count3);
        completed = false;
    } else {
        count3 = target3;
    }

    if (count4 < target4) {
        count4 += step4;
        document.querySelector('.counter4').textContent = Math.floor(count4);
        completed = false;
    } else {
        count4 = target4;
    }

    if (count5 < target5) {
        count5 += step5;
        document.querySelector('.counter5').textContent = Math.floor(count5);
        completed = false;
    } else {
        count5 = target5;
    }

    if (completed) {
        clearInterval(counterInterval);
    }
}

counterInterval = setInterval(updateCounters, 10);
