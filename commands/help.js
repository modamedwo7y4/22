const Discord = require ("discord.js");

exports.run = async (client, message) => {
    message.channel.send(new Discord.MessageEmbed().setColor('00e8ff').setAuthor("Muisc Orders")
    .addField(`${client.config.prefix}play`,"Playing a muisc", true)
    .addField(`${client.config.prefix}stop`,"Stop a music", true)
    .addField(`${client.config.prefix}skip`,"Skip a Music", true)
    .addField(`${client.config.prefix}np`,"Now Playing", true)
    .addField(`${client.config.prefix}queue`,"View The Music Queue", true)
    .addField(`${client.config.prefix}search`,"Search For A Music", true)
    .addField(`${client.config.prefix}clear-queue`,"Clear The Music Queue", true)
    .addField(`${client.config.prefix}loop`,"Repeat The Music", true)
    .addField(`${client.config.prefix}pause`,"Pause The Music", true)
    .addField(`${client.config.prefix}resume`,"Resume The Music", true)
    .addField(`${client.config.prefix}ping`, "Bot Ping", true)
    .addField(`${client.config.prefix}dev`, "Developer Info", true)
    );
};