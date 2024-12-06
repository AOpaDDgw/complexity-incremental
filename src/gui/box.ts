class GuiBox {
    private container: HTMLElement;
    private position: Coordinate;
    private dragging: boolean = false;

    public constructor(position: Coordinate, size: Coordinate, borderColor: string = "#ffffff") {
        this.container = document.createElement("div");
        this.position = position;

        this.container.style.width = size.x + "px";
        this.container.style.height = size.y + "px";

        this.container.classList.add("box");
        this.container.classList.add("prevent-select");

        this.container.style.borderWidth = "3px"; // proportional to size
        this.container.style.textShadow = "0px 0px 5px " + borderColor; // proportional to size

        // make it draggable
        this.container.addEventListener("onclick", (e)=> {console.log("clicked");})
        this.container.addEventListener("mousedown", (e) => {this.dragging = true; console.log("down");});
        this.container.addEventListener("mousemove", (e)=>{GuiBox.makeDraggable(e, this)});
        this.container.addEventListener("mouseup", (e) => {this.dragging = false});

        document.body.appendChild(this.container);
    }

    public static makeDraggable(e: MouseEvent, box:GuiBox) {        
        if (box.dragging) {
            box.position.x = e.clientX + scrollx;
            box.position.y = e.clientY + scrolly;
        }
        console.log(box.position);
        e.stopPropagation()
    }
}