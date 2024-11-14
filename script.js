//your JS code here. If required.

let colorSelect = document.getElementById("colorSelect");
let input = document.querySelector("input");

let option = document.querySelectorAll("option");

let color;

colorSelect.addEventListener("input", (e) => {
  color = e.target.value;
  console.log(color);
});

input.addEventListener("click", () => {
  option.forEach((val) => {
    if (val.innerHTML == color) {
      val.remove();
    }
  });

  if (colorSelect.children.length == 1)
    color = colorSelect.children[0].innerHTML;
});
