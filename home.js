const logoutBtn = document.getElementById('logout');

logoutBtn.onclick = () => {
    alert('You have successfully logged out.');
    window.location.href = 'index.html';
};
