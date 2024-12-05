var dragging = false;

document.addEventListener("mousedown", (e) => {dragging = true});

document.addEventListener("mousemove", (e)=>{
    if (dragging) {
        document.body.style.backgroundPosition = `top ${e.y}px left ${e.x}px`;
    }
});

document.addEventListener("mouseup", (e) => {dragging = false});