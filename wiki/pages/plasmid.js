document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.getElementById('tooltip');
    const areas = document.querySelectorAll('area');

    areas.forEach(area => {
        area.addEventListener('mouseover', (event) => {
            const info = event.target.getAttribute('data-info');
            tooltip.textContent = info;
            tooltip.style.display = 'block';
            const rect = event.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`;
        });

        area.addEventListener('mousemove', (event) => {
            const rect = event.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`;
        });

        area.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });
});
