let number1 = <HTMLInputElement>document.getElementById("number1");
let number2 = <HTMLInputElement>document.getElementById("number2");
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let resultadoPantalla = <HTMLParagraphElement>(
  document.getElementById("resultadoPantalla")
);
function esMultiplo(number1: number, number2: number): boolean {
  return number1 % number2 === 0;
}

btnEnviar.addEventListener("click", () => {
  number1 = Number(number1.value);
  number2 = Number(number2.value);
  esMultiplo(number1, number2);
  if (number1 % number2 === 0) {
    resultadoPantalla.innerHTML = `${number1} es multiplo de  ${number2}`;
  } else {
    resultadoPantalla.innerHTML = `No son multiplos`;
  }
});

/* Prueba de Escritorio
numero 1            numero 2            resultado esperado
10                    5                   10 es multiplo de 2
3                     2                   No son multiplos
2                     2                   2 es multiplo de 2
*/
