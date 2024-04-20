/**
 * Generates a random day of week.
 *
 * @returns {string} A random day of week.
 */
export const randomYear = (minYear: number = 1900): number => {
    const currentYear: number = new Date().getFullYear();
    return Math.floor(Math.random() * (currentYear - minYear + 1)) + minYear;
}
export default randomYear;