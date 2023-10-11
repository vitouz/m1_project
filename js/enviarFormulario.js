const nameInput = document.querySelector("#formName");
const emailInput = document.querySelector("#formEmail");
const cellphoneInput = document.querySelector("#formCellphone");
const formButton = document.querySelector(".form_button");

formButton.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const cellphoneValue = cellphoneInput.value;

  if (nameValue === "" || emailValue === "" || cellphoneValue === "") {
    alert("Preencha os Campos Corretamente");
    return;
  } else {
    alert("Mensagem Enviada");
  }
});
