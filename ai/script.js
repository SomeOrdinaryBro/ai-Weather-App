document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector(".loader-container");
    const h1 = document.querySelector("h1");

    setTimeout(function() {
        loader.style.display = "none";

        
        setTimeout(function() {
            h1.style.opacity = 1;
        }, 1000); 
    }, 5000); 
});
