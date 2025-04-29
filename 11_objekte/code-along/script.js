const friends = [
    {
        name: 'Antonia',
        wohnort: 'Zürich',
        alter: 27,
        hobbies: ['Tanzen', 'Fussball', 'Ausgang'],
        gemeinsame_freunde: ['Zoe']
    },
    {
        name: 'Lena',
        wohnort: 'Winterthur',
        alter: 28,
        hobbies: ['Fussball', 'Joggen', 'Ausgang'],
        gemeinsame_freunde: ['Celia', 'David', 'Alice'],
    },
    {
        name: 'David',
        wohnort: 'Zürich',
        alter: 31,
        hobbies: ['Fussball', 'Musik', 'Brunchen', 'Politik'],
        gemeinsame_freunde: ['Lena', 'Celia'],
    },
    {
        name: 'Celia',
        wohnort: 'St. Gallen',
        alter: 28,
        hobbies: ['Fussball', 'Ausgang', 'Brunchen'],
        gemeinsame_freunde: ['Lena', 'David'],
    },
    {
        name: 'Tobias',
        wohnort: 'Winterthur',
        alter: 30,
        hobbies: ['Arbeit', 'Brunchen'],
        gemeinsame_freunde: []
    },
    {
        name: 'Zoe',
        wohnort: 'Zürich',
        alter: 25,
        hobbies: ['Arbeit', 'Joggen'],
        gemeinsame_freunde: ['Alice', 'Antonia']
    },
    {
        name: 'Alice',
        wohnort: 'St. Gallen',
        alter: 26,
        hobbies: ['Musik', 'Joggen', 'Arbeit'],
        gemeinsame_freunde: ['Zoe']
    }
];


const friendsCt = document.querySelector('#friends');
const filters = document.querySelectorAll('#filter>button');

showFriends(friends);
// showFriends(u30_friends);

function showFriends(currentFriends) {
    friendsCt.innerHTML = '';
    currentFriends.forEach((friend) => {
        //console.log(friend.name);
        const item = document.createElement('p');
        item.innerText = friend.name;
        friendsCt.appendChild(item);
    });
}

document.getElementById("all").addEventListener("click", filter);
document.getElementById("u30").addEventListener("click", filter);
document.getElementById("soccer").addEventListener("click", filter);
document.getElementById("lena").addEventListener("click", filter);
document.getElementById("winti").addEventListener("click", filter);
document.getElementById("a").addEventListener("click", filter);

function filter(event) {

    console.log("es wurde auf diesen Button gedrückt", event.target.id);

    let filter = event.target.id;

    if (filter == "u30") {

        let u30_friends = friends.filter(friend => {
            return friend.alter < 30;
        });

        console.log(u30_friends);
        showFriends(u30_friends);
    }

    else if (filter == "soccer") {

        let soccer_friends = friends.filter(friend => {

            return friend.hobbies.includes("Fussball");

        });

        console.log(soccer_friends);
        showFriends(soccer_friends);
    }

    else if (filter == "all") {
        showFriends(friends);
    }

    else if (filter == "lena") {

        let lena_friends = friends.filter(friend => {

            return friend.gemeinsame_freunde.includes("Lena");

        });

        console.log(lena_friends);
        showFriends(lena_friends);
    }

    else if (filter == "winti") {

        let winti_friends = friends.filter(friend => {

            return friend.wohnort == "Winterthur";

        });

        console.log(winti_friends);
        showFriends(winti_friends);
    }

    else if (filter == "a") {

        let a_friends = friends.filter(friend => {

            return friend.name.charAt(0) == "A";

        });

        console.log(a_friends);
        showFriends(a_friends);
    }
};



