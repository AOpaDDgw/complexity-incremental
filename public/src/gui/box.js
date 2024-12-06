"use strict";
class GuiBox {
    constructor(position, size, borderColor = "#ffffff") {
        this.dragging = false;
        this.container = document.createElement("div");
        this.position = position;
        this.container.style.width = size.x + "px";
        this.container.style.height = size.y + "px";
        this.container.classList.add("box");
        this.container.classList.add("prevent-select");
        this.container.style.borderWidth = "3px"; // proportional to size
        this.container.style.textShadow = "0px 0px 5px " + borderColor; // proportional to size
        // make it draggable
        this.container.addEventListener("mousedown", (e) => { this.dragging = true; });
        this.container.addEventListener("mousemove", (e) => { GuiBox.makeDraggable(e, this); });
        this.container.addEventListener("mouseup", (e) => { this.dragging = false; });
        document.body.appendChild(this.container);
    }
    static makeDraggable(e, box) {
        if (dragging) {
            box.position.x = e.clientX + scrollx;
            box.position.y = e.clientY + scrolly;
            document.body.style.backgroundPosition = `top ${scrolly % 200}px left ${scrollx % 200}px`;
        }
        e.stopPropagation();
    }
}
