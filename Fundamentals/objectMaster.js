const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

console.log("Find all pokémons that start with the letter 'b'");
const bListPkmn = pokémon.filter(p => p.name[0] === "B");
console.log(bListPkmn);

console.log("\nReturn an array of the pokémons id's");
const pkmnIds = pokémon.map(p => p.id);
console.log(pkmnIds);

console.log("\nFind all pokémons with the id is evenly divisible by 3");
const divBy3 = pokémon.filter(p => p.id % 3 === 0);
console.log(divBy3);

console.log("\nFind all the fire type pokémons");
const fireTypes = pokémon.filter (p => p.types[0] === "fire");
console.log(fireTypes);

console.log("\nFind all pokémons with more than 1 type");
const moreThan1 = pokémon.filter (p => p.types.length > 1);
console.log(moreThan1);

console.log("\nReturn an array of just the pokémon names");
const pkmnNames = pokémon.map(p => p.name);
console.log(pkmnNames);

console.log("\nFind the names of pokémons with an id > 99");
// have to filter 1st
const gr8rThan99 = pokémon.filter(p => p.id > 99).map(p => p.name);
console.log(gr8rThan99);

console.log("\nFind the names of all pokémons whose only type is poison");
const onlyPoison = pokémon.filter(p => p.types.length < 2).filter(p => p.types[0] ==="poison").map(p => p.name);
console.log(onlyPoison);

console.log("\nFind the first type of all pokémons whose 2nd type is flying");
const firstType = pokémon.filter(p => p.types.length > 1).filter(p => p.types[1] ==="flying").map(p => p.types[0]);
console.log(firstType);

console.log("\nFind a count of the number of pokémons of normal type");
const numNormal = pokémon.filter(p => p.types[0] === "normal").map(p => p.id);
console.log(numNormal.length);



