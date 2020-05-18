# StarWarsRestApi

This REST api lists Star Wars characters and some additional information.

u can use it for testing.

## Method GetAllCharacters

This method returns you a list of character JSON objects.
`{ name: "name of character", race: "race of character" }`

## project setup

`npm init`
`npm install typescript`
`npx tsc --init`
`npm install express @types/express`

the build output directory in the tsconfig.json should be "build"

update the project.json with the following values
`"scripts": { "serve": "tsc && node build/server.js", "tsc": "tsc",`
