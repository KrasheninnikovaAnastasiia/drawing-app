import globals from './globals'
import removeFromLocalStorage from './removeFromLocalStorage';

function clearHistory() {
    globals.historyInterval = [];
    globals.history = [];
    globals.historyCounter = 0;
    
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    removeFromLocalStorage('history');
    removeFromLocalStorage('filter');
}

export default clearHistory;