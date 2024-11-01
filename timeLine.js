// JavaScript code for the timeline
document.addEventListener("DOMContentLoaded", function () {
    const timelineContainer = document.getElementById("timeline-container");

    // Array of timeline events
    const timelineEvents = [
        { date: "2018 - Present", description: "Graduate Student at University of California, Riverside (UCR)" },
        { date: "Summer 2022", description: "Graduate Research Mentor Fellow at UCR" },
        { date: "Winter 2021", description: "Science 2 Policy Certificate" },
        { date: "September 2018", description: "Arrived at UCR" },
        { date: "June 2018", description: "Graduated from Rutgers with a BS in Astrophysics and Minors in Computer Science and Mathematics" },
        { date: "Summer 2017", description: "Research Experience for Undergraduate" },
        { date: "2015 - 2018", description: "Research assistant for Eric Gawiser at Rutgers University" },
    ];

    // Function to generate timeline items
    timelineEvents.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("timeline-event");

        const dateElement = document.createElement("p");
        dateElement.classList.add("timeline-date");
        dateElement.innerText = event.date;

        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("timeline-description");
        descriptionElement.innerText = event.description;

        eventDiv.appendChild(dateElement);
        eventDiv.appendChild(descriptionElement);

        timelineContainer.appendChild(eventDiv);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});



// Image paths
const images = [
    'AWS_2.png',
    'AWS_3.png',
    'AWS_6.png',
    'AWS_7.png'
];

let currentIndex = 0;

// DOM elements
const currentImage = document.getElementById("currentImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update the image
function updateImage(index) {
    currentImage.src = images[index];
}

// Event listeners for buttons
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage(currentIndex);
});

// Initial image display
updateImage(currentIndex);