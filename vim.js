'use strict';

var cli = document.querySelector('.vim')
	, status = null
	, bash = document.querySelector('.bash');

var data = "#Try Vim ##Let's learn this thing together Hi fellas, welcome to the Learn Vim :)";

window.onload = function() {
	var arrData = data.split('');
	arrData.forEach(function(entry) {
		var item = document.createElement('div');
		item.className = 'item';
		item.innerHTML = entry;
		// item.style.float = "left";
		// item.style.padding = "1px";
		//
		// 	item.style.width = "10px";

		bash.appendChild(item);
	});

	bash.children[0].classList.add('cursor');
}

/* Display alert if user try left page */
window.onbeforeunload = function() {
    return "Are you sure you want to leave this page?  Your current entries" +
        " will be lost.";
};

/* Keyboard */
document.addEventListener('keydown', function(event) {
    if ((status === 'cli') && (event.keyCode != 27))
        return cli.value = cli.value + String.fromCharCode(event.keyCode);

	Cursor(event.keyCode);

    switch (event.keyCode) {
        // Key: I
        case 73:
            cli.value = ' -- INSERT -- ',
            status = 'i';
            bash.classList.add('focus');
            break;

        // Key: V
        case 86:
            cli.value = ' -- VISUAL LINE -- ',
            status = 'v';
            bash.classList.add('focus');
            break;

        // Key: Escape
		case 27:
            cli.value = null,
            status = null;
            bash.classList.remove('focus');
            cli.classList.remove('focus');
            break;

        // Type a command
        case 186:
            cli.value = ':',
            status = 'cli';
            cli.classList.add('focus');
            break;
    }
});

/* Cursor Function */
function Cursor (key) {
	var cursor = document.querySelector('.cursor'),
		nextE = cursor.nextSibling,
		prevE = cursor.previousSibling;

	switch (key) {
		// Key: Right Arrow
		case 39:
			if (nextE.classList.contains('item')) {
				cursor.classList.remove('cursor');
				nextE.classList.add('cursor');
			}
			break;

		// Key: Left Arrow
		case 37:
			if (prevE.classList.contains('item')) {
				cursor.classList.remove('cursor');
				prevE.classList.add('cursor');
			}
			break;
	}
}
