document.addEventListener("DOMContentLoaded", function() {
    
    const loader = document.querySelector(".line-wobble");
    const h1 = document.querySelector("h1");

    
    setTimeout(function() {
        loader.style.display = "none"; 
        h1.style.opacity = 1; 
    }, 3000); 
});
