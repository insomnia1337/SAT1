const workers = [
    {
        name: "Artur",
        surname: "Kowalski",
        age: 21,
        abilities: "Programming",
        lazy: true
    },
    {
        name: "Mateusz",
        surname: "Nowak",
        age: 27,
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
        abilities: "Teamwork",
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
        age: 23,
        abilities: "Time Management",
        lazy: true
    },
    {
        name: "Daniel",
        surname: "Surdziel",
        age: 21,
        abilities: "Adaptability",
        lazy: false
    },
    {
        name: "Daria",
        surname: "Kowalski",
        age: 19,
        abilities: "Creativity",
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
    infoText.innerHTML = null;
    workersGenerated = generateWorkers(workers)
    tbody.innerHTML = generateTable(workersGenerated);
})

const generateRandom = (workers, key) => {
    return workers[Math.floor(Math.random() * 7 + 1)][key];
}


const filterPersons = ({ age, abilities: ability, lazy }) => {
    debugger;
    return (age > 21 && age < 29) && ability === 'Programming' && !lazy;
}


function showResults(array) {
    const found = array.find(filterPersons);
    if (found) {
        infoText.innerHTML = `Najlepszy pracownik na nasze stanowisko to ${found.name} ${found.surname}.`
    } else {
        infoText.innerHTML = `Brak osób spełniających kryteria!`;
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