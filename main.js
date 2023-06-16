document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
        alert("Formulário válido!");
    } else {
        alert("Formulário inválido! O Campo B deve ser maior que o campo A.");
    }
});
