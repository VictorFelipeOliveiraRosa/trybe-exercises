const randomNumber = () => Math.floor(Math.random() * 101); // Lógica de gerar o número
const isDivisible = (number) => (randomNumber() % number) === 0;

module.exports = {
  isDivisible
}