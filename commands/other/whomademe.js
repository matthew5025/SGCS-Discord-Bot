const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');
const { contributors } = require('../../data.json');
const { githubToken } = require('../../config.json');

module.exports = class WhoMadeMeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'whomademe',
            aliases: ['bot-maker', 'bot-creator'],
            memberName: 'whomademe',
            group: 'other',
            description: "Replies with the bot creator's name",
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

                    return message.say(
                        `This bot is made by the following contributors (GitHub Usernames): \n${collaborators
                            .join(', ')
                            .toString()}`
                    );
                });
        } catch (e) {
            return message.say(
                `This bot is made by the following contributors (GitHub Username): \n${contributors
                    .join(', ')
                    .toString()}`
            );
        }
    }
};
