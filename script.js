document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.start-button');
    
    if (startButton) {
        startButton.addEventListener('click', () => {
            startButton.classList.add('zoom-out');
            
            // Wait for animation to complete before redirecting
            setTimeout(() => {
                window.location.href = 'page2.html';
            }, 1000); // Match this with the animation duration
        });
    }
});
