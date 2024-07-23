document.addEventListener('DOMContentLoaded', () => {
    const teamList = document.getElementById('teamList');
    const addTeamButton = document.getElementById('addTeam');
    const teamNameInput = document.getElementById('teamName');

    addTeamButton.addEventListener('click', addTeam);

    function addTeam() {
        const teamName = teamNameInput.value.trim();
        if (teamName) {
            const li = document.createElement('li');
            li.textContent = teamName;

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => {
                const newTeamName = prompt('Enter new team name:', teamName);
                if (newTeamName) {
                    li.childNodes[0].nodeValue = newTeamName + ' ';
                }
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                teamList.removeChild(li);
            });

            li.appendChild(editButton);
            li.appendChild(deleteButton);
            teamList.appendChild(li);
            teamNameInput.value = '';
        }
    }
});
j