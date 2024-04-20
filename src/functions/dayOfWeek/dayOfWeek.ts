/**
 * Generates a random day of week.
 *
 * @returns {string} A random day of week.
 */
export const randomDayOfWeek = (): string => {
    const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const randomIndex: number = Math.floor(Math.random() * 7);
    return daysOfWeek[randomIndex];
}
export default randomDayOfWeek;