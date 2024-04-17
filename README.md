# Randomizer-plus

A library that allows you to randomize everything.

## Next release
  -  In the some of next releases, we will add cities and popular names (m/f) from other countries (from South America, Europe, Africa, Asia, Australia)

## Functions
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
  - randomCity:
  ```
    // Generate a random city
    const city = randomCity(); // In the next releases, we will add cities from other countries (from South America, Europe, Africa, Asia, Australia).
    console.log(city);
  ```
  - randomLastname:
  ```
    // Generate a random lastname
    const lastname = randomLastname();
    console.log(lastname);
  ```
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

## Project started
  12. April 2024.

## Contact person
Igor Bezanovic - igorbezanovic@gmail.com