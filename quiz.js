  document.addEventListener("DOMContentLoaded", function () {
      const submitButton = document.getElementById("submit-answer");
      const feedbackParagraph = document.getElementById("feedback");

      function checkAnswer() {
        const selectedOption = document.querySelector('input[name="quiz"]:checked');

        if (selectedOption) {
          const userAnswer = selectedOption.value;  
          const correctAnswer = "4";       

          if (userAnswer === correctAnswer) {
            feedbackParagraph.textContent = "Correct! Well done.";
            feedbackParagraph.style.color = "green";
          } else {
            feedbackParagraph.textContent = "That's incorrect. Try again!";
            feedbackParagraph.style.color = "red";
          }
        }
      }

      submitButton.addEventListener("click", checkAnswer);
    });