const specialists = [
    { name: "Ava Moore", email: "ava@company.com", lastLogin: "September 20, 2019", ago: "2 days ago", status: "Busy", avatar: "./images/ava.jpg" },
    { name: "Beth Petterson", email: "beth@company.com", lastLogin: "September 22, 2019", ago: "5 hours ago", status: "Active", avatar: "./images/beth.jpg" },
    { name: "Davis Henderson", email: "david@company.com", lastLogin: "September 18, 2019", ago: "4 days ago", status: "Not active", avatar: "./images/davis.webp" },
    { name: "James Smith", email: "james@company.com", lastLogin: "September 20, 2019", ago: "2 days ago", status: "Not in office", avatar: "./images/james.jpg" },
    { name: "Rachel Jones", email: "rachel@company.com", lastLogin: "September 22, 2019", ago: "3 hours ago", status: "Busy", avatar: "./images/rachel.webp" },
];

const specTable = document.getElementById('specTable');

specialists.forEach(specialists => {
    const specDiv = document.createElement('div');
    specDiv.className = 'user';

    specDiv.innerHTML = `
        <div class="avatar">
            <img src="${specialists.avatar}" alt="${specialists.name}" class="icon">
            <div>
                <p class="name">${specialists.name}</p>
                <p class="email">${specialists.email}</p>
            </div>
        </div>
        <div class="last-login">
            <p class="date">${specialists.lastLogin}</p>
            <p class="ago">${specialists.ago}</p>
        </div>
        <div class="status">
            <p>${specialists.status}</p>
        </div>
    `;

    specTable.appendChild(specDiv);
});