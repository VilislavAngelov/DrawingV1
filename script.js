document.addEventListener("mousemove", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 2) + "px"
    dot.style.top = (event.pageY - 2) + "px"
    document.body.appendChild(dot);
});