//Menu Animation Function
const menu = document.querySelector('#mobile-menu')
const menuLink = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
});

// Student and Admin Tab in Login and Sign Up page
function switchRole(role) {
document.getElementById('tab-student').classList.toggle('active', role === 'student');
document.getElementById('tab-admin').classList.toggle('active', role === 'admin');
document.getElementById('tab-student').setAttribute('aria-selected', role === 'student');
document.getElementById('tab-admin').setAttribute('aria-selected', role === 'admin');

document.getElementById('panel-student').classList.toggle('active', role === 'student');
document.getElementById('panel-admin').classList.toggle('active', role === 'admin');
}

//Password match
function handleSignup(event, role) {
event.preventDefault();
// Replace this with your actual registration logic / API call
const passwordId = role === 'student' ? 'student-password' : 'admin-password';
const confirmId = role === 'student' ? 'student-confirm' : 'admin-confirm';
const password = document.getElementById(passwordId).value;
const confirm = document.getElementById(confirmId).value;

if (password !== confirm) {
    alert('Passwords do not match. Please try again.');
    return;
}

alert('Creating ' + role.charAt(0).toUpperCase() + role.slice(1) + ' account...');
}