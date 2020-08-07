<img src="https://badgen.net/badge/license/MIT/blue">

<p>&nbsp;</p>

<p align="center">
  <img height="300" src="https://i.imgur.com/3A1jZLo.png" alt="Seams Logo">

</p>

## Installation
**Node.js 12.0.0 or newer is required.**

This project is configured to allow both yarn and npm.

**Create a config.json file under /settings/**
```js
// Both production and development settings can be the exact same
{
    "production": {
        "prefix": "!",
        "token": "YOUR_TOKEN",
        "discord_owner_id": "YOUR OWNER ID",
        "serverID": "YOUR SERVER ID",
        "inviteLink": "https://discord.gg/eXqcbDp",
        "githubToken": "YOUR GITHUB TOKEN" // Not neccessary
    },

    "development": {
       "prefix": "!",
        "token": "YOUR_TOKEN",
        "discord_owner_id": "YOUR OWNER ID",
        "serverID": "YOUR SERVER ID",
        "inviteLink": "https://discord.gg/eXqcbDp",
        "githubToken": "YOUR GITHUB TOKEN" // Not neccessary
    }
}

```

**To run the bot**

The difference between ```yarn start``` and ```yarn dev``` is that ```start``` uses node and ```dev``` uses nodemon (Nodemon allows for reloading).

```sh
yarn
yarn start
yarn dev
# or
npm i
npm start
npm dev
```

## Project

**Project Structure**

```
repo/
    ├── .github                 # Github actions YAML files
    ├── commands                # Bot commands
    ├── node_modules
    ├── settings                # Config.json and Data.json
    ├── utils
    | 
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc.json
    ├── index.js
    └── package-lock.json       # Packaged dependencies managed by NPM
```

**Linting**

For our application, we have a main linter (eslint) and a code formatter (prettier). The configuration for both are included into the development files already. If you are using VScode, it should piroritize those files over your existing settings. If you are using a different editor, please check if it is linting properly.


```sh
yarn lint
#or
npm lint
```


## Contributing
There is no contributing guidelines right now but please submit a pull-request or create an issue with the proper content.

Submitted codes should be linted beforehand.

## License MIT
https://tldrlegal.com/license/mit-license
