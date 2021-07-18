let button = document.querySelector("#start-button");
let input = document.querySelector("#name-input"); 

let story = {
    currentScene: "part1",
    part1: { // Finished
        title: "Chapter 1: Surviving The Undead",
        story: `"Daaaaad, don't sing along with the radio!" 's dad agreed to drive you and two of your friends, Chloe and Logan, to the movie theater for an evening show. But you didn't know he would embarrass you this much. "Since when are The Beatles not cool?" He asks with a smile. You roll your eyes as your friends snicker from the backseat. You turn off the radio and are about to say something when a convoy of camouflaged army trucks speed by in the opposite direction. You turn to look at your dad. "Did you see that?" <br>
        "It's probably just training..." ${input.value}'s dad stops mid-sentence and brings the car to a halt. He grips the steering wheel with both hands as his eyes go wide. You follow his gaze and see an elderly man attacking a young woman half a block down the street. The man thrashes at the woman with both hands and snaps his teeth. The terrified woman screams while trying to fend him off. The two tumble to the ground as the woman fights to keep the man off her. Your dad opens the car door and turns to you. "Don't leave the car, no matter what happens," he says. Before your dad can reach the struggle, the man sinks his teeth into the woman's upper arm. She lets out a blood-curdling wail as your dad kicks the man off of her. Before the man can get up, a group of people tackle him and pin him to the ground. The man gnashes his teeth together, grinding something in his mouth. You feel sick to your stomach when you realize it's the bite he took from the woman's arm. "That's Mr. Miller! He owns the appliance store downtown," says Logan. "He took a bite out of that woman!" Cried Chloe. Your dad runs back to the car and pops the trunk. He races around the car and grabs the first aid kit from the back. You stick your head out the window. "Dad, what happened?" ${input.value} asks. "I... I don't know. Just stay in the car!" He sprints back to the woman and starts to wrap her wound. As he secures the bandage, chaos breaks out in the crowd behind him. People start shoving each other and running in all directions. ${input.value}'s dad does his best to shield the injured woman. "We have to go out there and help before the crowd stampedes them!" Says Chloe. "We should stay here," says Logan. "That's what ${input.value}'s dad told us to do. Besides, we'd end up getting hurt ourselves."`,
        choices: [
            {
              choice: "Defend your dad on the street",
              destination: "street"            
            },
            {
              choice: "Stay in the car",
              destination: "car"
            }
        ]
    },
    street: { // Defends dad [FINISHED]
        title: "Chapter 1: Surviving The Undead",
        story: `You don't care what your dad said. You look back at your friends. "Let's go," you say. "We have to at least try to help him." Logan jumps out of the car and starts running down the street. YOu can Chloe are in close pursuit. But with the panicked crowd surging in the opposite direction, you can't see your dad anymore. A screaming man pushes Logan to the ground as he hurls by. You try to help Logan up but are knocked to the ground yourself. Chloe gets both of you back on your feet, and you push forward into the crowd. "I can't find him!" You yell. Logan grabs your arm and points to a small pool of blood on the street. "This is where they were!" Your eyes linger on the blood for a moment before searching the crowd. There's no way you'll be able to find your dad in the chaos. "Don't you guys see what's happening? Says Logan. "Mr. Miller bit that woman. There's only one explanation for that." Chloe rolls her eyes. "One person bitten, and you're already talking about zombies? It's just one crazy person. We should report it to the police." <br> "No, no, no," Says Logan. "If I'm right, going downtown is the last thing we want to do. We should get out of the city." <br> "Leave the city?" Why would we do that?" You ask. Logan looks you directly in the eyes. "If they are zombies, we'll want to go to a place that's not heavily populated. Zombie's are drawn to people, to noise. We should head to the woods on the east side of town. It's only a couple miles away." <br> "Because of what you've seen in all those zombie movies?" Chloe asked annoyed. "Even if you're right, the police station ist the safest place for us now."`,
        choices: [
            {
              choice: "Get out of town",
              destination: "forest"            
            },
            {
              choice: "Go to the police station",
              destination: "police_station" 
            }
        ]
    },
    car: { // stay in the car
        title: "Chapter 1: Surviving The Undead",
        story: `Your dad's hands are full trying to help the woman, and you don't want to add to his problems. "Let's stay here," you say. "My dad knows what he's doing." You lock the doors and turn the radio back on in case there are any reports about what's happening. You flip from station to station as you keep an uneasy eye on the growing crowd outside the car. You stop when you hear an authoritative voice come on the radio. "...are unsure of what caused the situation. We do know the southeast part of the city has seen multiple outbreaks. We urge citizens to stay in their houses and lock their doors." You look back t your friends. "He said 'outbreak.' Does that mean there's a serious virus spreading around or what? Logan shrugs. "Who knows? Let's keep listening." BAM! BAM! BAM! You jump as a frantic man bangs on one of the car windows. He grasps at the door handle with both hands and pulls in a heavy motion. Chloe lets out a scream as a woman appears in another side window. You can't make out her shouts, but you know that both people want to get inside the car. "Should we let them in?" Asks Chloe. "No!" Yells Logan. "If there's a virus outbreak, they might be infected." You look out the windshield, but the crowd has grown so thick you can no longer see your dad. You know you missed your opportunity to help him, and now you're worried about your own safety too.`,
        choices: [
            {
              choice: "Let the people inside the car",
              destination: "help"            
            },
            {
              choice: "Drive away",
              destination: "drive"
            }
        ]
    },
    forest: { // get out of town
        title: "Chapter 1: Surviving The Undead",
        story: `"If Logan's right, we should get away from large groups of people," you say. "The people here are getting crzier by the minute. Let's go back to my house. It's not far. Maybe Dad made it back there. Maybe Dad made it back there. Either way, we can grab supplies at my house." <br> "Sounds good to me," Logan says. "But we should take the car. My mom is teaching me how to drive, and it's faster and safer than being on the street." You head back to the car and jump in. Logan slowly turns the car around, avoiding the people in the street. You're facing the right direction, but you're not moving very fast. "Uh, Logan? Any time now," you usher. "Your dad's a lot taller than me! Give me a second to move the seat up." Chloe screams as a middle-aged man pounds frantically on the back driver's side door. A terrified young woman smacks the window on the other side of the car. Both are yelling, but you can't make out what they're saying. "GO, GO, GO!" Yells Chloe. Logan slams his foot on the pedal, and the tires squeal as the car shoots forward. You swerve back and forth down the street before Logan regains control. "People are crazy!" Cries Chloe. "Maybe you were right, Logan. I'll bet the police station is a zoo right now." You nod in agreement and point at the intersection ahead. "Turn right at the next stop sign." <br> "Yeah, I know how to get to your place. "Let's go over what we're going to take with us now so we can get in and out." <br> "I'll grab the tent from my room," you say. "You guys pack some food and the gallon jug of water that's in the frige. There's a also a lighter in the kitchen drawer underneath the silverwa-" Your words catch in your throat as Logan pulls up to your house. The front door is wide open.Everyone is silent. You play out a dozen scenarios in your head on why your front door would be left open. None of them are good. "We need to see if my mom is inside," you say. The three of you get out of the car and cautiously walk into the house, stopping in the kitchen. "Mom?" You call loudly, hoping for a response but not getting one. "I'm sure she's okay," says Loga, unconvincingly, "but we should grab the supplies and head to the woods like we first planned." <br> "You're right," you say. "I'll grab the tent and leave her a note." On the way to your room, you pass by the doorway to the basement. Muffled sounds rise up the stairs. It could be your mom, but the noises sound odd. You wnat to run downstairs to see, but maybe you should call out first.`,
        choices: [
            {
              choice: "Call out for your mom",
              destination: "call"            
            },
            {
              choice: "Go in the basement",
              destination: "basement"
            }
        ]
    },
    police_station: { // get out of town
        title: "Chapter 1: Surviving The Undead",
        story: `"Chloe's right," you say. "And even if they are zombies, the police station would be the safest place in town. I just hope we find my dad on the way." <br> "Fine. But we should take the car," says Logan. "I can drive. Well, I've been practicing with my mom. It's only a few blocks, but I'd rather not walk there." You agree--people are becoming more and more frantic. You get back to the car, and Logan reaches for the driver's door. Suddenly, a middle-aged woman grabs him by the shoulder and tosses him to the ground. "Hey!" Yells Logan, as the woman climbs into the car and peels out in reverse. People from the crowd dive out of the way as she turns the wheel too hard and smashes into a parked car. Angry people from the crowd run to the car and start pounding on the windshield. You've seen enough--it's time to go. The police station is only six blocks away, but the progress is slow. Traffic has come t oa halt. People have flooded the streets in an attempt to flee the city. Shouting fills the air, mixed with an occasional shriek or revving engine. You and your friends stick to the sidewalk, staying as close to the buildings as possible. After a few blocks, the chaos on the streets is incredibly worse. Nonstop screaming drowns out most of the other noise. Attacks similar to the one you witnessed with Mr. Miller are happening all over. The look in the eyes of the people doing the biting chills you to the core. There's no doubt in your mind now--those people are zombies. You finally reach the police station, but you run into a barricade of cruisers and a chain-link metal fence. People desperately cling to the fence, begging to be let in even though no one is on the other side. You overhear a man talking to a small group of people near the fence. "There's a safe zone on the northwest side of the city," he says. "They have armed military personnel guarding a base filled with food, water, and everything else you'd need." Logan grabs your shoulder and pulls you and Chloe away from the crowd. "We'll never make it in a crowd," he says. We're going to crawl through and go down the alley. There might be a way into the police station back there."`,
        choices: [
            {
              choice: "Follow the group to the safezone",
              destination: "follow_group"            
            },
            {
              choice: "Go through the fence with Logan and Chloe",
              destination: "fence"
            }
        ]
    }
};

button.addEventListener('click', renderScene);

function renderScene() {
    let content = document.querySelector("#container");
    content.innerHTML = 
    `<h1>${story[story.currentScene].title}</h1>
    <p>${story[story.currentScene].story}</p>
    ${getInputs()} <br>
    <button id = "submit-button">Decide</button>`

    let button = document.querySelector("#submit-button");
    button.addEventListener('click', () => {
        getInputValue();
    });
}

function getInputValue() {
    let radio_inputs = document.querySelectorAll("input[type='radio']");
    for(let i = 0; i < radio_inputs.length; i++) {
        if(radio_inputs[i].checked) {
          story.currentScene = radio_inputs[i].getAttribute('data-destination');
          renderScene();
        }
    }
}

function getInputs() {
    let input = "";
    for(let i = 0; i < story[story.currentScene].choices.length; i++) {
        input += 
        `<div>
             <input data-destination = ${story[story.currentScene].choices[i].destination} type = "radio" id = "radio${i}" name = "choices">
            <label for = "radio${i}">${story[story.currentScene].choices[i].choice}</label>
        </div>`
    }
    return input;
}