// uhmhm funny random text thing 
//im so fluffy rn - ash
var r_text = [
	"nyanya!",
	"sdfasdklfgsdfgsgoinrfoenlvbd",
	"Did you know? Zenith has NINE cats",
	"Any weather is skirt weather if you can stand the cold",
	"Notepad++ is certainly the program of all time",
	"Reject human, embrace meow",
	"Check out my Discord it's gay and funny",
	"incrediblegaming",
	"I have   very money         I have 1 Roys-roys 1 lombargine machine",
	"Ashie was here",
	"Zenith was here",
	"play Sonic Spinball or I'll cut you",
	"Quite.",
	"Puerto Amongalas",
	"pawwwwsssssss,,,,,",
	"The included spork is certainly the utensil of all time"];
var fuckyou = Math.floor(16*Math.random())

$("#scrollText").html(r_text[fuckyou]);

// random gradient :3c
var r_grad = [
	"linear-gradient(to bottom, rgba(20,255,28,1) 0%,rgba(41,154,11,1) 100%)",
	"linear-gradient(to bottom, rgba(102,232,67,1) 0%,rgba(108,255,63,1) 50%,rgba(193,224,40,1) 51%,rgba(219,240,67,1) 100%)",
	"linear-gradient(to bottom, rgba(243,197,189,1) 0%,rgba(232,108,87,1) 50%,rgba(234,40,3,1) 51%,rgba(255,102,0,1) 75%,rgba(199,34,0,1) 100%)",
	"linear-gradient(to bottom, rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%)",
	"linear-gradient(to bottom, rgba(252,236,252,1) 0%,rgba(249,157,220,1) 50%,rgba(253,137,215,1) 51%,rgba(255,53,194,1) 100%)",
	"linear-gradient(to bottom, rgba(246,248,249,1) 0%,rgba(229,235,238,1) 50%,rgba(215,222,227,1) 51%,rgba(245,247,249,1) 100%)",
	"linear-gradient(to bottom, rgba(189,127,255,1) 0%,rgba(56,109,255,1) 100%)",
	"linear-gradient(to bottom, rgba(203,96,179,1) 0%,rgba(193,70,161,1) 50%,rgba(168,0,119,1) 51%,rgba(219,54,164,1) 100%)",
	"linear-gradient(to bottom, rgba(252,234,187,1) 0%,rgba(252,205,77,1) 50%,rgba(248,181,0,1) 51%,rgba(251,223,147,1) 100%)",
	"linear-gradient(to bottom, rgba(184,225,252,1) 0%,rgba(169,210,243,1) 10%,rgba(144,186,228,1) 25%,rgba(144,188,234,1) 37%,rgba(144,191,240,1) 50%,rgba(107,168,229,1) 51%,rgba(162,218,245,1) 83%,rgba(189,243,253,1) 100%)"];
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

// guestbook things! ^-^
async function guestbookGET() {
    const response = await fetch('https://api.ashiecorner.xyz/pygb/api/getEntries/zencorner', {mode: 'cors'});
    if (response.ok) {
        let json = await response.json();
        if (json) {
            var tmp = '';
            $.each( json, function( key, value ) {
                const epoch = Number(value[3])
                tmp += '<div class="gbe">';
                tmp += '    <div class="gbe-header">';
                tmp += '      <p class="gbe-name">' + value[0] + '</p>';
                if (Number.isInteger(epoch)) {
                    var date = new Date(epoch*1000);
                    var timestamp = date.toLocaleTimeString([], {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                    tmp += '      <p class="gbe-timestamp">' + timestamp + '</p><br>';        
                } else {
                    tmp += '      <p class="gbe-timestamp">' + value[3] + '</p><br>';
                }
                tmp += '      <p class="gbe-email">' + value[1] + '</p>';
                tmp += '    </div>';
                tmp += '    <p>' + value[2] + '</p>';
                tmp += '</div>';
            });
        
            $('.gb-entries').html(tmp);
        }
    }
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
	
// mobile nav swipe actions

function navSwipeRight() {
    // open nav
    if (!navState) {
        navButton();
    }
}
function navSwipeLeft() {
    // close nav
    if (navState) {
        navButton();
    }
}

Hammer(document).on("swipeleft", navSwipeLeft);
Hammer(document).on("swiperight", navSwipeRight);

});
