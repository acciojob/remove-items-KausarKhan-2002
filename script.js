//your JS code here. If required.

let colorSelect = document.getElementById("colorSelect");
let input = document.querySelector("input");

let option = document.querySelectorAll("option");

let color

colorSelect.addEventListener("change", (e) => {
  color = e.target.value;
});

input.addEventListener("click", () => {
  option.forEach((val) => {
    if (val.innerHTML == color)  {
        val.remove()
    }
  });
  console.log(color);
  
});