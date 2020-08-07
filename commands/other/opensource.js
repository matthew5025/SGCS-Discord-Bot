const { Command } = require('discord.js-commando');
const { MessageSay } = require('../../utils/logger');

module.exports = class UptimeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'opensource',
            memberName: 'opensource',
            group: 'other',
            description:
                "More information about this bot's license and open source status.",
        });
    }
    run(message) {
        return MessageSay(
            message,
            this.name,
            'This bot is currently under the MIT license. The repository is currently not open-sourced but it will be in the future to allow for everyone to build on top of it.'
        );
    }
};
