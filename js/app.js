//go up
const goUp = () => {
  document.getElementById("go-up-btn").href = "#go-up-id";
};

document.addEventListener("scroll", function () {
  if (window.scrollY < 200) {
    document.getElementById("go-up-btn").style.opacity = 0;
  } else {
    document.getElementById("go-up-btn").style.opacity = 1;
  }
});
//SPLASHSCREEN
const loader = document.getElementById("splash_screen");
window.addEventListener("load", function () {
  loader.classList.add("visivble");
});
document.addEventListener("scroll", function () {
  if (window.scrollY < 600) {
    document.getElementById("go-up-btn").style.opacity = 0;
  } else {
    document.getElementById("go-up-btn").style.opacity = 1;
  }
});

//HEADER
document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 100) {
    document.getElementById("header").classList.add("scrolled-header");
  } else {
    document.getElementById("header").classList.remove("scrolled-header");
  }
});
//HEROSECTION
const word = "Frontend Developer";
const speed = 200;
let index = 0;
let isDeleting = false;

function typeEffect() {
  const textElement = document.getElementById("typing-effect");
  const currentWord = word.substring(0, index);

  if (!isDeleting) {
    textElement.textContent = currentWord;
    index++;

    if (index > word.length) {
      isDeleting = true;
      setTimeout(typeEffect, speed * 2);
    } else {
      setTimeout(typeEffect, speed);
    }
  } else {
    textElement.textContent = currentWord;
    index--;

    if (index === 0) {
      isDeleting = false;
      setTimeout(typeEffect, speed);
    } else {
      setTimeout(typeEffect, speed / 2);
    }
  }
}
typeEffect();
//COUNTER
// ارایه بابت عددهایی که نیاز دارم
const numValue = [520, 683, 680, 925];
//تابع آپدیت
function updated(index) {
  const count = document.getElementById(`counter${index + 1}`);
  let upto = 0;
  const numValid = setInterval(function () {
    count.innerHTML = ++upto;
    if (upto === numValue[index]) {
      clearInterval(numValid);
    }
  });
}
// حلقه برای هر شمارنده
for (let i = 0; i < numValue.length; i++) {
  updated(i);
}

// PORTFOLIO
let img = document.getElementById("thumbnail");
let images = document.querySelectorAll("div.wrapper>img");
images.forEach((item) => {
  item.addEventListener("click", function () {
    img.src = `${item.src}`;
  });
});
//SLIDER
const reviews = [
  {
    id: 1,
    name: "Maria Novak",
    job: "CEO",
    img: "./assets/pro1.png",
    text: "Professional, friendly, trustworthy and excellent; I suggest you definitely work with this person, you won't be disappointed",
  },
  {
    id: 2,
    name: "Nick Stanton",
    job: "Designer",
    img: "./assets/pro2.png",
    text: "A professional person with a very respectful attitude. I am fully satisfied with working with her. Good luck",
  },
  {
    id: 3,
    name: "Arman Rad",
    job: "Businessman ",
    img: "./assets/pro4.png",
    text: "We had a great cooperation and we want to continue this cooperation. she is patient, very knowledgeable, and quickly diagnose and solve problems.",
  },
  {
    id: 4,
    name: "Susan Barr",
    job: "Software Engineer",
    img: "./assets/pro7.png",
    text: " I was satisfied working with her, she did the project exactly as I wanted and even better.",
  },
];
const userImag = document.getElementById("img-slide");
const userReview = document.getElementById("review-slide");
const userName = document.getElementById("name-slide");
const userJob = document.getElementById("job-slide");

let currentUser = 0;
const setSlideData = (userIndex) => {
  const user = reviews[userIndex];
  userImag.src = user.img;
  userName.textContent = user.name;
  userJob.textContent = user.job;
  userReview.textContent = user.text;
};
document.addEventListener("DOMContentLoaded", function () {
  setSlideData(0);
});
document.getElementById("next-btn").addEventListener("click", function () {
  if (currentUser >= 0 && currentUser < reviews.length - 1) {
    currentUser++;
    setSlideData(currentUser);
  } else if (currentUser >= reviews.length - 1) {
    currentUser = 0;
    setSlideData(currentUser);
  }
});
document.getElementById("back-btn").addEventListener("click", function () {
  if (currentUser > 0) {
    currentUser--;
    setSlideData(currentUser);
  } else {
    currentUser = reviews.length - 1;
    setSlideData(currentUser);
  }
});
