
// alert("test");


// Add Security functions ==============================================================
// Disable right click on web
var el_up = document.getElementById("GFG_UP");
var el_down = document.getElementById("GFG_DOWN");

function gfg_Run() {
    document.addEventListener('contextmenu',
        event => event.preventDefault()
    );
} 



//Prevent Ctrl+S (and Ctrl+W for old browsers and Edge)
document.onkeydown = function (e) {
    e = e || window.event;   //Get event

    if (!e.ctrlKey) return;

    var code = e.which || e.keyCode;//Get key code

    switch (code) {
        case 83:   //Block Ctrl+S
        case 85:   //Block Ctrl+U
            e.preventDefault();
            e.stopPropagation();
            break;
    }
};