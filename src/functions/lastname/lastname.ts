import { randomIndex } from '../../utils/randomIndex';
import listOfLastName from '../../data/lastName/lastName';

/**
 * Generates a random lastName.
 *
 * @returns {string} A random lastName.
 */
export const randomLastName = (): string => {
    return listOfLastName[randomIndex(listOfLastName)];
};
export default randomLastName;
