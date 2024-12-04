var dragging = false;

document.addEventListener("dragstart", () => {dragging = true});

document.addEventListener("mousemove", ()=>{
    if (dragging) {
        document.body.style.background-position = `top ${}px left ${}px`;
    }
});

document.addEventListener("dragend", () => {dragging = false});