/* Client Manager
* user.js - manages client's user settings 
* deriver.js - attaches some derived data on client startup
* debug.js - Debugger
* activate.js - manages manager 
*/
const chalk = require('chalk')
const log = console.log

const mnotice = chalk.hex('#00a5a5')
const done = chalk.hex('#00a553')
const success = chalk.green
const notice = chalk.hex('#0053a5')
const text = chalk.hex('#add8e6')

const user = require('./user.js')
const activate = require('./activate.js')
const deriver = require('./deriver.js')
const debug = require('../debugger/debug.js')

const isDebug = false;

module.exports.setup = async function set(client){

 log(notice('   Setting up Client...'))
	 
	 
 await	user.manage(client);	
 
  log(success('   Finished setting up Client!'))
 
  log(notice(' Debug: ') + text(isDebug))
 
 if(isDebug) debug.run(client);


  	log(done('Closing Manager...'))
	
	 return 0;
	
}


module.exports.activate = async (client) => {
	
	 log(mnotice('Calling Manager...'))
 

	  log(notice(' Activating Client...'))
	
	  await activate.run(client);
	  
	 log(success(' Activated Client!'))
	
	
}

module.exports.derive = async (client) => {
	
	  
	  log(notice(' Deriving Client...'))
		 
	  client  = await deriver.derive(client);
	  
	  log(success(' Derived Client!'))
	 
	  return client;

}

