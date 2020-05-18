interface character {
  name: string;
  type: typeOfCharacter;
}

enum typeOfCharacter {
  human = "human",
  jedi = "jedi",
  sith = "sith lord",
  droid = "droid",
  stormtrooper = "Storm trooper",
}

export let characterList: character[] = [
  {
    name: "Anakin Skywalker",
    type: typeOfCharacter.human,
  },
  {
    name: "BB-8",
    type: typeOfCharacter.droid,
  },
  {
    name: "C-3PO",
    type: typeOfCharacter.droid,
  },
];
