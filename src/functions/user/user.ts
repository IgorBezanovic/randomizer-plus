import { randomAge, randomCity, randomDice, randomLastName, randomName, randomString } from "../../index";
import { User } from "../../types";

/**
 * Generates a random user with random properties.
 *
 * @returns {User} A random user containing properties such as id, name, lastName, city, age, and luckyNumber.
 */
export const randomUser = (): User => {
    return {
        id: randomString({ withDash: true }),
        name: randomName(),
        lastName: randomLastName(),
        city: randomCity(),
        age: randomAge({ min: 18, max: 55 }),
        luckyNumber: randomDice(),
    };
}
export default randomUser;