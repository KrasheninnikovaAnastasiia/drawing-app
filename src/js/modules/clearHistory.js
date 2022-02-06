import globals from './globals'
import removeFromLocalStorage from './removeFromLocalStorage';

function clearHistory() {
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    removeFromLocalStorage('history');
    removeFromLocalStorage('filter');
}

export default clearHistory;