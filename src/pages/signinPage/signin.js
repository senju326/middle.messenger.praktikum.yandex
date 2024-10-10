import Handlebars from "handlebars";
import signin from './signinPage.hbs?raw';
import './signin.scss'
import button from '../../components/button';
import Input from "../../components/input/Input";

Handlebars.registerPartial('signinPage', signin);

export default (props = {}) => {
    return Handlebars.compile(signin)(props);
}