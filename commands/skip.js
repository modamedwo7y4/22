const Discord = require("discord.js")

exports.run = async (client, message, msg) => {

    if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - You're not in a voice channel !`));

    if (!client.player.getQueue(message)) return message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - No music currently playing !`));

    client.player.skip(message);

    message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.success} - The current music has just been **skipped** !`));

};
