(() => {
  const lightbox = document.querySelector(".case-lightbox");
  if (!lightbox || typeof lightbox.showModal !== "function") return;

  const image = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector("button");
  let opener;

  document.querySelectorAll(".case-zoom").forEach((link) => {
    link.setAttribute("aria-haspopup", "dialog");
    link.addEventListener("click", (event) => {
      event.preventDefault();
      opener = link;
      image.src = link.href;
      image.alt = link.querySelector("img").alt;
      lightbox.showModal();
    });
  });

  closeButton.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener("close", () => {
    opener.focus({ preventScroll: true });
    image.removeAttribute("src");
  });
})();
