<img src="https://badgen.net/badge/license/MIT/blue">

<p>&nbsp;</p>

<p align="center">
  <img height="300" src="https://i.imgur.com/3A1jZLo.png" alt="Seams Logo">

</p>

## Installation
**Node.js 12.0.0 or newer is required.**
```sh
>>> node -v
>>> v12.16.3
```

<br/>

This project is configured to allow both yarn and npm.

**Create a config.json file under /settings/**
```js
// You need both production and development objects.
// They can be the exact same variables
{
    "production": {
        "prefix": "!",
        "token": "",
        "discord_owner_id": "",
        "serverID": "",
        "inviteLink": "",
        "githubToken": "",
        // https://firebase.google.com/docs/admin/setup#initialize-sdk
        "firebaseAdmin": {
	        "type": "",
	        "project_id": "",
	        "private_key_id": "",
	        "private_key": "",
	        "client_email": "",
	        "client_id": "",
	        "auth_uri": "",
	        "token_uri": "",
	        "auth_provider_x509_cert_url": "",
	        "client_x509_cert_url": ""
		},
		"firebaseDBUrl": ""
    },
    "development": {
        "prefix" : "$"
        "..." : "the production keys"
    }
}

```

**To run the bot**

The difference between ```yarn start``` and ```yarn dev``` is that ```start``` uses node and ```dev``` uses nodemon.

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
    └── package.json       # Packaged dependencies managed by NPM
```

**yarn.lock and package-lock.json**

For the package-lock files, they should not be commited/pushed into any branches. This is to allow both yarn and npm to be used on this project.

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
