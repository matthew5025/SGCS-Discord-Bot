const { Command } = require('discord.js-commando');
const { MessageSay } = require('../../utils/logger');
const { Firebase } = require('../../db/firebase');

module.exports = class UptimeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'connect',
			memberName: 'connect',
			group: 'profile',
			description: 'Connect your github or linkedin profile.',
			examples: ['connect linkedin', 'connect github'],
			args: [
				{
					key: 'type',
					prompt:
						'Please provide the type of account (linkedin/github)',
					type: 'string',
					oneOf: ['linkedin', 'github']
				},
				{
					key: 'publicURL',
					prompt:
						'Please provide the public url (without the domain information)\n```https://github.com/dallas-ng #Example URL\n> dallas-ng```',
					type: 'string'
				}
			]
		});
	}

	run(message, { type, publicURL }) {
		Firebase.addConnection(message.author.id, {
			type,
			publicURL
		});

		MessageSay(message, this.name, 'Successfully updated profile');
	}
};
