/**
 * Generates a random string with optional parameters for length and character types.
 *
 * @param {number} [options.length=20] - The length of the random string. Defaults to 20 if not provided.
 * @param {boolean} [options.withSpec=false] - Whether to include special characters in the random string. Defaults to false if not provided.
 * @param {boolean} [options.withNum=false] - Whether to include numbers in the random string. Defaults to false if not provided.
 * @param {boolean} [options.withDash=false] - Whether to insert dashes in the random string. Defaults to false if not provided.
 * @returns {string} A random string based on the specified parameters.
 */
export const randomString = ({ length = 20, withSpec = false, withNum = false, withDash = false }: { length?: number, withSpec?: boolean, withNum?: boolean, withDash?: boolean } = {}): string => {
    let charset: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (withSpec) charset += '!@#$%^&*()_=+';
    if (withNum) charset += '0123456789';

    let result: string = '';
    for (let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
        if (withDash && (i + 1) % Math.floor(length / 4) === 0 && i !== length - 1) {
            result += '-';
        }
    }
    return result;
};
export default randomString;