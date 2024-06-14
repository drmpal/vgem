document.addEventListener('DOMContentLoaded', () => {
    const promoter = document.getElementById('promoter');
    const codingSequence = document.getElementById('coding-sequence');
    const terminator = document.getElementById('terminator');
    
    const promoterInfo = document.getElementById('promoter-info');
    const codingSequenceInfo = document.getElementById('coding-sequence-info');
    const terminatorInfo = document.getElementById('terminator-info');

    const showInfo = (infoContainer, path) => {
        // Hide all info containers first
        promoterInfo.style.display = 'none';
        codingSequenceInfo.style.display = 'none';
        terminatorInfo.style.display = 'none';

        // Show the relevant info container
        infoContainer.style.display = 'block';

        // Dim all paths first
        promoter.style.opacity = '0.3';
        codingSequence.style.opacity = '0.3';
        terminator.style.opacity = '0.3';

        // Highlight the relevant path
        path.style.opacity = '1';
    };

    const hideInfo = () => {
        // Hide all info containers
        promoterInfo.style.display = 'none';
        codingSequenceInfo.style.display = 'none';
        terminatorInfo.style.display = 'none';

        // Reset all paths to full opacity
        promoter.style.opacity = '1';
        codingSequence.style.opacity = '1';
        terminator.style.opacity = '1';
    };

    promoter.addEventListener('mouseover', () => {
        showInfo(promoterInfo, promoter);
    });
    promoter.addEventListener('mouseout', hideInfo);

    codingSequence.addEventListener('mouseover', () => {
        showInfo(codingSequenceInfo, codingSequence);
    });
    codingSequence.addEventListener('mouseout', hideInfo);

    terminator.addEventListener('mouseover', () => {
        showInfo(terminatorInfo, terminator);
    });
    terminator.addEventListener('mouseout', hideInfo);
});
