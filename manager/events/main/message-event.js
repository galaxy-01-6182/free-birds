const processor = require('../../../processor/main.js')

module.exports = {
	
	name: 'message',
	execute(client, message){
		
	 message.content = message.content.toLowerCase();		
	 
	 if(message.author.bot) return;
	
	if(client.config.developMode){		
		
	    if(message.guild && message.guild.id == client.data.home.id) return;
	
 
	 if(message.author.id !== client.data.owner.user.id) return;
	 	 
	 	 message.channel.send("Processing Work...");
 	 
	 	 processor.run(client, message);
	 	
	
	 } else {
	 	
	     processor.run(client, message);	  
	 	 	 	
	 }
	 	 				
    },		
	
}
