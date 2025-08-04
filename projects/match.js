let lastTeam = localStorage.getItem('lastTeam') || "";
// team
const teamLogos = {
    'MI': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png',
    'RCB': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfpDPZ5AwBAPHlCvq7CrA4guqST4CaBAOYw&s',
    'CSK': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png',
    'KKR': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png'
};
// select team
function selectTeam(team) {
    const matchDisplay = document.getElementById("match-display");
    const teamLogo = document.getElementById("team-logo");

    if (lastTeam !== team) {
        const opponent = getRandomOpponent(team);
        matchDisplay.textContent = `${team} vs ${opponent}`;
        lastTeam = team;

        teamLogo.style.transform = "scale(0)";
        setTimeout(() => {
            teamLogo.src = teamLogos[team];
            teamLogo.alt = `${team} Logo`;
            teamLogo.style.transform = "scale(1)";
        }, 300);

        localStorage.setItem('lastTeam', team);
    } else {
        matchDisplay.textContent = "Please select a different team";
    }
}
// get js
function getRandomOpponent(team) {
    const teams = Object.keys(teamLogos).filter(t => t !== team);
    return teams[Math.floor(Math.random() * teams.length)];
}

// Set initial state based on last selection
if (lastTeam) {
    selectTeam(lastTeam);
}