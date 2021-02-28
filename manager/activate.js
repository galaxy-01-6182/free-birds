 const fs = require('fs')

 const main = require('./main.js')
 const processor = require('../processor/main.js')

module.exports.run = (client) => {
	
const eventPath = './manager/events'

const eventFolders = fs.readdirSync(eventPath)

for (const folder of eventFolders) { 

 let eventFiles = fs.readdirSync(`${eventPath}/${folder}`).filter(file => file.endsWith('-event.js'))

 for(const eventFile of eventFiles){

   const event = require(`./events/${folder}/${eventFile}`);
	
      if (event.once) { 	
	  	
	  client.once(event.name, (...args) => event.execute(client, ...args)); 
	  		
        } else { 	
	  			
 		  client.on(event.name, (...args) => event.execute(client, ...args)); 	
	  					  				
	      }
	   }
	 } 
    
   }
