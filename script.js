$(document).ready(function() {
    // Event handler for clicking on question-componant
    $('.question-componant').click(function(event) {
        event.preventDefault();
        toggleAnswer($(this));
    });

    // Event handler for keyboard navigation
    $('.question-componant').keydown(function(event) {
        // Check if the pressed key is the Enter key (key 'Enter')
        if (event.key === 'Enter') {
            event.preventDefault();
            toggleAnswer($(this));
        }
    });

    // Function to toggle the answer visibility
    function toggleAnswer(question) {
        var answerComponent = question.next('.answer-componant');

        // Toggle class of question-componant 
        question.toggleClass('active');

        // Toggle visibility of the answer component
        answerComponent.toggle();
    }
});
