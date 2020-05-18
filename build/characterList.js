"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterList = void 0;
var typeOfCharacter;
(function (typeOfCharacter) {
    typeOfCharacter["human"] = "human";
    typeOfCharacter["jedi"] = "jedi";
    typeOfCharacter["sith"] = "sith lord";
    typeOfCharacter["droid"] = "droid";
    typeOfCharacter["stormtrooper"] = "Storm trooper";
})(typeOfCharacter || (typeOfCharacter = {}));
exports.characterList = [
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
