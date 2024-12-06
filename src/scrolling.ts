new GuiBox({x: 10, y: 10},{x: 100, y: 100})

var dragging = false;
var scrolly = 0;
var scrollx = 0;

document.addEventListener("mousedown", (e) => {dragging = true});

document.addEventListener("mousemove", (e)=>{
    if (dragging) {
        scrolly += e.movementY;
        scrollx += e.movementX;
        document.body.style.backgroundPosition = `top ${scrolly % 200}px left ${scrollx % 200}px`;
    }
});

document.addEventListener("mouseup", (e) => {dragging = false});