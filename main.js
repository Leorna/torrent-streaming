(function(){
	async function iniciar (){
		const torrent = require('torrent-search-api')
		torrent.enableProvider('Torrent9')
		let pesquisa = 'Filme'
		const torrents = await torrent.search(pesquisa, 'Movies', 20)
		let mgLink = torrent.getMagnet(torrents[0])
	return mgLink
		
		
	}

	let torrent = iniciar()
	torrent.then(function(){
		torrent 
		console.log(torrent)
	})	
	

})()



