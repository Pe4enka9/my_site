document.querySelectorAll('.input-container input, .input-container textarea').forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.length > 0) {
            input.classList.add('filled');
            input.classList.add('error');
        } else {
            input.classList.remove('filled');
        }
    });
});

const modal = document.getElementById('modal');
const form = document.querySelector('form');

document.getElementById('reg').addEventListener('click', () => {
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
    form.style.transform = 'scale(1)';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.opacity = '';
        modal.style.pointerEvents = ''
        form.style.transform = '';
    }
});