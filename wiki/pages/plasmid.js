document.addEventListener('DOMContentLoaded', () => {
    const origin = document.getElementById('origin');
    const promoter = document.getElementById('promoter');
    const antibiotic = document.getElementById('antibiotic');
    const originInfo = document.getElementById('origin-info');
    const promoterInfo = document.getElementById('promoter-info');
    const antibioticInfo = document.getElementById('antibiotic-info');

    const showInfo = (infoContainer, path) => {
        path.style.opacity = '0.3';
        infoContainer.style.display = 'block';
    };

    const hideInfo = (infoContainer, path) => {
        path.style.opacity = '1';
        infoContainer.style.display = 'none';
    };

    origin.addEventListener('mouseover', () => {
        showInfo(originInfo, origin);
    });
    origin.addEventListener('mouseout', () => {
        hideInfo(originInfo, origin);
    });

    promoter.addEventListener('mouseover', () => {
        showInfo(promoterInfo, promoter);
    });
    promoter.addEventListener('mouseout', () => {
        hideInfo(promoterInfo, promoter);
    });

    antibiotic.addEventListener('mouseover', () => {
        showInfo(antibioticInfo, antibiotic);
    });
    antibiotic.addEventListener('mouseout', () => {
        hideInfo(antibioticInfo, antibiotic);
    });
});
