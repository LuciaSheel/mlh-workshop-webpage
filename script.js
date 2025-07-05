let btn = document.getElementById("click-me");
let btnMessage = document.getElementById("btnMessage");
let resetBtn = document.getElementById("resetBtn");
let resetMessage = document.getElementById("reset-message");

  btn.addEventListener("click", function() {
  clickCount++;
  btnMessage.textContent = `Button clicks: ${clickCount}`;
});

resetBtn.addEventListener("click", function() {
  clickCount = 0;
  btnMessage.textContent = "";
  resetMessage.textContent = "Counter reset!";
  setTimeout(() => {
    resetMessage.textContent = "";
  }, 2000);
});

let scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
