const nameCt = document.querySelector('#name');
const skillsCt = document.querySelector('#skills');
const addInput = document.querySelector('#add');
const skillsFallback = 'ganz schön viel'


// ******* Das hier ist für den Namen *******
let storedName = localStorage.getItem("stored_name");
console.log(storedName);

if (storedName && storedName !== "null") {

    nameCt.innerText = storedName;

}

else {
    let user_name = prompt("Wie heisst du?");
    console.log(user_name);

    nameCt.innerText = user_name;

    //hier schreiben wir in den localstorege hinein
    localStorage.setItem("stored_name", user_name);

}

// ******* Das hier ist für die Skills *******

let skillsArray = JSON.parse(localStorage.getItem('skills')) || [];

function displaySkills() {
    skillsCt.innerHTML = '';
    skillsArray.forEach(skill => {
            const skillSpan = document.createElement('span');
            skillSpan.innerText = skill;
            skillsCt.appendChild(skillSpan);
        });
}

addInput.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
    const newSkill = addInput.value.trim();
    if (newSkill !== '') {
        skillsArray.push(newSkill);
        localStorage.setItem('skills', JSON.stringify(skillsArray));
        displaySkills();
        addInput.value = '';
    }
    }
});

displaySkills();