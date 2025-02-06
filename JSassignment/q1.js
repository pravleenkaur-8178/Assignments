document.getElementById('fetchBtn').addEventListener('click', fetchUsers);

function fetchUsers() {
    const userContainer = document.getElementById('userContainer');
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())  
        .then(users => {
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');  
                
                userDiv.innerHTML = `
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: <a href="https://${user.website}" target="_blank">${user.website}</a></p>
                `;
                
                userContainer.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            userContainer.innerHTML = '<p>There was an error fetching the data.</p>';
        });
}
