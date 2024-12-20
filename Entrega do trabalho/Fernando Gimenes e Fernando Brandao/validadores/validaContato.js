document
  .querySelector("form#user_contact")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const cpf = document.getElementById("user_cpf").value;
    const telefone = document.getElementById("user_telefone").value;
    var errors = "";

    if (!validarCPF(cpf)) {
      errors += `\n${CPF_INVALIDO}`;
    }

    if (!validarTelefone(telefone)) {
      errors += `\n${TELEFONE_INVALIDO}`;
    }

    if (errors != "") {
      alert(`Por favor, verifique os seguintes problemas: ${errors}`);
    } else {
      alert("Formulário registrado com sucesso!");
      document.querySelector("form#user_contact").reset();
    }
  });
