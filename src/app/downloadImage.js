import globals from './globals'

function downloadImage() {
    const downloadLink = document.getElementById('download');
    
    let myImage = globals.canvas.toDataURL("image/png")
                                .replace("image/png", "application/octet-stream");
    downloadLink.setAttribute("href", myImage);
}

export default downloadImage;