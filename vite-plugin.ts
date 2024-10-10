import Handlebars from "handlebars";
import { PluginOption } from "vite";

export default function handlebars(): PluginOption{
    const fileRegexp = /\.hbs$|\.handlebars$/;

    return {
        name: 'vite-plugin',
        transform(src, id){
            if (!fileRegexp.test(id)){
                return;
            }
            
            const code = `
                import Handlebars from 'hadlebars/runtime';
                export default Handlebars.template(${Handlebars.precompile(src)});
            `
            return {
                code
            }
        }
    }
}