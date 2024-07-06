
window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);
    document.getElementById('saveBtn').addEventListener('click', saveDrawing);
    document.getElementById('resetBtn').addEventListener('click', resetDrawing);

    function startDrawing(e) {
        drawing = true;
        draw(e); 
    }

    function stopDrawing() {
        drawing = false;
        ctx.beginPath(); 
    }

    function draw(e) {
        if (!drawing) return;

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000';

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function saveDrawing() {
        const link = document.createElement('a');
        link.download = 'drawing.png';
        link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        link.click();
    }

    function resetDrawing() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
};
