const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login("ODEyNjgxNjg0OTcyODYzNDg5.YDESzA.B2UQqVd2NjYdLeS655ePnT4NSn0");

bot.on("ready", async () =>{
    console.log("BOT CONNECTE");
    bot.user.setStatus("dnd");
    setTimeout(() => {
        bot.user.setActivity("surveiller se qui se passe");
    }, 100)
});

bot.on("guildMemberAdd", member => {
    bot.channels.cache.get('606532202271866920').send (`bienvenu à toi ${member}, si tu es un garçon, lis les #📜règles📜, acceptes les choisis tes #rôles-obligatoires et viens parler et rigoler avec nous `)

});