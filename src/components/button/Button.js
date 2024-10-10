import Handlebars from 'handlebars';
import btn from './btn.hbs?raw';
import './btn.scss';

Handlebars.registerPartial('button', btn);

export default (href, action, value) => {
    return Handlebars.compile(btn)({href, action, value})
}