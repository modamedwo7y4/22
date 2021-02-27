const Discord = require("discord.js")

module.exports = (client, message, track) => {

    message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...`));

};