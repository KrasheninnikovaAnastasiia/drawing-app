import globals from './globals'

function drawCircle(x, y, size, currentColor) {
    globals.ctx.beginPath();
    globals.ctx.arc(x, y, size, 0, Math.PI*2);
    globals.ctx.fillStyle = currentColor;
    globals.ctx.fill();
}

export default drawCircle;