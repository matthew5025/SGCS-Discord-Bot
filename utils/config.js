const Config = require('../settings/config.json');

function loadConfig() {
	let node_env = process.env.NODE_ENV;
	return Config[node_env];
}
module.exports = {
	Config: loadConfig()
};
