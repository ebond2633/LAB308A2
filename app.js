//Part One
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
      },
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    },
  };
  
  //Part Two
  class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
      return result;
    }
  }
  
  // const robin = new Character("Robin");
  // robin.inventory = ["sword", "potion", "artifact"];
  // robin.companion = new Character("Leo");
  // robin.companion.type = "Cat";
  // robin.companion.companion = new Character("Frank");
  // robin.companion.companion.type = "Flea";
  // robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // robin.roll();
  // robin.companion.roll();
  // robin.companion.companion.roll();
  
  //Part 3
  class Adventurer extends Character {
    static MAX_HEALTH = 100;
    static ROLES = ["Fighter", "Healer", "Wizard"];
    constructor(name, role) {
      super(name);
      // if (this.roleMatches(role)) {
      //   this.role = role;
      // } else {
      //   this.role = this.ROLES[0];
      // }
  
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
      console.log(this.ROLES);
    }
  
    roleMatches(role) {
      const result = false;
      this.ROLES.forEach((element) => {
        if (element === role) {
          result = true;
        }
      });
  
      return result;
    }
  
    duel(adventurer) {
      const myroll = super.roll();
      const enemyroll = adventurer.roll();
      if (myroll > enemyroll) {
        adventurer.health -= 1;
        console.log(
          `${this.name} rolled higher than ${adventurer.name}, ${adventurer.name} loses 1 health point`
        );
        console.log(`${adventurer.name} health is now ${adventurer.health}`);
      } else {
        this.health -= 1;
        console.log(
          `${adventurer.name} rolled higher than ${this.name}, ${this.name} loses 1 health point`
        );
        console.log(`${this.name} health is now ${this.health}`);
      }
    }
  }
  
  class Companion extends Character {
    constructor(name, type) {
      super(name);
  
      this.type = type;
    }
  
    assist() {
      console.log(`${this.name} is helping `);
      super.roll();
    }
  }
  
  // const robin = new Adventurer("Robin", "Scout");
  // robin.inventory = ["sword", "potion", "artifact"];
  // robin.companion = new Companion("Leo");
  // robin.companion.type = "Cat";
  // robin.companion.companion = new Companion("Frank");
  // robin.companion.companion.type = "Flea";
  // robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // robin.scout();
  // robin.companion.assist();
  // robin.companion.companion.assist();
  
  //Part 5
  
  class AdventurerFactory {
    constructor(role) {
      this.role = role;
      this.adventurers = [];
    }
  
    generate(name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
  
    findByIndex(index) {
      return this.adventurers[index];
    }
  
    findByName(name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");
  
  const peter = healers.generate("Peter");
  
  function duelSim(adventurer1, adventurer2) {
    while (adventurer1.health > 50 && adventurer2.health > 50) {
      adventurer1.duel(adventurer2);
    }
  
    const winner =
      adventurer1.health > adventurer2.health
        ? adventurer1.name
        : adventurer2.name;
  
    return `${winner} is the winner`;
  }
  
  console.log(duelSim(healers.adventurers[0], healers.adventurers[1]));
