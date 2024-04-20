import { randomIndex } from '../../utils/randomIndex';
import listOfNamesMale from '../../data/names/male';
import listOfNamesFemale from '../../data/names/female';

/**
 * Generates a random name from a list of names.
 *
 * @param {string} [options.gender] - The gender of the name. Possible values are 'male' or 'female'.
 * @returns {string} A random name based on the specified gender, or a random name if no gender is provided.
 */
export const randomName = ({ gender }: { gender?: string } = {}): string => {
    if (gender && gender.toLowerCase().trim() === 'male') {
        return listOfNamesMale[randomIndex(listOfNamesMale)];
    } else if (gender && gender.toLowerCase().trim() === 'female') {
        return listOfNamesFemale[randomIndex(listOfNamesFemale)];
    } else {
        const mergedList = [...listOfNamesMale, ...listOfNamesFemale];
        return mergedList[randomIndex(mergedList)];
    }
};
export default randomName;
