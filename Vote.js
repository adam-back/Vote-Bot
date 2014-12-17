var button = document.getElementById('submit-vote');
var counter = 0;

var vote = function() {
	button.click();
	var response;
	counter++;
	setTimeout(function() {
		response = button.parentNode.parentNode.lastElementChild.firstChild.className;
	}, 11000);

	setTimeout(function() {
		if(response === 'success' && counter < 50) {
			vote();
		}
	}, 12000);
};