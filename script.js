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
    "Web Developer",
    "Problem Solver"
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