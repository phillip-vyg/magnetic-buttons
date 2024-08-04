import gsap from 'gsap';

class MagneticButtons {
	constructor() {
		this.btns = document.querySelectorAll('.btn:not(.btn--no-magnet):not([data-magnetic-init])');

		if (!this.btns.length || window.innerWidth < 1024) return;

		Array.from(this.btns).forEach((btn) => {
			btn.dataset.magneticInit = true;
			this.initBtn(btn);
		});
	}

	initBtn(btn) {
		// the strength of the magnetism
		const magnetism = parseInt(btn.dataset.magnetism, 10) || 30;

		const perimeter = document.createElement('div');
		perimeter.classList.add('btn__perimeter');
		btn.appendChild(perimeter);

		btn.addEventListener('mousemove', (e) => {
			// The button coords
			const bounding = btn.getBoundingClientRect();

			// Move the button based on the mouse position
			gsap.to(btn, {
				x: ((e.clientX - bounding.left) / btn.offsetWidth - 0.5) * magnetism,
				y: ((e.clientY - bounding.top) / btn.offsetHeight - 0.5) * magnetism,
			});
		});

		// Reset the button position when the mouse leaves
		btn.addEventListener('mouseout', () => {
			gsap.to(btn, {
				x: 0,
				y: 0,
			});
		});
	}
}

export default MagneticButtons;
