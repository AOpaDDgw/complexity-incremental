var dragging = false;

document.addEventListener("mousedown", (e) => {dragging = true});

document.addEventListener("mousemove", (e)=>{
    console.log(e.screenX);
    if (dragging) {
        document.body.style.backgroundPosition = `top ${e.screenY}px left ${e.screenX}px`;
    }
});

document.addEventListener("mouseup", (e) => {dragging = false});