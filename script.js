function encriptarTexto() {
    const texto = document.getElementById("texto").value.toLowerCase();
    let resultado = ""; 

    
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "e":
                resultado += "enter";
                break;
            case "i":
                resultado += "imes";
                break;
            case "a":
                resultado += "ai";
                break;
            case "o":
                resultado += "ober";
                break;
            case "u":
                resultado += "ufat";
                break;
            default:
                resultado += texto[i];
        }
    }

    mostrarResultado(resultado); 
}

function desencriptarTexto() {
    const texto = document.getElementById("texto").value; 
    let resultado = texto.replace(/enter|imes|ai|ober|ufat/g, function (match) {
        switch (match) {
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ai":
                return "a";
            case "ober":
                return "o";
            case "ufat":
                return "u";
        }
    });

    mostrarResultado(resultado.trim());
}

function mostrarResultado(resultado) {
    const areaResultado = document.querySelector(".areaResultado"); 
    areaResultado.classList.add("areaResultado2"); 

    const resultadoP = document.createElement("p");
    resultadoP.textContent = resultado;
    resultadoP.classList.add("areaResultado2", "resultado-p"); 

    const resultadoButton = document.createElement("button");
    resultadoButton.textContent = "Copiar";
    resultadoButton.className = "boton-resultado areaResultado2"; 

    resultadoButton.addEventListener("click", function () {
        navigator.clipboard.writeText(resultado); // 
    });

    
    areaResultado.innerHTML = ""; 
    areaResultado.appendChild(resultadoP);
    areaResultado.appendChild(resultadoButton);
}
