const login = async (username, password) => {
    try {
        const response = await fetch('http://localhost:4000/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
        }
        const data = await response.json();
        if (data.token) {
            console.log('Login berhasil, token:', data.token);
            localStorage.setItem('token', data.token);
            alert('Login berhasil');
            window.location.href = 'index.html'; 
        } else {
            console.log('Login gagal:', data.message);
            alert('Login gagal: '+ data.message);
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Terjadi kesalahan: ' + error.message);
    }
};
document.getElementById('loginButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password);
});
