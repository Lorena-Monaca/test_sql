// Función suma
export function suma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Ambos valores deben ser números.';
  }
  return a + b;
}

// Función resta
export function resta(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Ambos valores deben ser números.';
  }
  return a - b;
}

// Función división
export function division(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Ambos valores deben ser números.';
  }
  if (b === 0) {
    return 'Error: No se puede dividir por cero.';
  }
  return a / b;
}

// Función multiplicación
export function multiplicacion(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Ambos valores deben ser números.';
  }
  return a * b;
}

// Función por defecto: info
export default function info() {
  console.log('Este módulo permite realizar operaciones matemáticas: suma, resta, multiplicación y división.');
}
