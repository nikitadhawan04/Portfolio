document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
        if (link.hash) {
            e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


const words = [
    "Java Developer",
    "Frontend Developer",
    "Problem Solver",
    "Quick Learner",
    "Open to Work"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    current = words[i];

    if (!isDeleting) {
        typing.textContent = current.substring(0, j++);
    } else {
        typing.textContent = current.substring(0, j--);
    }

    if (!isDeleting && j === current.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;

        if (i === words.length) {
            i = 0;
        }

        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

}

if (typing) {
    typeEffect();
}
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
}
