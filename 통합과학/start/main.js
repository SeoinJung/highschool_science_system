(function () {
  const help = document.querySelector(".help");
  const modal = document.querySelector(".modal");
  const modalClose = modal.querySelector(".btn_close");

  help.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
})();
