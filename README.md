# Randomizer-plus

A library that allows you to randomize everything.

## Next release
  - randomName() - adding Female names
  - randomName() - adding parameters for choosing male or female name, without parameters is random from both
  - randomAge() - adding random age of "user"

## Functions
  - randomName:
  ```
    // Generate a random name
    const name = randomName(); // Generates a random name regardless of gender
    console.log(name);

    // Generate a random male name
    const maleName = randomName('male');
    console.log(maleName);

    // Generate a random female name
    const femaleName = randomName('female');
    console.log(femaleName);
  ```
  - randomAge:
  ```
    // Generate a random age
    const age = randomAge(); // Generates a random age regardless of min and max age.
    console.log(age);

    // Generate randomly ages with minimum age.
    const age = randomAge(20);
    console.log(age);

    // Generate random ages in rang of min and max ages.
    const age = randomAge(18, 55);
    console.log(age);
  ```

## Project started
  12. April 2024.

## Contact person
Igor Bezanovic - igorbezanovic@gmail.com