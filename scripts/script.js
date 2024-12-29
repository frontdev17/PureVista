window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const bubbles = Array.from({ length: 50 }, () => ({
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * canvas.height,
    radius: Math.random() * 10 + 5,
    speed: Math.random() * 3 + 1
}));

function drawBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    bubbles.forEach(bubble => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();
        bubble.y -= bubble.speed;
        if (bubble.y < -bubble.radius) {
            bubble.y = canvas.height + bubble.radius;
        }
    });
    requestAnimationFrame(drawBubbles);
}

drawBubbles();

document.addEventListener("click", (e) => {
    if (e.target.tagName === "A" || e.target.tagName === "BUTTON" || e.target.id === "learnMoreButton") {
        e.preventDefault();
        alert("This is just a demo project.");
    }
});
