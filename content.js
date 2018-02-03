var names;
var images;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	sendResponse("Recieved message");
	var uri = getLocation(request.url);
	updatedUrl(uri.pathname); 	
});

function updatedUrl(path) {

	if (path.includes("search")) {
		removeSearchBias();

		window.addEventListener('scroll', scrollListener,true);
	} else if (path.includes("in/")) {
		window.removeEventListener('scroll',scrollListener,true)
		removeProfileBias();
	}
}

function removeSearchBias() {
	
	names = document.getElementsByClassName("name");
	for(var i = 0; i< names.length; i++) {
		names[i].innerHTML = "A person";
	}

	images = document.getElementsByClassName("lazy-image");
	for(var i = 0; i< images.length; i++) {
		images[i].src = "https://media.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif";
	}

}

function removeProfileBias() {
	var image = document.getElementsByClassName("presence-entity__image")[0];
	var name = document.getElementsByClassName("pv-top-card-section__name")[0];

	image.style.backgroundImage = 'url(https://media.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif)';
	name.innerHTML = "A Person";

}

var scrollListener = function (e) {

	if (window.scrollY % 100 < 10) {
	  removeSearchBias();
	}
		
}

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};
