document.addEventListener('DOMContentLoaded', () => {
    const origin = document.getElementById('origin');
    const promoter = document.getElementById('promoter');
    const antibiotic = document.getElementById('antibiotic');
    const originInfo = document.getElementById('origin-info');
    const promoterInfo = document.getElementById('promoter-info');
    const antibioticInfo = document.getElementById('antibiotic-info');

    const showInfo = (infoContainer, path) => {
        // Hide all info containers first
        originInfo.style.display = 'none';
        promoterInfo.style.display = 'none';
        antibioticInfo.style.display = 'none';
        
        // Show the relevant info container
        infoContainer.style.display = 'block';

        // Dim all paths first
        origin.style.opacity = '0.3';
        promoter.style.opacity = '0.3';
        antibiotic.style.opacity = '0.3';
        
        // Highlight the relevant path
        path.style.opacity = '1';
    };

    const hideInfo = () => {
        // Hide all info containers
        originInfo.style.display = 'none';
        promoterInfo.style.display = 'none';
        antibioticInfo.style.display = 'none';

        // Reset all paths to full opacity
        origin.style.opacity = '1';
        promoter.style.opacity = '1';
        antibiotic.style.opacity = '1';
    };

    origin.addEventListener('mouseover', () => {
        showInfo(originInfo, origin);
    });
    origin.addEventListener('mouseout', hideInfo);

    promoter.addEventListener('mouseover', () => {
        showInfo(promoterInfo, promoter);
    });
    promoter.addEventListener('mouseout', hideInfo);

    antibiotic.addEventListener('mouseover', () => {
        showInfo(antibioticInfo, antibiotic);
    });
    antibiotic.addEventListener('mouseout', hideInfo);
});
