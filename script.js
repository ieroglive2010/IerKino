document.addEventListener('DOMContentLoaded', () => {
    const trailerPlayer = document.getElementById('trailer-player');
    
    document.querySelectorAll('.trailer-btn').forEach(button => {
        button.addEventListener('click', () => {
            const movie = button.parentElement;
            const trailerSrc = movie.getAttribute('data-trailer');
            trailerPlayer.src = trailerSrc;

            // Показываем и воспроизводим трейлер
            trailerPlayer.style.display = 'block';
            trailerPlayer.play();
        });
    });

    // Скрыть трейлер, когда он завершится
    trailerPlayer.addEventListener('ended', () => {
        trailerPlayer.style.display = 'none';
        trailerPlayer.src = ''; // Очищаем источник
    });
});
