const { Command } = require('discord.js-commando');
const { MessageSay } = require('../../utils/logger');

module.exports = class UptimeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'findauser',
			memberName: 'findauser',
			group: 'connect',
			description:
				'Pings a random person for you to introduce yourself to.'
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
		MessageSay(
			message,
			this.name,
			`${message.author}, you should connect with <@${user.id}>`
		);
	}
};
