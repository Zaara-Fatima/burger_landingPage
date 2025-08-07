// Add JavaScript code here
// Add your JavaScript here
// Write your JavaScript co
const menuButton = document.getElementById("menuButton");
const menuBar = document.getElementById("menuBar");
const load = document.getElementById("loadMore");

load.onclick = () => {
    for (let count = 4; count < 10; count += 1) {
        const review = document.querySelector(`[data-index="${count}"]`);
        review.classList.toggle("hidden");
    }

}



function createMenuBarCloseButton() {
    menuButton.classList.toggle("menuBarClose");
    console.log(menuBar);
    menuBar.classList.toggle("hidden");
}
menuButton.onclick = () => {
    createMenuBarCloseButton();
}

const icon = document.getElementById("animatedIcon");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === "animatedIcon") {
                entry.target.classList.add("delievery");
            } else {
                entry.target.classList.add("review");
            }
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe the icon
if (icon) observer.observe(icon);

// Observe all review cards
for (let count = 1; count < 10; count++) {
    const review = document.querySelector(`[data-index="${count}"]`);
    if (review) observer.observe(review);
}


/* 


*/

