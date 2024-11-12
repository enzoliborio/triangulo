const verificarTriangulo = () => {
    // Obtém os valores dos campos de entrada
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);

    // Função para verificar se os lados formam um triângulo
    const existeTriangulo = (Lado1, Lado2, Lado3) => {
        return Lado1 < (Lado2 + Lado3) &&
            Lado2 < (Lado1 + Lado3) &&
            Lado3 < (Lado1 + Lado2);
    };
    console.log(existeTriangulo(lado1, lado2, lado3));

    // Função para, caso os lados formem um triângulo, saber qual seu tipo
    const tipoTriangulo = (Lado1, Lado2, Lado3) => {
        if (Lado1 === Lado2 && Lado2 === Lado3) return 'equilátero';
        else if (Lado1 !== Lado2 && Lado2 !== Lado3 && Lado1 !== Lado3) return 'escaleno';
        else return 'isósceles';
    };

    console.log(tipoTriangulo(lado1, lado2, lado3));

    // Resultado
    const resultadoDiv = document.getElementById('resultado');
    if (existeTriangulo(lado1, lado2, lado3)) {
        const tipo = tipoTriangulo(lado1, lado2, lado3);
        resultadoDiv.innerText = `Os lados formam um triângulo ${tipo}.`;
    } else {
        resultadoDiv.innerText = 'Os lados não formam um triângulo.';
    }
};
