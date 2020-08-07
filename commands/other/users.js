const { Command } = require('discord.js-commando');
const { MessageSay } = require('../../utils/logger');

module.exports = class UptimeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'users',
            aliases: ['members'],
            memberName: 'users',
            group: 'other',
            description: 'Replies with the amount of users in the server.',
        });
    }
    run(message) {
        // Minus 2 because server and bot takes a space each.
        const amountOfUsers = this.client.users.cache.size - 2;
        const amountOfUsersOnline = this.client.guilds.cache.size;

        return MessageSay(
            message,
            this.name,
            `There are currently **${amountOfUsers}** members (**${amountOfUsersOnline}** currently online).`
        );
    }
};
