let userData = {
    years: 0,
    attempts: 0,
    selectedSkills: []
};

function transitionToStep2() {
    userData.years = document.getElementById('years').value;
    userData.attempts = document.getElementById('attempts').value;
    
    if(!userData.years || !userData.attempts) return alert("Please input the facts.");

    document.getElementById('step-1').classList.remove('active');
    document.getElementById('step-2').classList.add('active');
}

function toggleSkill(el) {
    el.classList.toggle('selected');
    const skill = el.innerText;
    if(userData.selectedSkills.includes(skill)) {
        userData.selectedSkills = userData.selectedSkills.filter(s => s !== skill);
    } else {
        userData.selectedSkills.push(skill);
    }
}

function performUnbind() {
    // Populate the Path Card
    document.getElementById('path-summary').innerText = 
        `${userData.years} Years | ${userData.attempts} Attempts`;

    // Populate the Person Card
    const skillList = document.getElementById('skill-summary');
    skillList.innerHTML = userData.selectedSkills
        .map(s => `<li>${s}</li>`)
        .join('');

    document.getElementById('step-2').classList.remove('active');
    document.getElementById('step-3').classList.add('active');
}

function route(path) {
    if(path === 'permission') {
        console.log("Routing to Archive B: Resonance Algorithm active.");
        window.location.href = "reality_matcher_story_feed.html";
    } else {
        console.log("Routing to Archive A: Momentum Algorithm active.");
        window.location.href = "reality_matcher_story_feed.html"; // Defaulting to feed for now
    }
}