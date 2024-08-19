const users = [
    { name: "Ava Moore", email: "ava@company.com", lastLogin: "September 20, 2019", ago: "2 days ago", department: "Accounting", status: "Active", avatar: "./images/ava.jpg" },
    { name: "Beth Petterson", email: "beth@company.com", lastLogin: "September 22, 2019", ago: "5 hours ago", department: "Development", status: "Active", avatar: "./images/beth.jpg" },
    { name: "Davis Henderson", email: "david@company.com", lastLogin: "September 18, 2019", ago: "4 days ago", department: "Development", status: "Active", avatar: "./images/davis.webp" },
    { name: "James Smith", email: "james@company.com", lastLogin: "September 20, 2019", ago: "2 days ago", department: "Human Resources", status: "Active", avatar: "./images/james.jpg" },
    { name: "Rachel Jones", email: "rachel@company.com", lastLogin: "September 22, 2019", ago: "3 hours ago", department: "Sales", status: "Active", avatar: "./images/rachel.webp" },
];

const usersTable = document.getElementById('usersTable');

users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.className = 'user';

    userDiv.innerHTML = `
        <div class="avatar">
            <img src="${user.avatar}" alt="${user.name}" class="icon">
            <div>
                <p class="name">${user.name}</p>
                <p class="email">${user.email}</p>
            </div>
        </div>
        <div class="last-login">
            <p class="date">${user.lastLogin}</p>
            <p class="ago">${user.ago}</p>
        </div>
        <div class="department">
            <p>${user.department}</p>
        </div>
        <div class="status">
            <p>${user.status}</p>
        </div>
    `;

    usersTable.appendChild(userDiv);
});
