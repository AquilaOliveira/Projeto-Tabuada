function exibirTabuada() {
    const frm = document.getElementById("tabuadaForm");
    const numero1 = Number(document.getElementById("inNumero1").value);
    const numero2 = Number(document.getElementById("inNumero2").value);
    const numero3 = Number(document.getElementById("inNumero3").value);

    let resultado1 = "";
    let resultado2 = "";
    let resultado3 = "";

    for (let i = 1; i <= 10; i++) {
        resultado1 += numero1 + " x " + i + " = " + (numero1 * i) + "\n";
        resultado2 += numero2 + " x " + i + " = " + (numero2 * i) + "\n";
        resultado3 += numero3 + " x " + i + " = " + (numero3 * i) + "\n";
    }

    document.getElementById("resultado1").innerText = resultado1;
    document.getElementById("resultado2").innerText = resultado2;
    document.getElementById("resultado3").innerText = resultado3;
}
