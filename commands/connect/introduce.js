const { Command } = require('discord.js-commando');
const util = require('../../utils');

module.exports = class UptimeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'connect',
            memberName: 'connect',
            group: 'connect',
            description: 'Connect with a random person.',
        });
    }

    getUser(authorId) {
        let users = Array.from(this.client.users.cache);
        let user =
            users[Math.floor(Math.random() * this.client.users.cache.size)][1];

        if (user.bot == true || authorId == user.id) {
            return this.getUser(authorId);
        }

        return user;
    }

    run(message) {
        const user = this.getUser(message.author.id);

        util.LogCommand(message, this.name);

        return message.say(
            `${message.author}, you should connect with <@${user.id}>`
        );
    }
};
