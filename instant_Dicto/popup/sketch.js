
function setup(){
	
	noCanvas();

	let backpage = chrome.extension.getBackgroundPage();
	let word = backpage.word.toLowerCase().trim();
	// createP(word);

	let url = `http://api.wordnik.com:80/v4/word.json/
	${word}
	/definitions?limit=1&
	includeRelated=false&
	sourceDictionaries=all
	&useCanonical=false&
	includeTags=false&
	api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7
	`

	url = url.replace(/\s+/g, '');
	loadJSON(url,gotData);
	
	function gotData(data){
		var message = "";
		try{
			createP(data[0].text).style('font-size', '14pt');
		}catch(err){
			createP("Error : proper word not selected").style('font-size', '14pt');;
		}
	}

}
