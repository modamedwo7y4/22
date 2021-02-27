const Discord = require("discord.js")

module.exports = (client, message, queue, track) => {

    message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.music} - ${track.title} has been added to the queue !`));

};