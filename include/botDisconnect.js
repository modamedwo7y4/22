const Discord = require("discord.js")

module.exports = (client, message, queue) => {

    message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setTitle(`${client.emotes.error} - Music stopped as i have been disconnected from the channel !`));
            console.log("NIRO DEVELOMENT")
};
