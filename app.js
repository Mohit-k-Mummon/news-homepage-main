// Menu Variables
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.querySelector('.overlay');

// Mobile Menu Logic
let menuActive = false;

menuBtn.addEventListener('click', () => {
	if (!menuActive) {
		mobileMenu.style.right = '0';
		overlay.style.opacity = '1';
		overlay.style.pointerEvents = 'visible';
		menuActive = true;
		// mobileMenu.style.display = 'block';
	}
});

closeBtn.addEventListener('click', () => {
	if (menuActive) {
		mobileMenu.style.right = '-24rem';
		overlay.style.opacity = '0';
		menuActive = false;
		overlay.style.pointerEvents = 'none';

		// mobileMenu.style.display = 'none';
	}
});

overlay.addEventListener('click', () => {
	mobileMenu.style.right = '-24rem';
	overlay.style.opacity = '0';
	menuActive = false;
	overlay.style.pointerEvents = 'none';
});
