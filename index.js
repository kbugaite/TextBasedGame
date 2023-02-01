//My Game code

class Environment {
  constructor(name) {
    this._name = name;
    this._description = "";
    this._linkedEnvironments = {};
    this._character = "";
    this._item = "";
    this._image = "";
  }
  //Getters to get the info and display it for the user on the website
  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get character() {
    return this._character;
  }

  get item() {
    return this._item;
  }

  get image() {
    return this._image;
  }

  set name(value) {
    if (value.length < 5) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 15) {
      alert("Description is too short.");
      return;
    }
    this._description = value;
  }

  set character(value) {
    if (value.length < 4) {
      alert("Character name is too short.");
      return;
    } 
    this._character = value;
  }

  set item(value) {
    if (value.length < 4) {
      alert("Item name is too short.");
      return;
    } 
    this._character = value;
  }

  set image(value) {
    this._image = value;
  }

  //a method to produce friendly environment description

  describe() {
    return "Looking around the " + this._name + " you can see " + this._description;
  }

  //a method to add environments to link environments to this one. It does this by adding them to _linkedEnvironments

  linkEnvironment(direction, environmentToLink) {
    this._linkedEnvironments[direction] = environmentToLink;
  }

  //a method to produce friendly description of linked environments

  getDetails() {
    //Getting the entries from the linked environments objects
    const entries = Object.entries(this._linkedEnvironments);
    console.log(entries)
    //Initialise an empty array to store the details
    let details = []

    //Loop through the entries and add a description of each environment to the details array so user can choose where to go

    for (const [direction, environment] of entries) {
      let text = " The " + environment._name + " is to the " + direction;
      details.push(text);
    }
    return details;
  }

  //a method to move the adventurer to a new environment
  //method to move to a new environment
  //Move will take in north, east, south, west

  //Input "north". Output: The environment which is to the north of the current location.

  move(direction) {
    if (direction in this._linkedEnvironments) {
      return this._linkedEnvironments[direction];
    } else {
      alert("You can't go that way",);
      alert(this._name)
      return this; //or return;
    }
  }
}

class Item {
  constructor(name) {
    this._name = name,
      this._description = ""
  }

  set name(value) {
    if (value.length < 5) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 15) {
      alert("Decription is too short.");
      return;
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  // a method to produce friendly item description

  describe() {
    return "The " + this._name + " is " + this._description;
  }
  
  // itemAlert() {
  //   return alert("You have found: " + this._name);
  // }
}

//class Enemy extends Character {
class Character {
  constructor(name) {
    this._name = name,
      this._description = ""
    this._conversation = ""
  }
  set name(value) {
    if (value.length < 5) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 15) {
      alert("Decription is too short.");
      return;
    }
    this._description = value;
  }

  set conversation(value) {
    if (value.length < 10) {
      alert("conversation is too short.");
      return;
    }
    this._conversation = value;
  }
  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get conversation() {
    return this._conversation;
  }

  // A method to produce friendly character description

  describe() {
    return "You have met the " + this._name + ". " + "<br>" + this._name + " is " + this._description;
  }

  //a method to produce friendly conversation text
  converse() {
    return this._name + " says: " + "<br>" + "“" + this._conversation + "”";
  }
}

//Created a subclass of Character for the Boss character with an additional ability property
class Boss extends Character {
  constructor(name) {
    super(name);
    this._ability = "";
}
showAbility() {
  return console.log(this._name + ' uses: ' + this._ability);
}
}


//create the indiviual environment objects and add their descriptions
//Using our setters to ensure the data is valid and add descriptions

//Create the characters
const merchant = new Character("Merchant");
merchant.description = `a vagabond trader dressed in most interesting garments, with a large backpack on his shoulders and a large dusty hat`;
merchant.conversation = `Hello there, stranger. I have many interesting items for sale. What would you like to buy? <br> Oh, but you happen to have no coin. Never mind then. Move along...`;
const fairy = new Character("Fairy");
fairy.description = `a tiny fairy with a large pink dress and a large pink bow in her hair`;
fairy.conversation = `Hello there, stranger. Welcome to my humble abode. Are you lost?`;
const witch = new Character("Witch");
witch.description = `a lady with cat-like yellow eyes, pale green skin dressed in a black gown, and a crown made of tangled up thorns.`;
witch.conversation = `How dare you barge into my castle uninvited! What business do you have here?`;

//Create the Boss subclass
const dragon = new Boss("Dragon");
dragon.description = `a large scary creature with red scales and a fiery breath`;
dragon.conversation = `You dare to challenge me? Prepare to die!`;
dragon.ability = `Fire Breath`;
// dragon.ability = [`Claw Attack`, `Tail Swipe`, `Fire Breath`];


//Create the items here
const rustyKey = new Item("Rusty Old Key");
rustyKey.description = `a rather large iron key all covered in rust, which has some mysterious looking symbols carved into it.`;
const magicKey = new Item("Sparkling Magic Key");
magicKey.description = `a tiny key made of pure gold, which has a sparkling blue gemstone embedded in the middle of it. It comes alive with a magical glow when you hold it in your hand.`;
const treasureChest = new Item("Treasure Chest");
treasureChest.description = `an immense treasure chest made of solid oak, which is covered in intricate carvings of dragons and other mythical creatures. It has been guarded by the dragon for many centuries. Do you have the right key to unlock it?`;

//ENVIRONMENT OBJECTS defined here
const tradingTown = new Environment("Dragonville");
tradingTown.description = `it is a fairly big medieval trading town with a few shops and a tavern in the main square of the town.`;
tradingTown.image = "https://c4.wallpaperflare.com/wallpaper/257/647/711/fantasy-art-digital-town-people-fantasy-architecture-hd-wallpaper-preview.jpg";
tradingTown.character = merchant;
const correctRoute1 = new Environment("Peaceful Forest");
correctRoute1.description = `it is a lush green forest with a small stream running through it full of mushrooms and berries`;
correctRoute1.image = "https://cdn1.epicgames.com/ue/product/Featured/FantasyForestEnvironment_featured-894x488-43e95910bb1a42e45f170e35a54d1823.png";
const correctRoute2 = new Environment("Friendly Fairy's Cabin");
correctRoute2.description = `it is a small cosy Fairy's living room filled with colourful flowers and various knickknacks on the shelves`;
correctRoute2.image = "https://i.pinimg.com/originals/02/c5/59/02c559edd236ffefc44c98e7a7e5617a.jpg";
correctRoute2.character = fairy;
// correctRoute2.item = magicKey;
const correctRoute3 = new Environment("Waterfall");
correctRoute3.description = `it is a fantasy waterfall with a small pool at the bottom blooming with exotic flowers`;
correctRoute3.image = "https://c4.wallpaperflare.com/wallpaper/522/706/519/fantasy-landscape-lake-waterfall-hd-wallpaper-preview.jpg";
const incorrectRoute1 = new Environment("Terrifying Forest");
incorrectRoute1.description = "it is a dark and gloomy forest with trees covered in moss and spider webs";
incorrectRoute1.image = "https://i.pinimg.com/originals/bf/1d/16/bf1d1605e62b31685316fa5ab1f7a32d.jpg";
const incorrectRoute2 = new Environment("Evil Witch's Castle");
incorrectRoute2.description = `it is a luxiurious, but menacing room in the castle with a massive painting of its owner and a large ornatebed`;
incorrectRoute2.image = "https://i.pinimg.com/originals/42/33/a1/4233a17feb986420ecd5e248827ad31f.jpg";
incorrectRoute2.character = witch;
// incorrectRoute2.item = rustyKey;
const incorrectRoute3 = new Environment("Graveyard");
incorrectRoute3.description = `it is a creepy graveyard with tombstones and a crows swarming around`;
incorrectRoute3.image = "https://cdna.artstation.com/p/assets/images/images/002/748/540/large/yang-qi-.jpg?1465263258";
const dragonLair = new Environment("Dragon's Lair");
dragonLair.description = `it is a red-flame lit cave lined with treasure and skeletons of those who have tried to steal it from the Dragon`;
dragonLair.image = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7499d872-919e-49d2-b98c-29be33df9d4c/d7xo86x-84a88c18-8dee-4d49-b957-c37b179320e8.jpg/v1/fill/w_1024,h_589,q_75,strp/dragon_s_lair_by_grosnez_d7xo86x-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTg5IiwicGF0aCI6IlwvZlwvNzQ5OWQ4NzItOTE5ZS00OWQyLWI5OGMtMjliZTMzZGY5ZDRjXC9kN3hvODZ4LTg0YTg4YzE4LThkZWUtNGQ0OS1iOTU3LWMzN2IxNzkzMjBlOC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zjjEGvyy5PrcBWJV_KCFDVd_yUQcKTPsFRKFPBHO97g";
dragonLair.character = dragon;
//dragonLair.item = treasureChest;


//Link the environments together
tradingTown.linkEnvironment("east", correctRoute1);
tradingTown.linkEnvironment("west", incorrectRoute1);
correctRoute1.linkEnvironment("west", tradingTown);
incorrectRoute1.linkEnvironment("east", tradingTown);
correctRoute2.linkEnvironment("south", correctRoute1);
correctRoute1.linkEnvironment("north", correctRoute2);
correctRoute3.linkEnvironment("south", correctRoute2);
correctRoute2.linkEnvironment("north", correctRoute3);
incorrectRoute2.linkEnvironment("south", incorrectRoute1);
incorrectRoute1.linkEnvironment("north", incorrectRoute2);
incorrectRoute3.linkEnvironment("south", incorrectRoute2);
incorrectRoute2.linkEnvironment("north", incorrectRoute3);
dragonLair.linkEnvironment("east", correctRoute3);
correctRoute3.linkEnvironment("west", dragonLair);
dragonLair.linkEnvironment("west", incorrectRoute3);
incorrectRoute3.linkEnvironment("east", dragonLair);


//Riddles object
// const riddles = [
//   {
//       question: "What is more useful when it is broken?",
//       answer1:   "A sword",
//       answer2:   "An egg",
//       answer3:   "A nose",
//       correctAnswer: "An egg",
//   },
//   {
//       question: "What belongs to you, but other people use it more than you?",
//       answer1:   "Your house",
//       answer2:   "Your backpack",
//       answer3:   "Your name",
//       correctAnswer: "Your name",
//   },
//   {
//     question: "You have me today, Tomorrow you'll have more; As your time passes, I'm not easy to store; I don't take up space, But I'm only in one place; I am what you saw, But not what you see. What am I?",
//     answer1:   "Time",
//     answer2:   "Memories",
//     answer3:   "Money",
//     correctAnswer: "Memories",
// },
// ]

//let currentRiddle = 0;
// let shownRiddle = riddles[currentRiddle]

// loadRiddle()

// function loadRiddle() {
//     deselectAnswers()

//     const shownRiddle = quizQuestions[currentQuizIndex]

//     question.innerText = shownRiddle.question
//     answer1.innerText = shownRiddle.answer1
//     answer2.innerText = shownRiddle.answer2
//     answer3.innerText = shownRiddle.answer3
// };

  
// let bossAttack = 0;

//Subroutine to display information about the current environment

function displayEnvironmentInfo(environment) {


  let occupantMsg = ""
  
  //let bossMsg = ""

  if (environment.character === "") {
    occupantMsg = ""
  } else {
    occupantMsg = environment.character.describe() + ". " + environment.character.converse() // SOMETHING IS BROKEN HERE - ENVIRONMENTS WITH CHARACTERS DON'T LOAD
    // environment.item.itemAlert()
   if ( environment.character.ability === undefined ) {
    bossMsg = ""
    } else {
    //   for (let i = 0, i < bossAttack.length; i++) {
    //     console.log(bossAttack[i])
      bossMsg = "<br>" + "<h2>" + environment.character.name + " attacks you with " + environment.character.ability + "! </h2>";
    //    console.log( bossAttack[i] + " is the SPECIAL ability of this boss!" );
    //   }
    // }
    // bossMsg = "<br>" + "<h2>" + environment.character.name + " attacks you with " + bossAttack + "! </h2>";
    }
  }
  textContent = "<p>" + environment.describe() + "</p>" + "<p>" + occupantMsg + "</p>" + "<p>" + environment.getDetails() + "</p>" + bossMsg;

  document.getElementById("textarea").innerHTML = textContent;
  document.getElementById("buttonarea").innerHTML = '><input type="text" class="text-center p-2 m-3" id="usertext" placeholder="Enter your choice here" onfocus="inputFocus()" />';
  document.getElementById("usertext").focus();
}

// Subroutine to complete inital game set up then handle commands from the user

function startGame() {
  //set and display start environment
  currentEnvironment = tradingTown
  console.log(currentEnvironment)
  displayEnvironmentInfo(currentEnvironment);


  //handle commands
  //We are adding an event listener to entire document view
  document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

      command = document.getElementById("usertext").value;
      const directions = ["north", "south", "east", "west"]

      if (directions.includes(command.toLowerCase())) {

        currentEnvironment = currentEnvironment.move(command)
        displayEnvironmentInfo(currentEnvironment);
        document.getElementById("image-holder").src = currentEnvironment.image;

      } else {

        document.getElementById("usertext").value = ""
        alert("That is not a valid command, please try again.")

      }
    }
  });
}

startGame();

//JS STYLING - Function that adds background color to the input element on focus
const inputStyle = document.getElementById("usertext").style

function inputFocus() {
    inputStyle.backgroundImage = "linear-gradient(90deg, rgb(255, 232, 164) 0%, rgb(255, 252, 238) 25%, rgb(255, 254, 250) 65%, rgb(249, 237, 178) 100%)";
    inputStyle.border = "3px solid black";
  }