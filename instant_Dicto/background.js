
console.log('background run');

chrome.runtime.onMessage.addListener(reciever);

window.word = "ankit";

function reciever(request,sender,sendResponse){
	console.log(request);
	window.word = request.text;
}