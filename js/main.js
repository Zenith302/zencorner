// uhmhm funny random text thing 
//im so fluffy rn - ash
var r_text = new Array ();
r_text[0] = "nyanya!";
r_text[1] = "sdfasdklfgsdfgsgoinrfoenlvbd";
r_text[2] = "Did you know? Zenith has TEN cats";
r_text[3] = "Any weather is skirt weather if you can stand the cold";
r_text[4] = "Notepad++ is certainly the program of all time";
r_text[5] = "Reject human, embrace meow";
r_text[6] = "Check out my Discord it's gay and funny";
r_text[7] = "incrediblegaming";
r_text[8] = "I have   very money         I have 1 Roys-roys 1 lombargine machine";
r_text[9] = "Ashie was here";
r_text[10] = "Zenith was here";
r_text[11] = "play Sonic Spinball or I'll cut you";
r_text[12] = "Quite."
r_text[13] = "Puerto Amongalas"
r_text[14] = "pawwwwsssssss,,,,,"
r_text[15] = "The included spork is certainly the utensil of all time"
var fuckyou = Math.floor(16*Math.random())

$("#scrollText").html(r_text[fuckyou]);

// random gradient :3c
var r_grad = new Array();
r_grad[0] = "linear-gradient(to bottom, rgba(20,255,28,1) 0%,rgba(41,154,11,1) 100%)"
r_grad[1] = "linear-gradient(to bottom, rgba(102,232,67,1) 0%,rgba(108,255,63,1) 50%,rgba(193,224,40,1) 51%,rgba(219,240,67,1) 100%)"
r_grad[2] = "linear-gradient(to bottom, rgba(243,197,189,1) 0%,rgba(232,108,87,1) 50%,rgba(234,40,3,1) 51%,rgba(255,102,0,1) 75%,rgba(199,34,0,1) 100%)"
r_grad[3] = "linear-gradient(to bottom, rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%)"
r_grad[4] = "linear-gradient(to bottom, rgba(252,236,252,1) 0%,rgba(249,157,220,1) 50%,rgba(253,137,215,1) 51%,rgba(255,53,194,1) 100%)"
r_grad[5] = "linear-gradient(to bottom, rgba(246,248,249,1) 0%,rgba(229,235,238,1) 50%,rgba(215,222,227,1) 51%,rgba(245,247,249,1) 100%)"
r_grad[6] = "linear-gradient(to bottom, rgba(189,127,255,1) 0%,rgba(56,109,255,1) 100%)"
r_grad[7] = "linear-gradient(to bottom, rgba(203,96,179,1) 0%,rgba(193,70,161,1) 50%,rgba(168,0,119,1) 51%,rgba(219,54,164,1) 100%)"
r_grad[8] = "linear-gradient(to bottom, rgba(252,234,187,1) 0%,rgba(252,205,77,1) 50%,rgba(248,181,0,1) 51%,rgba(251,223,147,1) 100%)"
r_grad[9] = "linear-gradient(to bottom, rgba(184,225,252,1) 0%,rgba(169,210,243,1) 10%,rgba(144,186,228,1) 25%,rgba(144,188,234,1) 37%,rgba(144,191,240,1) 50%,rgba(107,168,229,1) 51%,rgba(162,218,245,1) 83%,rgba(189,243,253,1) 100%)"
var i = Math.floor(10*Math.random())


// navigation button thuiwnug wuuwwuuwuuwuwuuwuwuwuwuwuwwuwuwuwuwuwuwuwu
var navState = false;
function navButton() {
	if (navState) {
        // close nav
        $(".sidebar").css('left', '');
        $(".navButton").css('left', '');
        $(".navButton img").attr('src', 'img/menu.svg');
		$(".page-content").attr('id', '');
    } else {
        $(".sidebar").css('left', '0px');
        $(".navButton").css('left', '259px');
        $(".navButton img").attr('src', 'img/close.svg');
		$(".page-content").attr('id', 'navOpen');
    }
	navState = !navState;
}
//I love ash so fucking mushc oh my   gg od gspoopsgopgsgsepioispobniohopji[e4ayut08934iw[34w5etuj8i9o
// i love you too <3333333333

// uwu newsfeed :3333
function feedGET() {
    fetch('newsfeed.md').then(response => response.text()).then(result => $('.feed').html(snarkdown(result)));
}

// the funny
$(document).ready(function() {
	$("#scrollText").css("backgroundImage", r_grad[i]);
	// day of week bullshit
	const d = new Date();
	let day = d.getDay();
	switch (day) {
		case 1: // monday
			$(".indexImg").attr("src", "img/ZenIndex1.png");
			break;
		case 2: // tuesday
			$(".indexImg").attr("src", "img/ZenIndex2.png");
			break;
		case 3: //wednesday
			$(".indexImg").attr("src", "img/ZenIndex3.png");
			break;
		case 6: // saturday placeholder
			$(".indexImg").attr("src", "img/placeholderindexreturn.png");
			break;
		default: //  fallback pic
			$(".indexImg").attr("src", "img/ZenIndex1.png");
			break;
	}
});
