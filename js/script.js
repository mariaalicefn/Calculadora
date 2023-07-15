const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const somaBtn = document.getElementById("soma");
const subtracaoBtn = document.getElementById("subtracao");
const multiplicacaoBtn = document.getElementById("multiplicacao");
const divisaoBtn = document.getElementById("divisao");
const resultado = document.getElementById("resultado");
const clearBtn = document.getElementById ("clearBtn");

//Eventos de click

somaBtn.addEventListener("click", () => {
    if (num1.value == "" || num2.value == ""){
        resultado.textContent = "Preencha os campos!"
        return;
    }
    var numero1 = parseFloat(num1.value);
    var numero2 = parseFloat(num2.value);
    let operacao = numero1 + numero2;
    resultado.innerText = operacao;
});

subtracaoBtn.addEventListener("click", () => {
    if (num1.value == "" || num2.value == ""){
        resultado.textContent = "preencha os campos!"
        return;
    }
    var numero1 = parseFloat(num1.value);
    var numero2 = parseFloat(num2.value);
    let operacao = numero1 - numero2;
    resultado.innerText = operacao;
}
);

multiplicacaoBtn.addEventListener("click", () => {
    if (num1.value == "" || num2.value == ""){
        resultado.textContent = "preencha os campos!"
        return;
    }
    var numero1 = parseFloat(num1.value);
    var numero2 = parseFloat(num2.value);
    let operacao = numero1 * numero2;
    resultado.innerText = operacao;
});

divisaoBtn.addEventListener("click", () => {
    if (num1.value == "" || num2.value == ""){
        resultado.textContent = "preencha os campos!"
        return;
    }
    var numero1 = parseFloat(num1.value);
    var numero2 = parseFloat(num2.value);
    let operacao = numero1 / numero2;
    resultado.innerText = operacao;
}
);

clearBtn.addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    resultado.innerText = "";
  
});
