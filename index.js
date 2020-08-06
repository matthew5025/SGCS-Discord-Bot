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
    .registerGroups([])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'))

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)

    client.user.setActivity(`${prefix}help`, {
        type: 'LISTENING',
        url: 'https://github.com/dallas-ng',
    })
})

client.on('message', (msg) => {
    if (msg.content === 'ping') {
        msg.reply('Pong!')
    }
})

client.login(token)
