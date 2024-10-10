import Handlebars from "handlebars";
import login from './loginPage.hbs?raw';
import './loginPage.scss'
import button from '../../components/button';

Handlebars.registerPartial('loginPage', login);

export default (props = {}) => {
    return Handlebars.compile(login)(props);
}