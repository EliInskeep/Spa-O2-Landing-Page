const hero = document.getElementById('hero')
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// const tl = new TimelineMax();

// tl.fromTo(hero,3, {height: "0%"}, {height: "80%"});

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
