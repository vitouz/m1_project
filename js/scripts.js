let btn = document.querySelector("#button");
let paragrapher = document.querySelector("#paragrapher");

btn.addEventListener("click", () => {
  if (paragrapher.style.display === "flex") {
    paragrapher.style.display = "none";
  } else {
    paragrapher.style.display = "flex";
  }
});

let newParagrapher = document.querySelector(".visao_paragrapher");
let second_button = document.querySelector("#second_button");

second_button.addEventListener("click", () => {
  if (newParagrapher.style.display === "flex") {
    newParagrapher.style.display = "none";
  } else {
    newParagrapher.style.display = "flex";
  }
});
