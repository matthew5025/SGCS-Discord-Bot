const { Command } = require('discord.js-commando');
const { MessageSay } = require('../../utils/logger');

module.exports = class UptimeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'opensource',
			aliases: ['license', 'repo'],
			memberName: 'opensource',
			group: 'bot',
			description:
				"More information about this bot's license and open source status."
		});
	}
	run(message) {
		return MessageSay(
			message,
			this.name,
			'The bot is currently under MIT license.\nGitHub Link: https://github.com/Dallas-Ng/SGCS-Discord-Bot'
		);
	}
};
