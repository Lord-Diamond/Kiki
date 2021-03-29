const Discord = require('discord.js');
var moment = require('moment');

exports.run = (client, message, args) => {
    let botSize = message.guild.members.filter(b => b.user.bot).size
    let userSize = message.guild.members.size;
    let userSizenobot = userSize - botSize;

    var infodiscord = new Discord.RichEmbed()
        .addField("La meilleur musique : Imagine Dragons - Demons ➡️ https://www.youtube.com/watch?v=mWRsgZuwf_8")
        .setColor("#FF0000")
    message.channel.send(infodiscord)
}

module.exports.help = {
    name: "musique"
}
