const Discord = require("discord.js")

exports.run = async (client, message, args, msg) => {

    if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - You're not in a voice channel !`));

    if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - Please indicate the title of a song !`));

    client.player.play(message, args.join(" "));

};
