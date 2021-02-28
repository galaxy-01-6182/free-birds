const chalk = require('chalk');
const log = console.log
const mnotice = chalk.hex('#00a5a5')
const done = chalk.hex('#00a553')

	
// const deriver = require('./deriver.js')
 const parser = require('./parser-agent.js')
 const handler = require('./handler.js')
 const cooldowner = require('./cooldowner.js')


module.exports.run = async function run(client, message){
	
// client = await deriver.derive(client);
 
 
 // console.log(`COMMAND LIST:\n ${client.commands}`)
	
	
	
 const args = message.content.trim().split(/ +/g);
 	 	if(message.content.startsWith(client.config.prefix)){
		 
	  handler.run(client, message, args);
	  
				
	} 
		
	parser.run(client, message);
				
	return client;
	
}


module.exports.attachHandler = (client) => {
	
 	log(mnotice('Attaching handler...'))
	
	client = handler.attach(client);
	
		log(done('Attached Handler!'))
	
	return 0;
	
}

module.exports.attachCooldowner = (client) => {
	
	 log(mnotice('Attaching Cooldowner...'))
	
	 client = cooldowner.attach(client)
	 
	  log(done('Attached Cooldowner!'))
	
}