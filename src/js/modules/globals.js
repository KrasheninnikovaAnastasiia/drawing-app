export default {
    canvas:       document.getElementById('canvas'),
    increaseBtn:  document.getElementById('increase'),
    decreaseBtn:  document.getElementById('decrease'),
    downloadBtn:  document.getElementById('download-btn'),
    undoBtn:      document.getElementById('undo'),
    redoBtn:      document.getElementById('redo'),
    dropdownList: document.querySelector('.dropdown-content'),
    colorEl:      document.getElementById('color'),
    clearEl:      document.getElementById('clear'),
    ctx:          document.getElementById('canvas').getContext('2d'),

    size:      10,
    isPressed: false,
    color:     'black',

    history:         [],
    historyInterval: [],
    historyCounter:  0,
}