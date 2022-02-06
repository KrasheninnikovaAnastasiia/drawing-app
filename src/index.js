import './css/style.css';
import './css/normalize.css';

import globals from './js/modules/globals'

import clearHistory from './js/modules/clearHistory';
import downloadImage from './js/modules/downloadImage';
import executeMouseEvent from './js/modules/executeMouseEvent';
import loadFromLocalStorage from './js/modules/loadFromLocalStorage';
import replayMouseEvents from './js/modules/replayMouseEvents';
import saveMouseEvent from './js/modules/saveMouseEvent';
import saveToLocalStorage from './js/modules/saveToLocalStorage';
import setFilter from './js/modules/setFilter';
import updateSizeOnScreen from './js/modules/updateSizeOnScreen';

loadFromLocalStorage();

globals.canvas.addEventListener('mousedown', (e) => {
    globals.historyInterval = [];
    globals.isPressed = true;

    if (globals.historyCounter > 0) {
        globals.history = globals.history.slice(0, globals.history.length-globals.historyCounter);
        globals.historyCounter = 0;
    }

    saveMouseEvent([e.offsetX, e.offsetY], 'circle', globals.size, globals.color);
    executeMouseEvent([e.offsetX, e.offsetY], 'circle', globals.size, globals.color);
});

globals.canvas.addEventListener('mouseup', (e) => {
    globals.isPressed = false;

    globals.history.push(globals.historyInterval);
    saveToLocalStorage("history", JSON.stringify(globals.history));
});

globals.canvas.addEventListener('mousemove', (e) => {
    if (globals.isPressed) {
        saveMouseEvent([e.offsetX, e.offsetY], 'line', globals.size, globals.color);
        executeMouseEvent([e.offsetX, e.offsetY], 'line', globals.size, globals.color);
    }
});

globals.increaseBtn.addEventListener('click', () => {
    globals.size += 5;
    if (globals.size > 50) {
        globals.size = 50;
    }

    updateSizeOnScreen();
});

globals.decreaseBtn.addEventListener('click', () => {
    globals.size -= 5;
    if (globals.size < 1) {
        globals.size = 1;
    }

    updateSizeOnScreen();
});

globals.colorEl.addEventListener('input', (e) => {
    globals.color = e.target.value
});

globals.clearEl.addEventListener('click', () => {
    clearHistory()
});

globals.downloadBtn.addEventListener('click', () => downloadImage());

let filters = ['blur', 'grayscale', 'invert', 'sepia', 'no filter'];
filters.forEach(filter => {
    let filterOption = document.createElement('a');
    let currentFilter = filter.toLowerCase();

    filterOption.innerText = filter;
    filterOption.style.textTransform = 'uppercase';
    globals.dropdownList.append(filterOption);
    
    filterOption.addEventListener('click', () => {
        setFilter(currentFilter);
        saveToLocalStorage("filter", globals.ctx.filter)
        replayMouseEvents(globals.history);
    });
});

globals.undoBtn.addEventListener('click', () => {
    if (globals.history.length >= globals.historyCounter + 1) {
        globals.historyCounter++;
        replayMouseEvents(globals.history.slice(0, globals.history.length-globals.historyCounter));
        saveToLocalStorage("history", JSON.stringify(globals.history.slice(0, globals.history.length-globals.historyCounter)));
    }
});

globals.redoBtn.addEventListener('click', () => {
    if (globals.history.length >= globals.historyCounter - 1) {
        if (globals.historyCounter > 0) globals.historyCounter--
        replayMouseEvents(globals.history.slice(0, globals.history.length-globals.historyCounter));
        saveToLocalStorage("history", JSON.stringify(globals.history.slice(0, globals.history.length-globals.historyCounter)));
    }
});