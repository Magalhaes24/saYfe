document.addEventListener("DOMContentLoaded", function() {
    const loadingBar = document.querySelector('.loading-bar');
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    loadingBar.addEventListener('animationend', function() {
        loadingScreen.classList.add('slide-up');
        content.classList.remove('hidden');
    });
});
