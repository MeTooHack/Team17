var last_known_scroll_position = 0;
var names;
var images;
var path = window.location.pathname;

function updatedUrl() {

	if (path.includes("search")) {
		removeSearchBias();

		window.addEventListener('scroll', function(e) {

		  	last_known_scroll_position = window.scrollY;

			if (last_known_scroll_position % 100 < 10) {
			  removeSearchBias();
			  ticking = false;
			}

		  
		});
	} else if (path.includes("in/")) {
		console.log("Run profile stuff");
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

updatedUrl();