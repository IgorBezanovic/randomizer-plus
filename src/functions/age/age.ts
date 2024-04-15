/**
 * Generates a random age within the specified range, 1 and 122.
 * Jeanne Louise Calment is the oldest living person ever, who lived for 122 years.
 * 
 * @param {number} min - The minimum age.
 * @param {number} max - The maximum age.
 * @returns {number} A random age within the specified range.
 */
export const randomAge = (min: number = 1, max: number = 122): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export default randomAge;