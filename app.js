import info, { suma, resta, division, multiplicacion } from './calculadora.js';

function calcular(operacion, valor1, valor2) {
  let resultado;

  switch (operacion) {
    case 'suma':
      resultado = suma(valor1, valor2);
      break;
    case 'resta':
      resultado = resta(valor1, valor2);
      break;
    case 'division':
      resultado = division(valor1, valor2);
      break;
    case 'multiplicacion':
      resultado = multiplicacion(valor1, valor2);
      break;
    default:
      resultado = 'Operación no reconocida.';
  }

  console.log(`Resultado de ${operacion}:`, resultado);
}

// Mostrar información del módulo
info();

// Pruebas
calcular('suma', 5, 3);
calcular('resta', 10, 4);
calcular('division', 20, 5);
calcular('multiplicacion', 6, 7);
calcular('division', 8, 0);        // Prueba de error
calcular('suma', 'a', 2);          // Prueba de error
