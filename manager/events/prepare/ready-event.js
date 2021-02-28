const manager = require('../../main.js')
 const processor = require('../../../processor/main.js')

module.exports = {
	
	name: 'ready',
	once: true,
 async	execute(client, ...args){
		
	  	await manager.derive(client)
 
    await    processor.attachHandler(client);
   
   await processor.attachCooldowner(client)
  
   await manager.setup(client);
	 
	  console.log("Bird is up!");	  
		
		
	},
	
}