const scrollToTopBottomBar = document.createElement("div");
scrollToTopBottomBar.className = "scroll-to-top-bottom-bar";
scrollToTopBottomBar.addEventListener("mouseenter", e => {
  e.target.classList.add("increase-bottom-bar");
});
scrollToTopBottomBar.addEventListener("mouseleave", e => {
  e.target.classList.remove("increase-bottom-bar");
});
scrollToTopBottomBar.addEventListener("click", e => {
  window.scroll({ top: 0, behavior: "auto" });
});
document.body.appendChild(scrollToTopBottomBar);

const scrollToBottomBottomBar = document.createElement("div");
scrollToBottomBottomBar.className = "scroll-to-bottom-bottom-bar";
scrollToBottomBottomBar.addEventListener("mouseenter", e => {
  e.target.classList.add("increase-bottom-bar2");
});
scrollToBottomBottomBar.addEventListener("mouseleave", e => {
  e.target.classList.remove("increase-bottom-bar2");
});
scrollToBottomBottomBar.addEventListener("click", e => {
  window.scrollBy(0, window.innerHeight * 1000000);
});
document.body.appendChild(scrollToBottomBottomBar);
