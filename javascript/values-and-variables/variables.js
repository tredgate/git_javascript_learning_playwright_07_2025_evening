let firstName = "Jirka"; // ? Deklarace proměnné: let firstName; inicializace = přiřazení hodnoty
let lastName; // ? Pouze deklarace proměnné (nyní má hodnotu undefined)
lastName = "Procházka"; // ? inicializace proměnná v samostatném příkazu
// "Jirka" = let firstName; // ! Nemůžu toto udělat, vyhodí chybu

console.log(firstName);
console.log(lastName);
console.log(firstName + " " + lastName); // ? Sloučení jména a příjmení pomocí + operátoru. Pro přidání mezery musím mezeru fyzicky přidat.

firstName = "Alžběta";
console.log(firstName);

// * Proměnná var
var city = "Praha";

{
  var x = "text"; // ? Promměnná var se definuje pro modul (soubor), je možné ji použít i mimo
}
console.log(x);

var jmeno = "Emma"; // ? Redeklarace proměnné
var jmeno = "Lenka"; // ? var je možné tzv. redeklarovat

// * Proměnná let
{
  let y = "jiný text"; // ? Proměnná let se určuje pro blok
}
// console.log(y); // ! Nelze, vyhodí chybu při spuštění

let country = "Czechia";
// let country = "Germany"; // ! Redeklarace není možná

// * Proměnná const
const username = "petrfifka";
// username = "matoseko"; // ! Nemůžu, způsobí chybu při spuštění
// const password; // ! Nelze, musím vždy inicializovat při deklaraci

/*
Více
řádková
poznámka
*/
