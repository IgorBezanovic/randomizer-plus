/**
 * Generates a random year within a specified range, defaulting to 1900 and the current year.
 *
 * @param {number} [options.minYear=1900] - The minimum year from which the random year is generated. Defaults to 1900 if not provided.
 * @returns {number} A random year within the specified range.
 */
export const randomYear = ({ minYear = 1900 }: { minYear?: number } = {}): number => {
    const currentYear: number = new Date().getFullYear();
    return Math.floor(Math.random() * (currentYear - minYear + 1)) + minYear;
}
export default randomYear;