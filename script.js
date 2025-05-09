document.addEventListener('DOMContentLoaded', function() {
    const profilePhoto = document.getElementById('profilePhoto');
    
    profilePhoto.addEventListener('click', function() {
        this.style.borderColor = getRandomColor();
    });

    function getRandomColor() {
        const colors = ['#bb86fc', '#03dac6', '#cf6679', '#3700b3'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
