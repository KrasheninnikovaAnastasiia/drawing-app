import globals from './globals'

function setFilter(currentFilter) {
    switch (currentFilter) {
        case 'sepia':
            globals.ctx.filter = 'sepia(100%)';
            break;
        case 'blur':
            globals.ctx.filter = 'blur(4px)';
            break;
        case 'grayscale':
            globals.ctx.filter = 'grayscale(100%)';
            break;
        case 'invert':
            globals.ctx.filter = 'invert(75%)';
            break;
        case 'no filter':
            globals.ctx.filter = 'none';
            break;            
    }
}

export default setFilter;