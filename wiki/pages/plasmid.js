document.addEventListener('DOMContentLoaded', () => {
    const plasmid = document.getElementById('plasmid');
    const originInfo = document.getElementById('origin-info');
    const promoterInfo = document.getElementById('promoter-info');
    const antibioticInfo = document.getElementById('antibiotic-info');

    const showInfo = (infoContainer) => {
        plasmid.style.opacity = '0.3';
        infoContainer.style.display = 'block';
    };

    const hideInfo = (infoContainer) => {
        plasmid.style.opacity = '1';
        infoContainer.style.display = 'none';
    };

    plasmid.addEventListener('mousemove', (event) => {
        const rect = plasmid.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const radius = rect.width / 2;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const distanceFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

        if (distanceFromCenter < radius / 3) {
            showInfo(originInfo);
            hideInfo(promoterInfo);
            hideInfo(antibioticInfo);
        } else if (distanceFromCenter < 2 * radius / 3) {
            showInfo(promoterInfo);
            hideInfo(originInfo);
            hideInfo(antibioticInfo);
        } else if (distanceFromCenter < radius) {
            showInfo(antibioticInfo);
            hideInfo(originInfo);
            hideInfo(promoterInfo);
        } else {
            hideInfo(originInfo);
            hideInfo(promoterInfo);
            hideInfo(antibioticInfo);
        }
    });

    plasmid.addEventListener('mouseleave', () => {
        hideInfo(originInfo);
        hideInfo(promoterInfo);
        hideInfo(antibioticInfo);
    });
});
