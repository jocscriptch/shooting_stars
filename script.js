const container = document.getElementById('meteor-container');

function createMeteor() {
    const meteor = document.createElement('span');
    const size = Math.random() * 4 + 2; 
    meteor.style.width = `${size}px`;
    meteor.style.height = `${size}px`;

    // pos inicial aleatoria en la parte superior
    meteor.style.top = `${Math.random() * window.innerHeight / 2}px`;
    meteor.style.right = `${Math.random() * window.innerWidth}px`;

    // duracion de la animacion
    const duration = Math.random() * 2 + 1; // 1 y 3 segundos
    meteor.style.animation = `meteor-move ${duration}s linear infinite`;

    const trail = document.createElement('div');
    trail.style.position = 'absolute';
    trail.style.top = '50%';
    trail.style.left = '100%';
    trail.style.transform = 'translateY(-50%)';
    trail.style.width = '300px';
    trail.style.height = '1px';
    trail.style.background = 'linear-gradient(90deg, transparent, #ffffff, transparent)';
    trail.style.pointerEvents = 'none';
    meteor.appendChild(trail);

    container.appendChild(meteor);

    setTimeout(() => {
        meteor.remove();
    }, duration * 1000);
}

function createMeteors() {
    setInterval(createMeteor, 500); // Crear un meteoro cada 500ms
}

// animacion con CSS-in-JS para controlar los movimientos
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes meteor-move {
    0% {
        transform: rotate(315deg) translateX(0);
        opacity: 1;
    }
    70% {
        opacity: 1;
    }
    100% {
        transform: rotate(315deg) translateX(-1000px);
        opacity: 0;
    }
}
`;
document.head.appendChild(styleSheet);

createMeteors();
