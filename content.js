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
