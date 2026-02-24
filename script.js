const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUsers() {

    userContainer.innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(users => {
            userContainer.innerHTML = "";

            users.forEach(user => {
                const userCard = document.createElement("div");
                userCard.classList.add("userCard");

                userCard.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                `;

                userContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            userContainer.innerHTML = "Error fetching data. Please check your internet connection.";
            console.error("Fetch error:", error);
        });
}

// Fetch data when page loads
fetchUsers();

// Reload button event
reloadBtn.addEventListener("click", fetchUsers);