const Discord = require("discord.js")

module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - You must send a valid number between **1** and **${tracks.length}** !`));
            console.log("NIRO DEVELOMENT")
};