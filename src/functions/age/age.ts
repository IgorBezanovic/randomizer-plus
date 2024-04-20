/**
 * Generates a random age within the specified range, 1 and 122.
 * Jeanne Louise Calment is the oldest living person ever, who lived for 122 years.
 * 
 * @param {number} [options.min=1] - The minimum age. Defaults to 1 if not provided.
 * @param {number} [options.max=122] - The maximum age. Defaults to 122 if not provided.
 * @returns {number} A random age within the specified range.
 */
export const randomAge = ({ min = 1, max = 122 }: { min?: number; max?: number } = {}): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export default randomAge;