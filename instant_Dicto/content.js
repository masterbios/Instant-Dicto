
window.addEventListener('mouseup',wordSelected);

function wordSelected(){
	var selectedText = window.getSelection().toString().trim() ;

	if(selectedText.length > 0){
		var msg = {
			text : selectedText
		};
		var message = "";
		try{
			chrome.runtime.sendMessage(msg);
		} catch(err){
			createP("Error : proper word not selected");
		}
	}
}
