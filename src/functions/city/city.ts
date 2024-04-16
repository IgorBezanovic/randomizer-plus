import { randomIndex } from '../../utils/randomIndex';
import citiesUS from '../../data/cities/citiesUS';

/**
 * Generates a random city from a list of cities in the United States.
 * 
 * @returns {string} A random US city.
 */
export const randomCity = (): string => {
    return citiesUS[randomIndex(citiesUS)].CITY;
};
export default randomCity;
