const processor = require('../../../processor/main.js')

module.exports = {
	
	name: 'message',
	execute(client, message){
		
		message.content = message.content.toLowerCase();
		
	 
	 if(message.author.bot) return;
	
	if(client.config.developMode){
		
		
		 if(message.guild && message.guild.id == "747696876379439205") return;
	 
	 if(message.author.id !== "729907149479870585") return;
	 	 
	 	message.channel.send("Processing Work...");
	 	 
	 	 processor.run(client, message);
	 	
	
	 } else {
	 	
	 	 processor.run(client, message);	  
	 	 	 	
	 }
	 
	 
		
		
	},
		
	
}