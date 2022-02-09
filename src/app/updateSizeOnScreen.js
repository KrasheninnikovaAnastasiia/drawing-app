import globals from './globals'

function updateSizeOnScreen() {
    const sizeEl = document.getElementById('size');
    
    sizeEl.innerText = globals.size;
}

export default updateSizeOnScreen;