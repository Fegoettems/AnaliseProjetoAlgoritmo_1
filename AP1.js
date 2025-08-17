function criarArray(numb) {
  let array = [];

  for (let i = 0; i < numb; i++) {
    array.push(Math.floor(b * 1500) + 0);
  }

  return array;
}

function ordenarArray(array) {
  function compareNumberCrescente(a, b) {
    return a - b;
  }

  return array.sort(compareNumberCrescente);
}

function filtrarNumeroPrimo(array) {
  function validarPrimo(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  let arrayPrimo = [];

  array.forEach((numb) => {
    if (validarPrimo(numb)) {
      arrayPrimo.push(numb);
    }
  });

  return arrayPrimo;
}

function main() {
  const prompt = require("prompt-sync")();

  let quant = prompt("", 0);

  const inicioGeral = performance.now();

  const inicioArray = performance.now();
  const array = criarArray(quant);
  const fimArray = performance.now();

  const inicioOrdem = performance.now();
  const arrayOrdenada = ordenarArray(array);
  const fimOrdem = performance.now();

  const inicioPrimo = performance.now();
  filtrarNumeroPrimo(arrayOrdenada);
  const fimPrimo = performance.now();

  const fimGeral = performance.now();

  console.log(fimArray - inicioArray);

  console.log(fimOrdem - inicioOrdem);

  console.log(fimPrimo - inicioPrimo);

  console.log(fimGeral - inicioGeral);

  console.log("-----------------");

  const inicioGeral2 = performance.now();

  const inicioOrdem2 = performance.now();
  const arrayOrdenada2 = ordenarArray(arrayOrdenada);
  const fimOrdem2 = performance.now();

  const inicioPrimo2 = performance.now();
  filtrarNumeroPrimo(arrayOrdenada2);
  const fimPrimo2 = performance.now();

  const fimGeral2 = performance.now();

  console.log(fimOrdem2 - inicioOrdem2);

  console.log(fimPrimo2 - inicioPrimo2);

  console.log(fimGeral2 - inicioGeral2);
}

main();
