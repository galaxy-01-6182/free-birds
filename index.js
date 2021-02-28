const {Client} = require("discord.js");


const client = new Client();
client.config = require('./config.json');

const processor = require('./processor/main.js')

const manager = require('./manager/main.js')


 manager.activate(client);

 client.login(client.config.token);