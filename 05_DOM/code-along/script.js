// -> constants
const lebenserwartung_m = 81.0; // in jahren
const lebenserwartung_w = 85.1; // in jahren
const lebenserwartung_d = 83.05; // in jahren
const schokolade_pro_jahr = 11; // in kg

console.log("Lebenserwartung_d ", lebenserwartung_d);

// --> prompts
let user_name = prompt('Bitte gib deinen Namen ein:');
let geschlecht = prompt("Bitte gib dein Geschlecht ein (m/w/d):");
let alter = prompt("Bitte gib dein Alter ein:");

const container = document.querySelector("#container");

const name_item = document.createElement('p');
name_item.innerText = 'Name: ' + user_name;
container.appendChild(name_item);

const alter_item = document.createElement('p');
alter_item.innerText = `Alter: ${alter}`;
alter_item.style.color = 'red';
container.appendChild(alter_item);



let years_to_live;

if (geschlecht == 'm') {
     years_to_live = lebenserwartung_m - alter;

} else if (geschlecht == 'w') {
     years_to_live = lebenserwartung_w - alter;

} else if (geschlecht == 'd') {
     years_to_live = lebenserwartung_d - alter;
}


console.log(years_to_live);

geschlecht_item = document.createElement('p');
geschlecht_item.innerText = `Du hast noch ${Math.round(years_to_live)} Jahre zu leben`;
container.appendChild(geschlecht_item);

