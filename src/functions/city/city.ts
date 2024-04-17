import { randomIndex } from '../../utils/randomIndex';
import cities from '../../data/cities/cities';

/**
 * Generates a random city from a list of cities.
 * 
 * @returns {string} A random city.
 */
export const randomCity = (): string => {
    return cities[randomIndex(cities)].city;
};
export default randomCity;
