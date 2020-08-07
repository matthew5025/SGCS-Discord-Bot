const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const { token, prefix, discord_owner_id } = require('./config.json');
const { Message } = require('discord.js');

const client = new CommandoClient({
    commandPrefix: prefix,
    owner: discord_owner_id,
    invite: 'https://discord.gg/eXqcbDp',
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

    client.user.setActivity(`${prefix}help`, {
        type: 'LISTENING',
        url: 'https://github.com/dallas-ng',
    });
});

client.on('ready', () => {
    const embed = {
        fields: [
            {
                name: '🟣 University',
                value: '\u200b',
                inline: true,
            },
            {
                name: '🟠 Polytechnic',
                value: '\u200b',
                inline: true,
            },
            {
                name: '🟡 Others',
                value: '\u200b',
                inline: true,
            },
        ],
        footer: {
            text: '❌Clear Roles',
        },
    };

    // channel = client.channels.cache.get('740943163966881803');
    // channel.send({ embed: embed }).then((message) => {
    //     message.react('🟣');
    //     message.react('🟠');
    //     message.react('🟡');
    //     message.react('❌');
    // });
});

client.on('messageReactionAdd', async (reaction, user) => {
    // const emoji = [],
    //     role = [];
    if (reaction.message.partial) await reaction.message.fetch();
    if (user.bot) return;

    // Now the message has been cached and is fully available:
    const guild = client.guilds.cache.get('740778577825497098');
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

    let role;
    if (reaction.emoji.name == '🟣') {
        role = guild.roles.cache.get('740948426774020128');
        member.roles.add(role);
    } else if (reaction.emoji.name == '🟠') {
        role = guild.roles.cache.get('740948420759650324');
        member.roles.add(role);
    } else if (reaction.emoji.name == '🟡') {
        role = guild.roles.cache.get('740948429022167040');
        member.roles.add(role);
    } else if (reaction.emoji.name == '❌') {
        role = guild.roles.cache.get('740948426774020128');
        member.roles.remove(role);
        role = guild.roles.cache.get('740948420759650324');
        member.roles.remove(role);
        role = guild.roles.cache.get('740948429022167040');
        member.roles.remove(role);
    }
});
client.login(token);
