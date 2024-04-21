/**
 * Generates a random color in HEX format.
 *
 * @returns {string} Random color in HEX format.
 */
export const randomColor = (): string => {
    const randomColor: string = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
export default randomColor;
