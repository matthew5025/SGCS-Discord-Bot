const { CommandoClient } = require('discord.js-commando')
const path = require('path')
const { token, prefix, discord_owner_id } = require('./config.json')

const client = new CommandoClient({
    commandPrefix: prefix,
    owner: discord_owner_id,
    invite: 'https://discord.gg/eXqcbDp',
})

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['connect', 'Commands to connect you with others'],
        ['other', 'Other types of commands'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({ eval: false, prefix: false })
    .registerCommandsIn(path.join(__dirname, 'commands'))

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)

    client.user.setActivity(`${prefix}help`, {
        type: 'LISTENING',
        url: 'https://github.com/dallas-ng',
    })
})

client.login(token)
