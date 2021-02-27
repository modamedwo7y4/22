const Discord = require("discord.js")

module.exports = (client, message, playlist) => {

    message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.music} - ${playlist.title} has been added to the queue (**${playlist.items.length}** songs) !`));
            console.log("NIRO DEVELOMENT")
};