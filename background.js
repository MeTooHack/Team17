
var url;

chrome.tabs.onCreated.addListener(function(tab) {
    /* tabs.onUpdated */
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){ 
        if (changeInfo.url) {
        	url = changeInfo.url;	        	
        } 
        if (changeInfo.status === "complete") {
        	if (url.includes("linkedin")) {
        		console.log("completed, Send url: " + url);
        		chrome.tabs.sendMessage(tabId, {url: url}, function(response) {
			      console.log("Got response: " + response);
			    });
        	}
        	
        }

    });
    
});