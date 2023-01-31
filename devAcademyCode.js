/*class Character {
    constructor(name, description, pronoun, conversation) {
        this._name = name;
        this._description = description;
        this._pronoun = pronoun;
        this._conversation = conversation;
    }
    describe() {
        return `${this._name} is ${this._description}.`;
    }
    talk() {
        return `${this._name} says ${this._conversation}`;
    }
}

const Shrek = new Character("Shrek", "big, fat, and green", "it", "Get out of my swamp!");
const Donkey = new Character("Donkey", "a talking donkey", "he", "I'm a donkey!");

const Kitchen = new Room("Kitchen", "There is spoilt food everywhere. The fridge is open and there is a dead body in the freezer.");
const LivingRoom = new Room("Living Room", "The room is messy and disorganised. Furniture is broken. There is a dead body on the couch.");

LivingRoom.linkRooms("north", Kitchen);
Kitchen.linkRooms("south", LivingRoom);

console.log(LivingRoom._linkedRooms);
console.log(Kitchen._linkedRooms);

class Room {
    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._linkedRooms = {};
    }
describe() {
    return this._description;
}
linkRooms() {
    this._linkedRooms[direction] = roomToLink;
}}

document.getElementById("textContent").innerHTML = Kitchen.describe();
//document.getElementById("currentRoom").innerHTML */

//Developer academy GitHub code

class Room {
    constructor(name) {
      this._name = name;
      this._description = "";
      this._linkedRooms = {};
      this._character = "";
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

    get image() {
        return this._image;
      }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("description is too short.");
        return;
      }
      this._description = value;
    }
  
    set character(value) {
      this._character = value;
    }

    set image(value) {
        this._image = value;
      }
  
    //a method to produce friendly room description

    describe() {
      return "Looking around the " + this._name + " you can see " + this._description;
    }
  
    //a method to add rooms to link rooms to this one. It does this by adding them to _linkedRooms

    linkRoom(direction, roomToLink) {
      this._linkedRooms[direction] = roomToLink;
    }
  
    //a method to produce friendly description of linked rooms

    getDetails() {
        //Getting the entries from the linked rooms objects
      const entries = Object.entries(this._linkedRooms);
      console.log(entries)
      //Initialise an empty array to store the details
      let details = []
 
      //Loop through the entries and add a description of each room to the details array so user can choose where to go

      for (const [direction, room] of entries) {
        let text = " The " + room._name + " is to the " + direction;
        details.push(text);
      }
      return details;
    }
  
    //a method to move the adventurer to a new room
    //method to move to a new room
    //Move will take in north, east, south, west

    //Input "north". Output: The room which is to the north of the current location.

    move(direction) {
      if (direction in this._linkedRooms) {
        return this._linkedRooms[direction];
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
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
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
  
  
  }
  
  class Character {
    constructor(name) {
      this._name = name,
        this._description = ""
      this._conversation = ""
    }
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("Decription is too short.");
        return;
      }
      this._description = value;
    }
  
    set conversation(value) {
      if (value.length < 4) {
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
      return "You have met " + this._name + ", " + this._name + " is " + this._description;
    }
  
    //a method to produce friendly conversation text
    converse() {
      return this._name + " says " + "'" + this._conversation + "'";
    }
  }
  
  //create the indiviual room objects and add their descriptions
  //Using our setters to ensure the data is valid and add descriptions
  const Kitchen = new Room("kitchen");
  Kitchen.description = "a long narrow room with worktops on either side and a large bench in the middle";
  const Lounge = new Room("lounge");
  Lounge.description = "a large room with two sofas and a large fire place";
  Lounge.image = "https://images.unsplash.com/photo-1624523258213-8d0049ba960f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNyZWVweSUyMHJvb218ZW58MHx8MHx8&w=1000&q=80";
  const GamesRoom = new Room("Games Room");
  GamesRoom.description = "a large room with a pool table at it's centre";
  GamesRoom.image = "https://e1.pxfuel.com/desktop-wallpaper/826/851/desktop-wallpaper-the-ring-horror-scary-creepy-spooky-ghost-dark-evil-art-artistic-video-games-rooms-shadow-silhouette-fantasy-halloween-and-mobile-backgrounds-scary-room.jpg";
  const Hall = new Room("hall");
  Hall.description = "a grand entrance hall with large paintings around the walls";
  
  //link the rooms together
  Kitchen.linkRoom("south", Lounge);
  Kitchen.linkRoom("east", Hall);
  Lounge.linkRoom("north", Kitchen);
  Lounge.linkRoom("east", GamesRoom);
  GamesRoom.linkRoom("west", Lounge);
  GamesRoom.linkRoom("north", Hall);
  Hall.linkRoom("south", GamesRoom);
  Hall.linkRoom("west", Kitchen);
  
   //Subroutine to display information about the current room
 
   function displayRoomInfo(room) {
    let occupantMsg = ""
    if (room.character === "") {
      occupantMsg = ""
    } else {
      occupantMsg = room.character.describe() + ". " + room.character.converse()
    }
  
    textContent = "<p>" + room.describe() + "</p>" + "<p>" +
      occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";
  
    document.getElementById("textarea").innerHTML = textContent;
    document.getElementById("buttonarea").innerHTML = '><input type="text" id="usertext" />';
    document.getElementById("usertext").focus();
  }
  
   // Subroutine to complete inital game set up then handle commands from the user

  function startGame() {
    //set and display start room
    currentRoom = Kitchen
    console.log (currentRoom)
    displayRoomInfo(currentRoom);
  
  
    //handle commands
    //We are adding an event listener to entire document view
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        command = document.getElementById("usertext").value;
        const directions = ["north", "south", "east", "west"]
        if (directions.includes(command.toLowerCase())) {
          currentRoom = currentRoom.move(command)
          displayRoomInfo(currentRoom);
       /*   if (currentRoom.actions.lenght  === 0) {
            return;
          } else {
            document.getElementById("userActions").innerHTML = "";
          }*/
          document.getElementById("image-holder").src = currentRoom.image;
        } else {
          document.getElementById("usertext").value = ""
          alert("that is not a valid command please try again")
        }
      }
    });
  }
  startGame();