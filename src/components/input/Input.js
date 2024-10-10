import Handlebars from 'handlebars';
import inp from './inp.hbs?raw';
import './inp.scss';

Handlebars.registerPartial('input', inp);

export default (type, id, name, label) => {
    return Handlebars.compile(inp)({type, id, name, label})
}