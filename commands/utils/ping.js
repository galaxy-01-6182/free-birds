module.exports.help = {
	
	 name: 'ping',
	 description: "Beep-Boop, is the bot is alive?",
	 usage: 'ping'
	
}

module.exports.settings = {	

  cooldown: 3

}

module.exports.run = async (client, message, args) => {
	
const msg =	await message.channel.send('Fetching Latency...')
	
	let latency = 0
	
 if(message.createdTimestamp > Date.now){
 	
 		latency =  message.createdTimestamp - Date.now()
 	
 } else {
 	
 	 		 latency =  Date.now() - message.createdTimestamp 
 	
 	
 }


	
	const apiLatency = Math.round(client.ws.ping)
	
	msg.edit(`${message.member.displayName} Pong :ping_pong: !\nClient Latency <:hourGlass:813321224033009744>: ${latency} ms\nAPI Ping <a:signalRange:813321276084584458>: ${apiLatency} ms`)
	
	
}