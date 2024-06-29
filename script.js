// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 50, // Adjust for header height
            behavior: 'smooth'
        });
    });
});


function hello(){
    alert("Your message has been delivered");
}
function hi(){
    alert("Sorry this feature is only available for premium users!!!");
}