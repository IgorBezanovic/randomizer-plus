import { randomIndex } from '../../utils/randomIndex';
import listOfNamesMaleUS from '../../data/names/maleUS';

/**
 * Generates a random name from a list of male names in the United States.
 * @returns {string} A random male name.
 */
export const randomName = (): string => {
    return listOfNamesMaleUS[randomIndex(listOfNamesMaleUS)];
};
export default randomName;
