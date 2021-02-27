const Discord = require("discord.js")

module.exports = (client, message, query, tracks) => {

    message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - You did not provide a valid response ... Please send the command again !`));
            console.log("NIRO DEVELOMENT")
};