module.exports = {
	MessageSay: function (message, command, text) {
		let currentDate = '[' + new Date().toLocaleString() + ']';
		console.log(
			`${currentDate} ${message.author.tag} ran "${command}" command`
		);

		return message.say(text);
	}
};
