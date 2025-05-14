function changeColor() {
    const colors = ["#f8bbd0", "#b2dfdb", "#ffe082", "#c5e1a5", "#d1c4e9", "#b3e5fc"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
