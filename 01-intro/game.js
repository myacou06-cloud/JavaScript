alert("Вітаємо у грі 'Таємниці коду'");
console.warn("Початок збору даних гравця");

const isHardcore = confirm("Увімкнути режим 'Хардкор' (1 життя)?");
let heroName = prompt("Введіть ім'я героя");
let level = 1;
let health = 100;
const maxInventorySize = 50;
let currentWearon = null;
let magicSkill;
let title = "Шукач пригод: "
const fullHeroName = title + heroName
let heroAge = prompt("Hero age")
let isAdult = health >= 18;

level++
health = health - 15

console.log(typeof(heroName));
console.log(typeof(level));
console.log(typeof(isHardcore));
console.log(typeof(currentWearon));
console.log(typeof(magicSkill));



if (isHardcore) {
    console.log(heroName);
} else if(!isAdult) {
    health = 200;
} else {
    health = 100;
}
console.log(health)


//work 8
let htmlCard = `
  <div class="card">
    <h2>🗡️ ${fullHeroName}</h2>
    <p>Статус: ${isHardcore ? "Хардкор" : "Стандарт"}</p>
    <ul>
      <li>Рівень: ${level}</li>
      <li>Здоров'я: ${health} HP</li>
    </ul>
  </div>
`;

document.getElementById("app").innerHTML = htmlCard;