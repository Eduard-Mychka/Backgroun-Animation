let showModal = document.querySelector("#show-modal");
let hideModal = document.querySelector("#hide-modal");

function show() {
  let block_1 = document.querySelector(".block_1");
  block_1.style.display = "block";
}
showModal.onclick = show;

function hide() {
  let block_1 = document.querySelector(".block_1");
  block_1.style.display = "none";
}
hideModal.onclick = hide;
