const Discord = require("discord.js")

exports.run = async (client, message, msg) => {

    if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - You're not in a voice channel !`));

    if (!client.player.getQueue(message)) return message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - No music currently playing !`));

    client.player.pause(message);

    message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} **paused** !`));

};
