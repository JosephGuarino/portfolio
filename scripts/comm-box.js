function toggleComm(box) {
	var clickBox = document.getElementById(box);
	var others = document.getElementsByClassName("comm-box");
	for (var i = 0; i < others.length; i++) {
		others[i].style.display = "none";
	}
	clickBox.style.display = "block";
}

function defaultOpen(defaultTab) {
	toggleComm(defaultTab); // Show the default tab passed as a parameter
}

window.onload = function() {
    var defaultTab = 'dataset'; // Set the default tab ID
    defaultOpen(defaultTab); // Call the function to open the default tab on load
};

