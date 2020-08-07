const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const { Config } = require('./utils/config');
const { StartSelfAssignRoleEmbed } = require('./utils/reaction');

const client = new CommandoClient({
    commandPrefix: Config.prefix,
    owner: Config.discord_owner_id,
    invite: Config.inviteLink,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['bot', "Commands related to the bot's information"],
        ['connect', 'Commands to connect you with others'],
        ['other', 'Other types of commands'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({ eval: false, prefix: false })
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setActivity(`${Config.prefix}help`, {
        type: 'LISTENING',
        url: 'https://github.com/dallas-ng',
    });
});

StartSelfAssignRoleEmbed(client, Config.serverID);

client.login(Config.token);
