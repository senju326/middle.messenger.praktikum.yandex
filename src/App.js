import Handlebars from 'handlebars';
//import * as Pages from './pages';
import loginTemplate from './pages/loginPage.hbs';
import signinTemplate from './pages/signinPage.hbs';

// Register partial
import Input from './components/Input.js';
import Button from './components/Button.js';

Handlebars. registerPartial('Input', Input);
Handlebars. registerPartial('Button', Button);

// загрузка страницы регистрации
const loadLoginPage = () => {
    document.getElementById('app').innerHTML = `${loginTemplate()}`;

    // Обработка формы регистрации
    document.getElementById('loginForm')?.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log('Данные регистрации:', data);
    });
};

// Загрузка страницы авторизации
const loadSigninPage = () => {
    document.getElementById('app').innerHTML = `${signinTemplate()}`;

    // Обработка формы авторизации
    document.getElementById('signinForm')?.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log('Данные авторизации:', data);
    });
};

// Определение текущей страницы
const path = window.location.pathname;
if (path.includes('registration.html')) {
    loadLoginPage();
} else if (path.includes('login.html')) {
    loadSigninPage();
} else {
    loadLoginPage(); // По умолчанию
}
