document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector(".loader-container");

    setTimeout(function() {
        loader.style.animation = "fadeOut 1s";
        setTimeout(function() {
            window.location.href = "./logo.jpg";
        }, 1000);
    }, 5000);
});
