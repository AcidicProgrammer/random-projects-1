let time_remaining = document.querySelector("#time-remaining");
let startBtn = document.querySelector("#start-btn");
let time_left = 10;

function countDown() {
    setInterval(() => {
        if(time_left <= 0) {
            clearInterval(time_left = 0);
        }
        else {
            time_left -= 1;
            time_remaining.innerHTML = time_left;
        }
    }, 1000);
}
startBtn.addEventListener('click', countDown);

     // JavaScript keyboard

     function showValue(command) {
        let textfield = document.querySelector("#textfield").innerHTML;
        let capslockBtn = document.querySelector(".capslock");
        let shiftBtn = document.querySelector(".shift");

        if(command === "SHIFT") {
            if(shiftBtn.style.backgroundColor === 'red') {
                 return shiftBtn.style.backgroundColor = 'green';
            }
            else {
                 shiftBtn.style.backgroundColor = 'red';
            }
            return;
        }  

        if(command === 'SPACE') {
            return this.textfield.innerHTML += ' ';
        }

        else if(command === 'ENTER') {
            command = '<br>';
            return this.textfield.innerHTML += command;
        }

        else if(command === 'BACKSPACE') {
            let backspace = this.textfield.innerHTML.substring(0, this.textfield.innerHTML.length - 1);
            return this.textfield.innerHTML = backspace;
        }

        if(shiftBtn.style.backgroundColor == 'green') { // Turn this into a switch statement

            let commands = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', ',', '.', ';', '-', '=', '[', ']', "'"];
            let newCommands = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '<', '>', ':', '_', '+', '{', '}', '"'];
            
            // Omg this is the first time I've used a for loop by myself and it worked!!!!!! (6/25/21)
            for(let i = 0; i < commands.length; i++) { 
                if(command === commands[i]) { 
                    let symbols = (commands[i] = newCommands[i]); 
                    return this.textfield.innerHTML += symbols; 
                }
            }
        }
        // add ' to the commands array and " to the newCommands array

        if(command === "CAPSLOCK") {
            if(capslockBtn.style.backgroundColor === 'red') {
                return capslockBtn.style.backgroundColor = 'green';
            }
            else {
                capslockBtn.style.backgroundColor = 'red';
            }
            return;
        }

        if(capslockBtn.style.backgroundColor === 'green') {
            this.textfield.innerHTML += command.toUpperCase();
        }
        else {
            this.textfield.innerHTML += command.toLowerCase();
        }
     }

    function animateKeyboard() {
        let keyboard_background = document.querySelector(".keyboard-container");

        if(keyboard_background.style.backgroundColor === 'rgb(206, 206, 206)') {
            keyboard_background.style.backgroundColor = 'black';
            document.body.style.backgroundColor = "black"; 
        }
        else {
            keyboard_background.style.backgroundColor = 'rgb(206, 206, 206)';
            document.body.style.backgroundColor = "white";
        }
    }
  

