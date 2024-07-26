document.addEventListener('DOMContentLoaded', (event) => {
    let randomNumber = Math.floor(Math.random() * 100);
    let attempts = 0;
    function guess() {
        const guessInput = document.getElementById("guessInput");
        const message = document.getElementById('message');
        const credit = document.getElementById('credit');
        const userGuess = Number(guessInput.value);
        attempts++;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You Guessed It Right In ${attempts} Attempts. The Number Was ${randomNumber}.`;
            message.style.color = 'green';
            credit.textContent="Developed By Jatin Kadiyan 😀";
            credit.style.color='red';
        } else if (userGuess > randomNumber) {
            message.textContent = 'Your Guess Is Too High! Try Again.';
            message.style.color = 'red';
        } else if (userGuess < randomNumber) {
            message.textContent = 'Your Guess Is Too Low! Try Again.';
            message.style.color = 'red';
        }
        console.log(randomNumber);

    }
    function reset() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        document.getElementById('message').textContent = '';
        document.getElementById('credit').textContent='';
        document.getElementById('guessInput').value = '';
        document.getElementById('message').style.color = 'white';
    }
    window.guess = guess;
    window.reset = reset;
});
