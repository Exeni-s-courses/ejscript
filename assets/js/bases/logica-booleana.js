const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true);  // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()) // true
console.log(!regresaTrue()) // false


console.warn('And'); // true si todos los valores son verdaderos

console.log(true && true) // true
console.log(true && false) // false

console.log('==============');
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.log('==============');
regresaFalse() && regresaTrue()

console.warn('Or'); // true

console.log(true || false)
console.log(false || true);

console.log(regresaTrue() || regresaFalse());

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse;
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({ a1 })
console.log({ a2 })
console.log({ a3 })
console.log({ a4 })
console.log({ a5 })

if (true || true || true || false) {
    console.log('Hacer algo');
}