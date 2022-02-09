import globals from './globals'
import drawCircle from './drawCircle';

function drawLine(x, y, x2, y2, size, currentColor) {    
    drawCircle(x2, y2, size, currentColor);

    globals.ctx.beginPath();
    globals.ctx.moveTo(x, y);
    globals.ctx.lineTo(x2, y2);
    globals.ctx.strokeStyle = currentColor;
    globals.ctx.lineWidth = size * 2;
    globals.ctx.stroke();
}

export default drawLine;
