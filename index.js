const workers = [
    {
        name: "James",
        surname: "Kowalski",
        age: 20,
        abilities: "Programming",
        lazy: true
    },
    {
        name: "Mateusz",
        surname: "Nowak",
        age: 34,
        abilities: "Programming",
        lazy: false
    },
    {
        name: "Kasia",
        surname: "Cuch",
        age: 56,
        abilities: "Drawing",
        lazy: true
    },
    {
        name: "Bartłomiej",
        surname: "Nil",
        age: 33,
        abilities: "Languages",
        lazy: true
    },
    {
        name: "Michał",
        surname: "Chamera",
        age: 24,
        abilities: "Mathematics",
        lazy: false
    },
    {
        name: "Justyna",
        surname: "Wójcik",
        age: 45,
        abilities: "Mathematics",
        lazy: true
    },
    {
        name: "Daniel",
        surname: "Babraj",
        age: 21,
        abilities: "Mathematics",
        lazy: false
    },
    {
        name: "Daria",
        surname: "Kowalski",
        age: 19,
        abilities: "Mathematics",
        lazy: true
    },

];

const infoText = document.getElementById('info');
const startBtn = document.getElementById('start')
const generateBtn = document.getElementById('generate');

startBtn.addEventListener('click', () => {
    showResults(workersGenerated);
})

generateBtn.addEventListener('click', () => {
    debugger;
    const tbody = document.getElementById('tbody');
    workersGenerated = generateWorkers(workers)
    tbody.innerHTML = generateTable(workersGenerated);
})

const generateRandom = (workers, key) => {
    return workers[Math.floor(Math.random() * 7 + 1)][key];
}


const filterPersons = ({ age, abilities: ability, lazy }) => {
    debugger;
    return age > 22 && ability === 'Programming' && !lazy;
}


function showResults(array) {
    const found = array.find(filterPersons);
    if (found) {
        infoText.innerHTML = `Najlepszy pracownik na nasze stanowisko to ${found.name} ${found.surname}`
    } else {
        infoText.innerHTML = `Brak osób spełniających kryteria`;
    }
}

let workersGenerated = generateWorkers(workers) // ze starej tablicy statycznej "workers"



function generateWorkers(workers) { // zapisujemy array do obiektu randomowy
    debugger;
    const name = "name",
        surname = "surname",
        age = "age",
        abilities = "abilities",
        lazy = "lazy";
    const newArray = [];

    for (i = 0; i < workers.length; i++) {
        const workersProperties = {
            name: generateRandom(workers, name),
            surname: generateRandom(workers, surname),
            age: generateRandom(workers, age),
            abilities: generateRandom(workers, abilities),
            lazy: generateRandom(workers, lazy)
        }
        newArray.push(workersProperties)
    }
    return newArray
};

function generateTable(newArray) {
    return newArray.map((el, index) =>
        `<tr>
                            <th scope="row">${index}</th>
                            <td>${el.name}</td>
                            <td>${el.surname}</td>
                            <td>${el.age}</td>
                            <td>${el.abilities}</td>
                            <td>${el.lazy}</td>
                        </tr>`).join('');
}