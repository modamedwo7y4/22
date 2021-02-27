const Discord = require("discord.js")

module.exports = (client, message, queue) => {

    message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - Music stopped as there is no more music in the queue !`));
            console.log("NIRO DEVELOMENT")
};