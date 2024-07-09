window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});

});

	document.addEventListener('DOMContentLoaded', function () {
	const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0
};

	const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach(entry => {
	if (entry.isIntersecting) {
	const target = entry.target;
	if (target.classList.contains("dropshadow-box")) {
	target.style.opacity = 1; // Show the element
	target.classList.add('fadeInUp-animation');

}
	observer.unobserve(target); // Unobserve after adding the class to avoid re-triggering
}
});
}, options);

	observer.observe(document.querySelector('.dropshadow-box'));
});

	 document.querySelectorAll('.nav-item .dropdown-toggle').forEach(item => {
    item.addEventListener('focus', function() {
      this.parentElement.querySelector('.dropdown-menu').style.display = 'block';
    });

    item.addEventListener('blur', function() {
      const dropdown = this.parentElement.querySelector('.dropdown-menu');
      setTimeout(() => {
        if (!dropdown.contains(document.activeElement)) {
          dropdown.style.display = 'none';
        }
      }, 200);
    });
  });

  // Keep dropdown visible while tabbing through its items
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.addEventListener('blur', function() {
      setTimeout(() => {
        if (!this.contains(document.activeElement)) {
          this.style.display = 'none';
        }
      }, 200);
    }, true);
  });
