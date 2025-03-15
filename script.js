//for loading screen
window.onload = () => {
    document.body.style.opacity = "1";
};

//for student modal
function openModal(imageSrc, name, birthdate, hobbies, motto) {
    document.getElementById("overlay").style.display = "block";
    const modal = document.getElementById("student-modal");
    const modalPhoto = document.getElementById("modal-photo");
    const modalName = document.getElementById("modal-name");
    const modalBirthdate = document.getElementById("modal-birthdate-value");
    const modalHobbies = document.getElementById("modal-hobbies-value");
    const modalMotto = document.getElementById("modal-motto-value");

    modalPhoto.src = imageSrc;
    modalName.textContent = name;
    modalBirthdate.textContent = birthdate;
    modalHobbies.textContent = hobbies;
    modalMotto.textContent = motto;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("student-modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


//for class pictures only
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("classPicture").addEventListener("click", openClassPictureModal);
});

const images = [
    "class-images/clp1.png", "class-images/clp2.png","class-images/clp3.png","class-images/clp4.png","class-images/clp5.png","class-images/clp6.png",
    "class-images/clp7.png","class-images/clp8.png","class-images/clp9.png","class-images/clp10.png","class-images/clp11.png","class-images/clp12.png",
    "class-images/clp13.png","class-images/clp14.png","class-images/clp15.png", "class-images/clp16.png","class-images/clp17.png",
    "class-images/flolau4.jpg", "class-images/flolau8", "class-images/flolau12.jpg"
];
let currentIndex = 0;

function openClassPictureModal() {
    document.getElementById("classPicture-modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    updateCarousel();
}

function closeClassPictureModal() {
    document.getElementById("classPicture-modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

function updateCarousel() {
    document.getElementById("carousel-image").src = images[currentIndex];
}

//for events only
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("eventsPicture").addEventListener("click", openEventsPictureModal);
});

const eventImages = [
    "class-images/clp9.png", "class-images/clp11.png", "class-images/clp12.png", 
    "class-images/clp13.png", "class-images/clp15.png", "class-images/flolau1.jpg",
    "class-images/flolau2.jpg", "class-images/flolau3.jpg", "class-images/flolau5.jpg",
    "class-images/flolau6.jpg", "class-images/flolau7.jpg", "class-images/flolau9.jpg",
    "class-images/flolau10.jpg", "class-images/flolau11.jpg", "class-images/flolau12.jpg",
];
let eventIndex = 0;

function openEventsPictureModal() {
    document.getElementById("eventsPicture-modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    updateEventsCarousel();
}

function closeEventsPictureModal() {
    document.getElementById("eventsPicture-modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function nextEventImage() {
    eventIndex = (eventIndex + 1) % eventImages.length;
    updateEventsCarousel();
}

function prevEventImage() {
    eventIndex = (eventIndex - 1 + eventImages.length) % eventImages.length;
    updateEventsCarousel();
}

function updateEventsCarousel() {
    document.getElementById("events-carousel-image").src = eventImages[eventIndex];
}

//for achievements only
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("achievementsPicture").addEventListener("click", openAchievementsPictureModal);
});

const achievementImages = [
    "class-images/ach1.jpg",
    "class-images/ach2.jpg",
    "class-images/ach3.jpg",
    "class-images/ach4.jpg",
    "class-images/ach5.jpg",
    "class-images/ach6.jpg",
];
let achievementIndex = 0;

function openAchievementsPictureModal() {
    document.getElementById("achievementsPicture-modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    updateAchievementsCarousel();
}

function closeAchievementsPictureModal() {
    document.getElementById("achievementsPicture-modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function nextAchievementImage() {
    achievementIndex = (achievementIndex + 1) % achievementImages.length;
    updateAchievementsCarousel();
}

function prevAchievementImage() {
    achievementIndex = (achievementIndex - 1 + achievementImages.length) % achievementImages.length;
    updateAchievementsCarousel();
}

function updateAchievementsCarousel() {
    document.getElementById("achievements-carousel-image").src = achievementImages[achievementIndex];
}


//for section scrolling evect
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".reveal");
    
    function revealOnScroll() {
        elements.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
});

