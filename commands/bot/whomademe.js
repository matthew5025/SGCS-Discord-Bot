const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');
const { contributors } = require('../../settings/data.json');
const { githubToken } = require('../../settings/config.json');
const { MessageSay } = require('../../utils/logger');

module.exports = class WhoMadeMeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'whomademe',
			aliases: ['bot-maker', 'bot-creator'],
			memberName: 'whomademe',
			group: 'bot',
			description: 'Replies with the bot creator\'s name.',
		});
	}

	async run(message) {
		try {
			await fetch(
				'https://api.github.com/repos/Dallas-Ng/SGCS-Discord-Bot/collaborators',
				{
					method: 'get',
					headers: {
						Authorization: 'token ' + githubToken,
					},
				}
			)
				.then((res) => res.json())
				.then((data) => {
					let collaborators = [];

					if (data.message == 'Not Found') {
						collaborators = contributors;
					} else {
						data.forEach((obj) => collaborators.push(obj.login));
					}

					return MessageSay(
						message,
						this.name,
						`This bot is made by the following contributors (GitHub Usernames): \n${collaborators
							.join(', ')
							.toString()}`
					);
				});
		} catch (e) {
			return MessageSay(
				message,
				this.name,
				`This bot is made by the following contributors (GitHub Username): \n${contributors
					.join(', ')
					.toString()}`
			);
		}
	}
};
