const { Command } = require('discord.js-commando');
const { MessageSay } = require('../../utils/logger');
const { Firebase } = require('../../db/firebase');

module.exports = class UptimeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'profile',
			memberName: 'profile',
			group: 'profile',
			description: 'View a profile. `!profile [user]`',
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
		if (user && user.substring(0, 1) !== '<') {
			MessageSay(message, this.name, 'Please tag a user');
			return;
		}

		const userID = user
			? user.substring(3, user.length - 1)
			: message.author.id;

		Firebase.getConnections(userID).then((doc) => {
			const profile = user ? user : `<@!${message.author.id}>`;
			const github = doc
				? 'https://github.com/' + doc.data.github
				: 'Not added yet';
			const linkedin = doc
				? 'https://linkedin.com/ln/' + doc.data.linkedin
				: 'Not added yet';

			MessageSay(message, this.name, `${profile}'s Connections`);
			MessageSay(message, this.name, {
				embed: {
					fields: [
						{
							name: 'GitHub',
							value: `${github}`
						},
						{
							name: 'LinkedIn',
							value: `${linkedin}`
						}
					]
				}
			});
		});
	}
};
