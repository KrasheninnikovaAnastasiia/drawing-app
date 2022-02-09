import globals from './globals'

function saveMouseEvent(coordinates, type, size, currentColor) {
    globals.historyInterval.push([{
        eventType: type,
        color: currentColor,
        size: size,
        coordinates: [coordinates[0], coordinates[1]]
    }]);
}

export default saveMouseEvent;