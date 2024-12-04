var dragging = false;

document.addEventListener("dragstart", (e) => {dragging = true});

document.addEventListener("mousemove", (e)=>{
    if (dragging) {
        document.body.style.backgroundPosition = `top ${e.clientY}px left ${e.clientX}px`;
    }
});

document.addEventListener("dragend", (e) => {dragging = false});