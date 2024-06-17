// Appear & reappear sequence
    document.addEventListener('DOMContentLoaded', () => {
        const promoter = document.getElementById('promoter');
        const codingSequence = document.getElementById('coding-sequence');
        const terminator = document.getElementById('terminator');
    
        const promoterText = document.getElementById('promoter-text');
        const codingSequenceText = document.getElementById('coding-sequence-text');
        const terminatorText = document.getElementById('terminator-text');
    
        const promoterInfo = document.getElementById('promoter-info');
        const codingSequenceInfo = document.getElementById('coding-sequence-info');
        const terminatorInfo = document.getElementById('terminator-info');
    
        const promoterColorInput = document.getElementById('promoter-color');
        const codingSequenceColorInput = document.getElementById('coding-sequence-color');
        const terminatorColorInput = document.getElementById('terminator-color');
    
        const showInfo = (infoContainer, path) => {
            // Hide all info containers first
            promoterInfo.style.display = 'none';
            codingSequenceInfo.style.display = 'none';
            terminatorInfo.style.display = 'none';
    
            // Show the relevant info container
            infoContainer.style.display = 'block';
    
            // Dim all paths first
            document.querySelectorAll('path').forEach(p => p.style.opacity = '0.3');
    
            // Highlight the relevant path and its border
            path.style.opacity = '1';
            document.getElementById(`${path.id}-border`).style.opacity = '1';
        };
    
        const hideInfo = () => {
            // Hide all info containers
            promoterInfo.style.display = 'none';
            codingSequenceInfo.style.display = 'none';
            terminatorInfo.style.display = 'none';
    
            // Reset all paths to full opacity
            document.querySelectorAll('path').forEach(p => p.style.opacity = '1');
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