const Config = require('../settings/config.json');

function loadConfig() {
    const node_env = process.env.NODE_ENV || 'development';
    return Config[node_env];
}

module.exports = {
    Config: loadConfig(),
    MessageSay: function (message, command, text) {
        let currentDate = '[' + new Date().toLocaleString() + ']';
        console.log(
            `${currentDate} ${message.author.tag} ran "${command}" command`
        );

        return message.say(text);
    },
};
