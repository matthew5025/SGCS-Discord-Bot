const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const { Config } = require('./utils');

const client = new CommandoClient({
    commandPrefix: Config.prefix,
    owner: Config.discord_owner_id,
    invite: Config.inviteLink,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
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

// Load role changer embed if needed
// client.on('ready', () => {
//     const embed = {
//         title: 'Self-assign your role here',
//         fields: [
//             {
//                 name: '🟣 University',
//                 value: '\u200b',
//                 inline: true,
//             },
//             {
//                 name: '🟠 Polytechnic',
//                 value: '\u200b',
//                 inline: true,
//             },
//             {
//                 name: '🟡 Working',
//                 value: '\u200b',
//                 inline: true,
//             },
//         ],
//         footer: {
//             text: '❌Clear Roles',
//         },
//     };

//     channel = client.channels.cache.get('740943163966881803');
//     channel.send({ embed: embed }).then((message) => {
//         message.react('🟣');
//         message.react('🟠');
//         message.react('🟡');
//         message.react('❌');
//     });
// });

client.on('messageReactionAdd', async (reaction, user) => {
    const emoji = ['🟣', '🟠', '🟡'];
    const role = [
        '740948426774020128',
        '740948420759650324',
        '740948429022167040',
    ];

    if (reaction.message.partial) await reaction.message.fetch();
    if (user.bot) return;

    const guild = client.guilds.cache.get(Config.serverID);
    const member = guild.members.cache.get(user.id);

    const userReactions = reaction.message.reactions.cache.filter((reaction) =>
        reaction.users.cache.has(user.id)
    );

    try {
        for (const reaction of userReactions.values()) {
            await reaction.users.remove(user.id);
        }
    } catch (error) {
        console.error(error);
    }

    // Valid Reaction
    if (emoji.includes(reaction.emoji.name)) {
        member.roles.add(role[emoji.indexOf(reaction.emoji.name)]);
    }

    // Remove all existing roles
    if (reaction.emoji.name == '❌') {
        role.forEach((roleId) => member.roles.remove(roleId));
    }
});

client.login(Config.token);
