const names = require("./names");
// console.log(names)

const hobbiesName = require("./hobbies");
// console.log(hobbies)

const yourProfile = (firstName, lastName, hobbyOne, hobbyTwo, hobbyThree) => {
    const fullName = names.fullName(firstName, lastName);
    const hobbies = hobbiesName.yourHobbies(hobbyOne, hobbyTwo, hobbyThree);
    // console.log(fullName, hobbies)

    const profile = {
        fullName,
        hobbies
    };
    return profile;
}

yourProfile();
console.log(yourProfile("Alessandra", "Sette", "Fotografia", "Viaggi", "Lettura"))
