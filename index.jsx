function switchView(view) {
    // 1. Force hide all views to prevent layout overlap
    const views = ['officer-view', 'manager-view'];
    views.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none'; // Overrides CSS conflicts
            element.classList.add('hidden-view');
        }
    });

    // 2. Activate the selected view
    const target = document.getElementById(view + '-view');
    if (target) {
        target.style.display = 'block';
        target.classList.remove('hidden-view');
        // 3. Scroll to top for mobile responsiveness
        window.scrollTo(0, 0);
    } else {
        console.error("View ID not found: " + view + "-view");
    }
}

// Ensure the page defaults to Officer view on load
window.onload = () => switchView('officer');
