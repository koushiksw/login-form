let btnGrid = document.getElementById("btngrid");
let btnList = document.getElementById("btnlist");
let formList = document.getElementById("formList");
let formGrid = document.getElementById("formGrid");

function showForm(formToShow) {
  formGrid.style.display = "none";
  formList.style.display = "none";
  formToShow.style.display = "block";
}

btngrid.addEventListener("click", function() {
  showForm(formGrid);
});

btnlist.addEventListener("click", function() {
  showForm(formList);
});

const color = document.getElementById("color");
const bgColor = document.getElementById("bgColor");

color.addEventListener("change", function() {
  const selectedColor = color.value;
  bgColor.style.backgroundColor = selectedColor;
});