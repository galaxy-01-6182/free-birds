/* Processor Main
* handler.js - module to attach and run handler
* parser-agent.js - module to communicate with the main parser
* cooldowner.js - command cooldowns manager
* this file uses 'chalk' ( https://npmjs.org/package/chalk ) to log texts in console
* for more info read info.md in this folder
*/

const chalk = require('chalk');
const log = console.log
const mnotice = chalk.hex('#00a5a5')
const done = chalk.hex('#00a553')


 const parser = require('./parser-agent.js')
 const handler = require('./handler.js')
 const cooldowner = require('./cooldowner.js')


module.exports.run = async (client, message) => {
	
	
	
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
