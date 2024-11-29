import names from "./names.js"
// console.log(names)

import hobbiesName from "./hobbies.js"
// console.log(hobbiesName);

import chalk from 'chalk';


const yourProfile = (firstName, lastName, hobbyOne, hobbyTwo, hobbyThree) => {
    const fullName = names(firstName, lastName);
    const hobbies = hobbiesName(hobbyOne, hobbyTwo, hobbyThree);
    // console.log(fullName, hobbies)

    const profile = {
        fullName,
        hobbies
    };
    return profile;
}

yourProfile();
console.log(chalk.bgBlueBright(JSON.stringify(yourProfile("Alessandra", "Sette", "Fotografia", "Viaggi", "Lettura"))));
