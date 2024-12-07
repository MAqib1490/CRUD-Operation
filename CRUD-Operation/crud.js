// Reference to form and table body
const userForm = document.getElementById("userForm");
const userTable = document.getElementById("userTable");

// Array to store user data
let users = [];

// Function to render users in the table
function renderTable() {
  userTable.innerHTML = ""; // Clear existing content

  users.forEach((user, index) => {
    const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td class="actions">
                    <button class="edit" onclick="editUser(${index})">Edit</button>
                    <button class="delete" onclick="deleteUser(${index})">Delete</button>
                </td>
            </tr>
        `;
    userTable.innerHTML += row;
  });
}

// Add user
userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Add user to the list
  users.push({ name, email });

  // Reset form and render table
  userForm.reset();
  renderTable();
});

// Edit user
function editUser(index) {
  const user = users[index];
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;

  // Remove user from the list
  users.splice(index, 1);
  renderTable();
}

// Delete user
function deleteUser(index) {
  users.splice(index, 1);
  renderTable();
}

// Initial render
renderTable();
