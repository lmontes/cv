import {i18n} from './lang';

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}


export function dateTranslate(d) {    
    if(d === null){
        return i18n.global.t("date_current");
    }
    return capitalize(i18n.global.d(new Date(d), "short"));
}
