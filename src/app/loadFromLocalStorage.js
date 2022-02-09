import globals from './globals'
import replayMouseEvents from './replayMouseEvents';

function loadFromLocalStorage() {
    let filter;
    globals.history = JSON.parse(window.localStorage.getItem('history'));
    filter = window.localStorage.getItem('filter');
    
    if (filter) {
        globals.ctx.filter = filter;
    }

    if (globals.history) {
        replayMouseEvents(globals.history);
    } else {
        globals.history = [];
    }
}

export default loadFromLocalStorage;