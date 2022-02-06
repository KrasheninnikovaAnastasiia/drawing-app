import globals from './globals'
import saveMouseEvent from './saveMouseEvent';
import executeMouseEvent from './executeMouseEvent';

function replayMouseEvents(eventsHistory) {
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);

    eventsHistory.forEach(interval => {
        globals.historyInterval = [];
        interval.forEach(event => {
            let x = event[0].coordinates[0];
            let y = event[0].coordinates[1];
            let type = event[0].eventType;
            let size = event[0].size;
            let currentColor = event[0].color;

            saveMouseEvent([x, y], type, size, currentColor);
            executeMouseEvent([x, y], type, size, currentColor);
        });
    });
}

export default replayMouseEvents;