"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterList = void 0;
var species;
(function (species) {
    species["wookie"] = "Wookie";
    species["twilek"] = "TWI'LEK";
    species["humanoid"] = "homanoid";
    species["human"] = "human";
    species["none"] = "none";
    species["unknown"] = "unknown";
})(species || (species = {}));
var characterClass;
(function (characterClass) {
    characterClass["droid"] = "droid";
    characterClass["stormtrooper"] = "storm trooper";
    characterClass["none"] = "none";
    characterClass["jedi"] = "Jedi";
    characterClass["sith"] = "Sith";
})(characterClass || (characterClass = {}));
var aliance;
(function (aliance) {
    aliance["rebbel"] = "rebels";
    aliance["empire"] = "empire";
    aliance["republic"] = "republic";
    aliance["none"] = "none";
})(aliance || (aliance = {}));
var world;
(function (world) {
    world["unkown"] = "unkown";
    world["tatooine"] = "Tatooine";
    world["kashyyyk"] = " Kashyyyk";
    world["jakku"] = "Jakku";
    world["corellia"] = "Corellia";
    world["ryloth"] = "Ryloth";
    world["socorro"] = "Socorro";
    world["polismassa"] = " Polis Massa";
    world["haruunkal"] = " Haruun Kal";
    world["stewjon"] = "Stewjon";
    world["naboo"] = "Naboo";
    world["yavin4"] = "Yavin IV";
    world["coruscant"] = "Coruscant";
})(world || (world = {}));
exports.characterList = [
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
        aliance: aliance.rebbel
    },
    {
        name: "Luke Skywalker",
        class: characterClass.jedi,
        species: species.human,
        homeworld: world.polismassa,
        aliance: aliance.rebbel
    },
    {
        name: "Mace Windu",
        class: characterClass.jedi,
        species: species.human,
        homeworld: world.haruunkal,
        aliance: aliance.republic
    },
    {
        name: "Obi-Wan Kenobi",
        class: characterClass.jedi,
        species: species.human,
        homeworld: world.stewjon,
        aliance: aliance.rebbel
    },
    {
        name: "Padmé Amidala",
        class: characterClass.none,
        species: species.human,
        homeworld: world.naboo,
        aliance: aliance.rebbel
    },
    {
        name: "Poe Dameron",
        class: characterClass.none,
        species: species.human,
        homeworld: world.yavin4,
        aliance: aliance.rebbel
    },
    {
        name: "Qui-Gon Jinn",
        class: characterClass.jedi,
        species: species.human,
        homeworld: world.coruscant,
        aliance: aliance.rebbel
    },
    {
        name: "R2-D2",
        class: characterClass.droid,
        species: species.none,
        homeworld: world.unkown,
        aliance: aliance.rebbel
    },
    {
        name: "Rey Skywalker",
        class: characterClass.jedi,
        species: species.human,
        homeworld: world.jakku,
        aliance: aliance.rebbel
    },
    {
        name: "Yoda",
        class: characterClass.jedi,
        species: species.unknown,
        homeworld: world.unkown,
        aliance: aliance.rebbel
    },
];
