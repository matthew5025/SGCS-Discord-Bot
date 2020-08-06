module.exports = {
    LogCommand: function (message, name) {
        let currentDate = '[' + new Date().toLocaleString() + ']'
        console.log(
            `${currentDate} ${message.author.tag} ran "${name}" command`
        )
    },
}
