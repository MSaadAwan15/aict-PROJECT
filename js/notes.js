// Functionality for StudyNest Download Buttons
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); 
            alert('Download started!');
        });
    });
});