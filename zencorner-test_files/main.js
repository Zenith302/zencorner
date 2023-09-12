var r_text = new Array ();
r_text[0] = "nyanya!";
r_text[1] = "sdfasdklfgsdfgsgoinrfoenlvbd";
r_text[2] = "Did you know? Zenith has TEN cats";
r_text[3] = "Any weather is skirt weather if you can stand the cold";
r_text[4] = "Notepad++ is certainly the program of all time";
r_text[5] = "Reject human, embrace meow";
r_text[6] = "Check out my Discord it's gay and funny";
r_text[7] = "incrediblegaming";
r_text[8] = "I have  very money        I have 1 Roys-roys 1 lombargine machine";
r_text[9] = "Ashie was here";
r_text[10] = "Zenith was here";
r_text[11] = "play Sonic Spinball or I'll cut you";
r_text[12] = "Quite."
r_text[13] = "Puerto Amongalas"
var i = Math.floor(14*Math.random())

document.getElementById("scrollText").innerHTML = r_text[i];

var r_grad = new Array();
r_grad[0] = "linear-gradient(to bottom, rgba(20,255,28,1) 0%,rgba(41,154,11,1) 100%)"
r_grad[1] = "linear-gradient(to bottom, rgba(102,232,67,1) 0%,rgba(108,255,63,1) 50%,rgba(193,224,40,1) 51%,rgba(219,240,67,1) 100%)"
r_grad[2] = "linear-gradient(to bottom, rgba(243,197,189,1) 0%,rgba(232,108,87,1) 50%,rgba(234,40,3,1) 51%,rgba(255,102,0,1) 75%,rgba(199,34,0,1) 100%)"
r_grad[3] = "linear-gradient(to bottom, rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%)"
r_grad[4] = "linear-gradient(to bottom, rgba(252,236,252,1) 0%,rgba(249,157,220,1) 50%,rgba(253,137,215,1) 51%,rgba(255,53,194,1) 100%)"
r_grad[5] = "linear-gradient(to bottom, rgba(246,248,249,1) 0%,rgba(229,235,238,1) 50%,rgba(215,222,227,1) 51%,rgba(245,247,249,1) 100%)"
r_grad[6] = "linear-gradient(to bottom, rgba(189,127,255,1) 0%,rgba(56,109,255,1) 100%)"
var i = Math.floor(7*Math.random())

$(document).ready(function() {
	document.getElementById("scrollText").style.backgroundImage = r_grad[i];
});

