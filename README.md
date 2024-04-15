# <div style="display: flex; align-items: center;"><img src="https://raw.githubusercontent.com/IgorBezanovic/randomizer-plus/master/rp-logo.png" alt="Randomizer-plus logo" style="width: 50px; height: 50px; margin-right: 10px;" /> Randomizer-plus</div>

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

## Project started
  12. April 2024.

## Contact person
Igor Bezanovic - igorbezanovic@gmail.com