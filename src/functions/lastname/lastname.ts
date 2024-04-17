import { randomIndex } from '../../utils/randomIndex';
import listOfLastname from '../../data/lastname/lastname';

/**
 * Generates a random lastname.
 *
 * @returns {string} A random lastname.
 */
export const randomLastname = (): string => {
    return listOfLastname[randomIndex(listOfLastname)];
};
export default randomLastname;
