let content = document.querySelector(".container");
let start_btn = document.querySelector("#submitBtn");
// let jonah_chosen = false;
// let cyrus_chosen = false;
let character_information = {
    Gloria: { // index 0 
        name: "Gloria Burke",
        sex: "Female",
        age: "20",
        school: "Edison Creek Community College",
        major: "Still deciding",
        biography: "",
        sexuality: "",
        residence: ""
    },
    Ray: { // index 1
        name: "Ray Corbyn",
        sex: "Male",
        age: "24",
        school: "N/A",
        major: "Electrician",
        biography: "",
        sexuality: "",
        residence: ""
    }
};

let questions_jonah = {
   starting_Question: "question1",
    question1: {
        question: "How are you Gloria Burke?",
        choices: [{
            choice: "Good",
            destination: "question2"
        },
        {
            choice: "Bad",
            destination: "re"
        }],
    },
    question2: {
        question: "First afs",
        choices: [{
            choice: "w",
            destination: "w"
        },
        {
            choice: "Nwo",
            destination: ""
        }],
    }
};

let questions_cyrus = {
    starting_Question: "question1",
    question1: {
        question: "Do you like apples?",
        choices: [{
            choice: "Yes",
            destination: "question2"
        },
        {
            choice: "No",
            destination: "re"
        }],
    },
    question2: {
        question: "First afs",
        choices: [{
            choice: "w",
            destination: "w"
        },
        {
            choice: "Nwo",
            destination: ""
        }],
    }
};

let survival_challenges = { 
    illness : {
        information: "w",
        choice: [
            {
             full_challenge: "Prone to illness"   
            }
        ],
    },
    vegetarian : {
        information: "w",
        choice: [
            {
             full_challenge: "Vegetarian"   
            }
        ],
    },
    diet : {
        information: "w",
        choice: [
            {
             full_challenge: "Religious dietary restrictions"   
            }
        ],
    },
    allergies : {
        information: "w",
        choice: [
            {
             full_challenge: "Prone to allergies"   
            }
        ],
    },
    allergic : {
        information: "w",
        choice: [
            {
             full_challenge: "Allergic to peanuts"   
            }
        ],
    },
    emotions : {
        information: "w",
        choice: [
            {
             full_challenge: "Prone to anger"   
            }
        ]
    }
};
// console.log(survival_challenges.illness.choice[0].full_challenge); // returns prone to illness
console.log(survival_challenges[survival_challenges.length])

start_btn.addEventListener('click', characterProfile);

function characterProfile() {
    content.innerHTML = `<h3>Choose your character</h3>
    <hr>
    <span id = "warning"></span> <br>
    <input type = "radio" name = "character" id = "gloria" value = "Gloria">
    <label for = "character" name = "character">Gloria Blurke</label> <br>
    <input type = "radio" name = "character" id = "ray" value = "Ray">
    <label for = "character" name = "character">Ray Corbyn</label> <br><br>
    <button id = "start">Select Character</button>`;
    document.querySelector("#start").addEventListener('click', start);
}

function start() {
   let characters = document.querySelectorAll('input[type="radio"]'); //<-- if something goes wrong with future radio buttons 
   let spanWarning = document.querySelector("#warning");
   for(let i = 0; i < characters.length; i++) {
    if(!characters[i].checked) {
        spanWarning.innerHTML = "Please select a character";
        spanWarning.className = "warning-alert";
        if(spanWarning.style.display = "block") {
             setTimeout(() => { 
                spanWarning.style.display = "none";
            }, 2000);
        }     
    }
    else if(characters[i].checked) {
       let character_chosen = characters[i].value;
       content.innerHTML = `<h3>You have chosen ${character_chosen}</h3>
       <hr>
       <span id = "character-information"></span> <br>
       <button onclick = "characterProfile()">Go Back</button> 
       <button id = "continue">Continue</button>`;
       // remove the onclick from the button above 
        for(let j = 0; j < Object.keys(character_information).length; j++) { 
            if(character_chosen == Object.keys(character_information)[j]) {
                let span = document.querySelector("#character-information");
                span.innerHTML = `<p><b>Name:</b> ${Object.values(character_information)[j].name}</p>
                  <p><b>Age:</b> ${Object.values(character_information)[j].age}</p>
                  <p><b>Sex:</b> ${Object.values(character_information)[j].sex}</p>
                  <p><b>School:</b> ${Object.values(character_information)[j].school}</p>
                  <p><b>Major:</b> ${Object.values(character_information)[j].major}</p>
                  <p><b>Sexuality:</b> ${Object.values(character_information)[j].sexuality}</p>
                  <p><b>Personality:</b> ${Object.values(character_information)[j].biography}</p>
                  <p><b>Residence:</b> ${Object.values(character_information)[j].residence}</p>`; 
                let character_name = Object.values(character_information)[j].name;
                localStorage.setItem('Chosen Character', character_name); // stores in local storage
                document.querySelector("#continue").addEventListener('click', continueSettings);
            }
         }
      }
   }
}

function continueSettings() { // turn this into a for loop 
    content.innerHTML = `With life, there are challenges and with those challenges, you must learn to cope with them, especially if those challenges are... unprecedented. Choose up to 4 challenges you'd like your character to have while surviving the apocalypse. Please note that you're welcome to not have any challenges which adds to a more easier survival approach. The choice is yours, but do know that you cannot change your challenges once your decision has been finalized. <br><br>
    <input type = "radio" name = "challenge" value = "Prone to illness">
    <label for = "character" name = "challenge">Prone to illness</label> <br>
    <input type = "radio" name = "challenge" value = "Vegetarian">
    <label for = "character" name = "challenge">Vegetarian</label> <br>
    <input type = "radio" name = "challenge" value = "Religious dietary restrictions">
    <label for = "character" name = "challenge">Religious dietary restrictions</label> <br>
    <input type = "radio" name = "challenge" value = "Prone to allergies">
    <label for = "character" name = "challenge">Prone to allergies</label> <br>
    <input type = "radio" name = "challenge" value = "Allergic to peanuts">
    <label for = "character" name = "challenge">Allergic to peanuts</label> <br>
    <input type = "radio" name = "challenge" value = "Prone to anger">
    <label for = "character" name = "challenge">Prone to anger</label> <br> <br>
    <p id = "list"><b>You've chosen the following challenges: </b></p>
    <button id = "retry">Redo Challenges</button>
    <button id = "continue">Confirm Challenges</button>
    <button id = "onwards">Next</button>`;

    // content.innerHTML = `With life, there are challenges and with those challenges, you must learn to cope with them, especially if those challenges are... unprecedented. Choose up to 4 challenges you'd like your character to have while surviving the apocalypse. Please note that you're welcome to not have any challenges which adds to a more easier survival approach. The choice is yours, but do know that you cannot change your challenges once your decision has been finalized. <br><br>`; // add -> $challengeInputs()} here after making a working for loop below so that it'll generate the radio buttons based on how many options there are in the object along with displaying the information for each.

    document.querySelector("#continue").addEventListener('click', challenges);
    document.querySelector("#onwards").addEventListener('click', displayInfo); 
    // IF YOU DON'T CHOOSE GLORIA IT WON'T ACTIVATE THE DISPLAYINFO FUNCTION 
}

// function challengeInputs() {
//     let input = "";
//     for(let i = 0; i < survival_challenges.length; i++) {
//         input += `<div><input data-destination = ${questions_jonah[questions_jonah.starting_Question].choices[i].destination} id = "${i}" type = "radio" name = "choices">
//         <label for = "${i}"></label>${questions_jonah[questions_jonah.starting_Question].choices[i].choice}</div>`
//     }
//     return input;
// }

let challengesArray = [];
function challenges() {
    let displayList = document.querySelector("#list");
    let radioBtns = document.querySelectorAll('input[type="radio"]');
    for(let i = 0; i < radioBtns.length; i++) {
       if(radioBtns[i].checked) {
        challengesArray.push(radioBtns[i].value);
        let challengesArray_new = challengesArray.join(", ");
        console.log("Full array: " + challengesArray_new); // with commas
            if(challengesArray.length < 4) {
                radioBtns[i].disabled = true;
            }
            else if(challengesArray.length === 4) {
              alert("You've chosen the maximum number of challenges");
              for(let i = 0; i < challengesArray_new.length; i++) {
                 displayList.innerHTML += `${challengesArray_new[i]}`;
                 localStorage.setItem("Challenges", challengesArray_new); // adds to local storage
             }
          }
       }
       document.querySelector("#retry").addEventListener('click', () => {
        challengesArray = [];
        radioBtns[i].disabled = false;
        displayList.innerHTML = `<span><b>You've chosen the following challenges: </b></span>`;
        localStorage.removeItem("Challenges"); // removes from local storage
      });
    }
}

function displayInfo() {
    if(localStorage.getItem("Chosen Character") === "Gloria Burke") {
      content.innerHTML = `${questions_jonah[questions_jonah.starting_Question].question}
      ${createInputs()} <button id = "next">Continue</button>`;
    //   jonah_chosen = true;
    //   cyrus_chosen = false;
      document.querySelector("#next").addEventListener('click', renderScenes);
    }
}

function renderScenes() { // based on what you've chosen, it'll render the next scene with that assigned destination
    let inputs = document.querySelectorAll('input[type="radio"]');
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].checked) {
            questions_jonah.starting_Question = inputs[i].getAttribute('data-destination');
            displayInfo();
        }
    }
}

function createInputs() { // create radio buttosn for storyline
    let input = "";
    for(let i = 0; i < questions_jonah[questions_jonah.starting_Question].choices.length; i++) {
        input += `<div><input data-destination = ${questions_jonah[questions_jonah.starting_Question].choices[i].destination} id = "${i}" type = "radio" name = "choices">
        <label for = "${i}"></label>${questions_jonah[questions_jonah.starting_Question].choices[i].choice}</div>`
    }
    return input;
}


// Tips:
// If an event listener does not work, console.log the querySelector to check if it's not out of range.
// If it is out of range, try and push it back a little so that you can access the event and it won't appear null.


// Ideas for the game:
// Maybe add an option to decide on the major you'd want which may help you on the better chances of your survival based on what you've chosen.