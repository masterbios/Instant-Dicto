
console.log('background run');

chrome.runtime.onMessage.addListener(reciever);

window.word = "xxxxx";

function reciever(request,sender,sendResponse){
	window.word = request.text;
}
