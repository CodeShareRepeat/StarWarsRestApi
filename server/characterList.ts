interface character {
  name: string;
  class: characterClass;
  species: species;
  homeworld: world;
  aliance: aliance;
}

enum species {
  wookie = "Wookie",
  twilek = "TWI'LEK",
  humanoid = "homanoid",
  human = "human",
  none = "none",
  unknown = "unknown",
}

enum characterClass {
  droid = "droid",
  stormtrooper = "storm trooper",
  none = "none",
  jedi = "Jedi",
  sith = "Sith",
}

enum aliance {
  rebbel = "rebels",
  empire = "empire",
  republic = "republic",
  none = "none",
}

enum world {
  unkown = "unkown",
  tatooine = "Tatooine",
  kashyyyk = " Kashyyyk",
  jakku = "Jakku",
  corellia = "Corellia",
  ryloth = "Ryloth",
  socorro = "Socorro",
  polismassa = " Polis Massa",
  haruunkal = " Haruun Kal",
  stewjon = "Stewjon",
  naboo = "Naboo",
  yavin4 = "Yavin IV",
  coruscant = "Coruscant",
}

export let characterList: character[] = [
  {
    name: "Anakin Skywalker (later: Darth Vader)",
    class: characterClass.jedi,
    species: species.human,
    homeworld: world.tatooine,
    aliance: aliance.republic,
  },
  {
    name: "BB-8",
    class: characterClass.droid,
    species: species.none,
    homeworld: world.unkown,
    aliance: aliance.rebbel,
  },
  {
    name: "C-3PO",
    class: characterClass.droid,
    species: species.none,
    homeworld: world.tatooine,
    aliance: aliance.rebbel,
  },
  {
    name: "Chewbacca",
    class: characterClass.none,
    species: species.wookie,
    homeworld: world.kashyyyk,
    aliance: aliance.rebbel,
  },
  {
    name: "Finn / FN-2187",
    class: characterClass.stormtrooper,
    species: species.human,
    homeworld: world.unkown,
    aliance: aliance.rebbel,
  },
  {
    name: "Han Solo",
    class: characterClass.none,
    species: species.human,
    homeworld: world.corellia,
    aliance: aliance.rebbel,
  },
  {
    name: "Lando Calrissian",
    class: characterClass.none,
    species: species.human,
    homeworld: world.socorro,
    aliance: aliance.rebbel,
  },
  {
    name: "Princess Leia Organa",
    class: characterClass.jedi,
    species: species.human,
    homeworld: world.polismassa,
    aliance: aliance.rebbel,
  },
  {
    name: "Luke Skywalker",
    class: characterClass.jedi,
    species: species.human,
    homeworld: world.polismassa,
    aliance: aliance.rebbel,
  },
  {
    name: "Mace Windu",
    class: characterClass.jedi,
    species: species.human,
    homeworld: world.haruunkal,
    aliance: aliance.republic,
  },
  {
    name: "Obi-Wan Kenobi",
    class: characterClass.jedi,
    species: species.human,
    homeworld: world.stewjon,
    aliance: aliance.rebbel,
  },
  {
    name: "Padmé Amidala",
    class: characterClass.none,
    species: species.human,
    homeworld: world.naboo,
    aliance: aliance.rebbel,
  },
  {
    name: "Poe Dameron",
    class: characterClass.none,
    species: species.human,
    homeworld: world.yavin4,
    aliance: aliance.rebbel,
  },
  {
    name: "Qui-Gon Jinn",
    class: characterClass.jedi,
    species: species.human,
    homeworld: world.coruscant,
    aliance: aliance.rebbel,
  },
  {
    name: "R2-D2",
    class: characterClass.droid,
    species: species.none,
    homeworld: world.unkown,
    aliance: aliance.rebbel,
  },
  {
    name: "Rey Skywalker",
    class: characterClass.jedi,
    species: species.human,
    homeworld: world.jakku,
    aliance: aliance.rebbel,
  },
  {
    name: "Yoda",
    class: characterClass.jedi,
    species: species.unknown,
    homeworld: world.unkown,
    aliance: aliance.rebbel,
  },
];
