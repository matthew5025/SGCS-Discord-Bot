const { Command } = require('discord.js-commando');
const { MessageSay } = require('../../utils/logger');

module.exports = class UptimeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'whatareyou',
            aliases: ['tech'],
            memberName: 'whatareyou',
            group: 'bot',
            description: "Information about this bot's technologies",
        });
    }
    run(message) {
        return MessageSay(
            message,
            this.name,
            `Hi ${message.author}, I am a discord bot build on Discord.js.`
        );
    }
};
