/**
 * Generates a random dice number.
 *
 * @returns {number} A random dice number.
 */
export const randomDice = (): number => Math.floor(Math.random() * 6) + 1;
export default randomDice;