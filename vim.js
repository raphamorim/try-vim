'use strict';

var cli = document.querySelector('.vim')
	, status = null
	, bash = document.querySelector('.bash')
	, cursor = document.querySelector('.cursor');

/* Display alert if user try left page */
window.onbeforeunload = function() {
    return "Are you sure you want to leave this page?  Your current entries" +
        " will be lost.";
};

/* keyboard bind */
document.addEventListener('keydown', function(event) {
	if ((status === 'cli') && (event.keyCode != 27))
		return cli.value = cli.value + String.fromCharCode(event.keyCode);

    switch (event.keyCode) {
    	// Key: Right Arrow
    	case 39:
    		// Do Something :)
    		break;

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


