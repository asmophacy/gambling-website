let balance = 100;
        
        function updateBalance(amount) {
            balance += amount;
            document.getElementById('balance').textContent = balance;
        }

        function playCoinFlip(choice) {
            if (balance < 10) {
                alert("Not enough coins!");
                return;
            }
            updateBalance(-10);
            const result = Math.random() < 0.5 ? 'heads' : 'tails';
            const won = choice === result;
            document.getElementById('coinFlipResult').textContent = 
                `Result: ${result}. ${won ? 'You won 20 coins!' : 'You lost!'}`;
            if (won) updateBalance(20);
        }

        function playDiceRoll() {
            if (balance < 15) {
                alert("Not enough coins!");
                return;
            }
            updateBalance(-15);
            const guess = parseInt(document.getElementById('diceGuess').value);
            const result = Math.floor(Math.random() * 6) + 1;
            const won = guess === result;
            document.getElementById('diceResult').textContent = 
                `Rolled: ${result}. ${won ? 'You won 30 coins!' : 'You lost!'}`;
            if (won) updateBalance(30);
        }

        function playSlots() {
            if (balance < 20) {
                alert("Not enough coins!");
                return;
            }
            updateBalance(-20);
            const symbols = ['🍒', '🍊', '🍇', '💎'];
            const result = Array(3).fill().map(() => symbols[Math.floor(Math.random() * symbols.length)]);
            const won = result.every(symbol => symbol === result[0]);
            document.getElementById('slotsResult').textContent = 
                `${result.join(' ')} ${won ? 'You won 50 coins!' : 'You lost!'}`;
            if (won) updateBalance(50);
        }

        function playNumberGuess() {
            if (balance < 25) {
                alert("Not enough coins!");
                return;
            }
            updateBalance(-25);
            const guess = parseInt(document.getElementById('numberGuess').value);
            const result = Math.floor(Math.random() * 10) + 1;
            const won = guess === result;
            document.getElementById('numberGuessResult').textContent = 
                `Number was: ${result}. ${won ? 'You won 50 coins!' : 'You lost!'}`;
            if (won) updateBalance(50);
        }

        function playBlackjack() {
            if (balance < 30) {
                alert("Not enough coins!");
                return;
            }
            updateBalance(-30);
            const playerCard1 = Math.min(10, Math.floor(Math.random() * 11) + 1);
            const playerCard2 = Math.min(10, Math.floor(Math.random() * 11) + 1);
            const dealerCard = Math.min(10, Math.floor(Math.random() * 11) + 1);
            const playerSum = playerCard1 + playerCard2;
            const dealerSum = dealerCard + Math.min(10, Math.floor(Math.random() * 11) + 1);
            const playerWon = (playerSum <= 21 && playerSum > dealerSum) || (dealerSum > 21 && playerSum <= 21);
            
            document.getElementById('blackjackResult').textContent = 
                `Your cards: ${playerCard1}, ${playerCard2} (${playerSum}) | Dealer: ${dealerSum} | ${playerWon ? 'You won 60 coins!' : 'You lost!'}`;
            if (playerWon) updateBalance(60);
        }