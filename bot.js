const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("705301059060629529")
setInterval(function() {
channel.send(`tast tast tast tast tast `);
}, 30)
})

client.login(process.env.BOT_TOKEN);