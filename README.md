# StarWarsRestApi

This REST api lists Star Wars characters and some additional information in JSON.

## Start the service localy

You can use:
`yarn serve`
or
`npm run serve`

## Method: AllCharacters

Url: xyz:1234/AllCharacters

This method returns you a list of character JSON objects.
`{ name: "name of character", race: "race of character" }`

## Project setup

`npm init`

`npm install typescript`

`npx tsc --init`

`npm install express @types/express`

The build output directory in the tsconfig.json should be "./build"

Update the project.json with the following values
`"scripts": { "serve": "tsc && node build/server.js", "tsc": "tsc", ...`
