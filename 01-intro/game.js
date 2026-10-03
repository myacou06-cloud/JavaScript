alert("Вітаємо у грі 'Таємниці коду'");
console.warn("Початок збору даних гравця");

const isHardcore = confirm("Увімкнути режим 'Хардкор' (1 життя)?");
let heroName = prompt("Введіть ім'я героя");
let level = 1;
let health = 100;
const maxInventorySize = 50;
let currentWearon = null;
let magicSkill;

console.log(typeof(heroName));
console.log(typeof(level));
console.log(typeof(isHardcore));
console.log(typeof(currentWearon));
console.log(typeof(magicSkill));

level = level++

let title = "Шукач пригод: "
const fullHeroName = title + heroName