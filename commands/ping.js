const Discord = require("discord.js")

exports.run = async (client, message) => {
  message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`)
  );
}