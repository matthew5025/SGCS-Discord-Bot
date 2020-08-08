const { Command } = require('discord.js-commando');
const { MessageSay } = require('../../utils/logger');

module.exports = class UptimeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'invite',
			memberName: 'invite',
			group: 'other',
			description: 'Replies with the permanent discord link'
		});
	}
	run(message) {
		return MessageSay(
			message,
			this.name,
			'This is the link:\nhttps://discord.gg/eXqcbDp'
		);
	}
};
