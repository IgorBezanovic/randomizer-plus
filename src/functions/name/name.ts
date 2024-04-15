import { randomIndex } from '../../utils/randomIndex';
import listOfNamesMaleUS from '../../data/names/maleUS';
import listOfNamesFemaleUS from '../../data/names/femaleUS';

/**
 * Generates a random name from a list of male names in the United States.
 * @param {string} gender - Possible value 'male' or 'female'.
 * @returns {string} A random male name.
 */
export const randomName = (gender?: string): string => {
    if (gender && gender.toLowerCase().trim() === 'male') {
        return listOfNamesMaleUS[randomIndex(listOfNamesMaleUS)];
    } else if (gender && gender.toLowerCase().trim() === 'female') {
        return listOfNamesFemaleUS[randomIndex(listOfNamesFemaleUS)];
    } else {
        const mergedList = [...listOfNamesMaleUS, ...listOfNamesFemaleUS];
        return mergedList[randomIndex(mergedList)];
    }
};
export default randomName;
