const { MessageEmbed } = require("discord.js")
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(">_>")
    .setFooter("samething went wrong :<")
    await channel.send(embed)
}