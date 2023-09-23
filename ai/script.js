document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector(".loader-container");

    setTimeout(function() {
        loader.style.animation = "fadeOut 1s";
        setTimeout(function() {
            window.location.href = "./weather-data/live-data.jpg";
        }, 1000);
    }, 5000);
});
