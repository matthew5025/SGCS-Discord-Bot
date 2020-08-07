const { Command } = require('discord.js-commando');
const { MessageSay } = require('../../utils/logger');
const { Firebase } = require('../../db/firebase');

module.exports = class UptimeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'profile',
			memberName: 'profile',
			group: 'profile',
			description: 'View your profile.',
			args: [
				{
					key: 'user',
					prompt: 'Give me a user',
					type: 'string',
					default: ''
				}
			]
		});
	}

	run(message, { user }) {
		const userID = user
			? user.substring(3, user.length - 1)
			: message.author.id;

		Firebase.getConnections(userID).then((doc) => {
			const profile = user ? user : `<@!${message.author.id}>`;
			const github = doc ? doc.data.github : 'Not added yet';
			const linkedin = doc ? doc.data.linkedin : 'Not added yet';

			MessageSay(message, this.name, `${profile}'s Connections`);
			MessageSay(message, this.name, {
				embed: {
					fields: [
						{
							name: 'GitHub',
							value: `https://github.com/${github}`
						},
						{
							name: 'LinkedIn',
							value: `https://linkedin.com/ln/${linkedin}`
						}
					]
				}
			});
		});
	}
};
