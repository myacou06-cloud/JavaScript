// movies — двовимірний масив: кожен рядок — один фільм.
// Індекси всередині рядка: 
// [0] - назва, 
// [1] - картинка, 
// [2] - опис, 
// [3] - оцінка

const movies = [
	[
        'Пірати Карибського моря: Прокляття Чорної Перлини', 
        '1.jpg', 
        'Американський фантастичний пригодницький фільм 2003 року...',
         8.1
        ],
	['Пірати Карибського моря: Скриня мерця', '2.jpg', 'Американський пригодницький фільм 2006 року компанії...', 7.4],
	['Пірати Карибського моря: На краю світу', '3.jpg', 'Американський пригодницький фільм 2007 року...', 7.1],
	['Пірати Карибського моря: На дивних берегах', '4.jpg', 'Американська пригодницька стрічка 2011 року...', 6.6],
	['Пірати Карибського моря: Помста Салазара', '5.jpg', 'Американський пригодницький фільм-фентезі...', 6.5]
];

console.log(movies.length);
console.log(movies[0][0]);

for(let i = 0; i < movies.length; i++) {
    console.log(i, '-------------------------------');
    
    for(let c = 0; c < movies[i].length; c++){
        if (c !== 2) console.log(movies[i][c]);
    }
}
let notAnswerd = true;
let selectedStyel = 'dark';

while (notAnswerd) {
    console.log(notAnswerd);
    
    const userChois = prompt('світла - 1/ темна - 2');

    if (userChois === null) {
        break
    }

    switch (userChois.trim()) {
        case "1":
            selectedStyel = 'light';
             notAnswerd = false;
            break;
    
        case "2":
            selectedStyel = 'dark';
            notAnswerd = false;
            break;
        default:
            alert("Ви ввели не правильно");
    }
}

let sum = 0;
let index = 0;

while (index < movies.length) {
    sum += movies[index][3]
    index++;
}
const average = (sum / movies.length).toFixed(1)
console.log('Середній бал: ', average)


const bestMovies = []

for(let i = 0; i < movies.length; i++){
    if(movies[i][3] >= 7){
        bestMovies.push(movies[i])
    }
}
console.log(bestMovies)


let header = `
    <header class='${selectedStyel}'>
        <h1>Пірати карибського моря</h1>
        <ul class='moviesList'>    
`;

for(let i = 0; i < movies.length; i++){
    header +=`
    <li>
        <img src='${movies[i][1]}' />
        <br>
        <a href='#${i}' class='${selectedStyel}Link'>
            ${movies[i][0]}
        </a>
    </li>
    `
}

header += `</ul></header>`

let description = `
    <section>
		<h2>Опис фільмів</h2>
`
for(let i = 0; i < movies.length; i++){
    description +=`
        <h3>${movies[i][0]}</h3>
		<p class="rating">Оцінка: ${movies[i][3]}</p>
		<p class="description">${movies[i][2]}</p>
		`;

}

description += `<p class="stats">Середня оцінка ${average} 
<br>
Фільм з оцінкою від 7: ${bestMovies.join('; ')} 
</p>
</section>`

document.getElementById('movies').innerHTML = header + description