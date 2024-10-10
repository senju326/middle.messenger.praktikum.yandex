import Handlebars from 'handlebars';
import loginTemplate from './pages/loginPage/loginPage.hbs';
import signinTemplate from './pages/signinPage/signinPage.hbs';

// Register partial
import Input from './components/input/Input.js';
import Button from './components/button/Button.js';

Handlebars. registerPartial('Input', Input);
Handlebars. registerPartial('Button', Button);

export default class App{
// загрузка страницы регистрации
    loadLoginPage = () => {
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
    loadSigninPage = () => {
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
//     path = window.location.pathname;
// if (path.includes('registration.html')) {
//     loadLoginPage();
// } else if (path.includes('login.html')) {
//     loadSigninPage();
// } else {
//     loadLoginPage(); // По умолчанию
// }
}