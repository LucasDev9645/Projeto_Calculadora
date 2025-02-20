function outcome() {
  let num1 = Number(document.getElementById("num-one").value);
  let num2 = Number(document.getElementById("num-two").value);

  // Verifica se algum dos campos está vazio
  if (
    document.getElementById("num-one").value.trim() === "" ||
    document.getElementById("num-two").value.trim() === ""
  ) {
    document.getElementById("resultArea").innerHTML =
      "Por favor, insira números em ambos os campos.";
    return;
  }

  // Verifica se ambos os valores são 0
  if (num1 === 0 && num2 === 0) {
    document.getElementById("resultArea").innerHTML =
      "Ambos os números não podem ser zero.";
    return;
  }

  let total = 0;

  // Verifica qual operação foi selecionada
  if (document.getElementById("add").checked) {
    total = num1 + num2;
  } else if (document.getElementById("subtract").checked) {
    total = num1 - num2;
  } else if (document.getElementById("multiply").checked) {
    total = num1 * num2;
  } else if (document.getElementById("divide").checked) {
    // Verifica se num2 é zero para evitar divisão por zero
    if (num2 === 0) {
      document.getElementById("resultArea").innerHTML =
        "Não é possível dividir por zero.";
      return;
    }
    total = num1 / num2;
  }

  // Exibe o resultado
  document.getElementById("resultArea").innerHTML = "Resultado: " + total;
}
