const historyResult = document.querySelector("#historyResult")

function playGame(userChoice) {
        let win_lose =""
        const choices = ['rock', 'paper', 'scissor'];

        // Get computer choice
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Determine the winner
        let result;
        if (userChoice === computerChoice) {
            result = "It's a tie!";
            win_lose ="TIED with"
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissor') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissor' && computerChoice === 'paper')
        ) {
            win_lose ="WINS to"
            result = "You win!";
        } else {
            result = "Computer wins!";
            win_lose ="LOSE to"
        }

        // Display the result
        document.getElementById('result').innerText = `You chose ${userChoice}. The computer chose ${computerChoice}. ${result}`;

    
        historyResult.insertAdjacentHTML("beforeend",`<div>${userChoice} ${win_lose} ${computerChoice}</div>`)

        let childCount = historyResult.childElementCount;

        if (childCount >= 5) {
            historyResult.firstElementChild.remove();
        }

    }
