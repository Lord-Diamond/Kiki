const Discord = require('discord.js');
var moment = require('moment');

exports.run = (client, message, args) => {
    let botSize = message.guild.members.filter(b => b.user.bot).size
    let userSize = message.guild.members.size;
    let userSizenobot = userSize - botSize;

    var infodiscord = new Discord.RichEmbed()
        .addField("Nagichat je t'aime, tu es le plus mignon de INFINITY ♥")
        .setColor("#8697CB")
    message.channel.send(infodiscord)
}

module.exports.help = {
    name: "nagichat"
}
