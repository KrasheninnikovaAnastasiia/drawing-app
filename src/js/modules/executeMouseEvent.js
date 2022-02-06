import globals from './globals'
import drawCircle from './drawCircle';
import drawLine from './drawLine';

function executeMouseEvent(coordinates, type, size, currentColor) {
    let currentX = coordinates[0];
    let currentY = coordinates[1];

    if (type === 'circle') drawCircle(currentX, currentY, size, currentColor);
    if (type === 'line') {
        let previousX = globals.historyInterval[globals.historyInterval.length-2][0].coordinates[0];
        let previousY = globals.historyInterval[globals.historyInterval.length-2][0].coordinates[1];
        drawLine(previousX, previousY, currentX, currentY, size, currentColor);
    }
}

export default executeMouseEvent;