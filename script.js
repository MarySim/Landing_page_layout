const slides = [
    {
        img: "images/projects_1.jpg",
        city: "Rostov-on-Don<br>LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "Upon request"
    },
    {
        img: "images/projects_2.jpg", 
        city: "Sochi<br>Thieves",
        area: "105 m2",
        time: "4 months",
        cost: "Upon request"
    },
    {
        img: "images/projects_3.jpg", 
        city: "Rostov-on-Don<br>Patriotic",
        area: "92 m2",
        time: "3 months",
        cost: "Upon request"
    }
];

let activeIndex = 0;

const imgElement = document.getElementById("project-img");
const cityElement = document.getElementById("project-city");
const areaElement = document.getElementById("project-area");
const timeElement = document.getElementById("project-time");
const costElement = document.getElementById("project-cost");

const menuLinks = document.querySelectorAll(".projects__menu-item");
const dotsList = document.querySelectorAll(".projects__dot");

function updateSlider(index) {
    activeIndex = index;

    imgElement.src = slides[activeIndex].img;
    cityElement.innerHTML = slides[activeIndex].city;
    areaElement.innerHTML = slides[activeIndex].area;
    timeElement.innerHTML = slides[activeIndex].time;
    costElement.innerHTML = slides[activeIndex].cost;

    menuLinks.forEach((link, i) => {
        link.classList.toggle("projects__menu-item--active", i === activeIndex);
    });

    dotsList.forEach((dot, i) => {
        dot.classList.toggle("projects__dot--active", i === activeIndex);
    });
}

document.getElementById("next-btn").addEventListener("click", () => {
    let next = activeIndex + 1;
    if (next >= slides.length) next = 0;
    updateSlider(next);
});

document.getElementById("prev-btn").addEventListener("click", () => {
    let prev = activeIndex - 1;
    if (prev < 0) prev = slides.length - 1;
    updateSlider(prev);
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        updateSlider(parseInt(link.getAttribute("data-index")));
    });
});

dotsList.forEach((dot) => {
    dot.addEventListener("click", () => {
        updateSlider(parseInt(dot.getAttribute("data-index")));
    });
});