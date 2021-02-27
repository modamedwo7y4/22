const Discord = require("discord.js")

module.exports = (client, message, query) => {

    message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - No results found on YouTube for ${query} !`));
            console.log("NIRO DEVELOMENT")
};