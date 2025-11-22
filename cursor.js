const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
body {
    margin: 0;
    background: #242424;
    font-family: monospace;
    display: flex;
    justify-content: center;
    padding: 40px 0;
}

/* GRID */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    width: 90%;
    max-width: 1200px;
}

/* Cada ítem es clickeable */
.grid-item {
    text-align: center;
    text-decoration: none;
    color: white;
}

/* Imagen estilo monitor */
.grid-item img {
    width: 100%;
    border: 3px solid white;
    display: block;
}

/* Texto debajo */
.grid-item p {
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 2px;
}
