"use strict";

var maxPassLength = 64;
var defaultPassLength = 18;
var uppercaseFlag = false;
var lowercaseFlag = true;
var numbersFlag = false;
var symbolsFlag = false;

var slider = document.getElementById("passwordLengthSlider");
slider.value = defaultPassLength;

var passwordOutput = document.getElementById("sliderVal");
passwordOutput.innerHTML = slider.value;

function passGen(length) {
    document.getElementById("confirmCopy").innerHTML = "";
    
    var result = "";
    var characters = "";
    
    if (uppercaseFlag) { characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; }
    if (lowercaseFlag) { characters += "abcdefghijklmnopqrstuvwxyz"; }
    if (numbersFlag) { characters += "0123456789"; }
    if (symbolsFlag) { characters += "!@#$%^&*()"; }
    
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var checkboxes = document.getElementsByTagName('input');
for (var i = 0; i < checkboxes.length; i++)  {
    if (checkboxes[i].type == 'checkbox')   {
        checkboxes[i].checked = false;
    }
}

document.getElementById("passwordResult").value = "";
document.getElementById('lowercaseFlag').checked = lowercaseFlag

slider.oninput = function() {
    slider.value = this.value;
    passwordOutput.innerHTML = slider.value;
}

document.getElementById("uppercaseFlag").onchange = function() { uppercaseFlag = !uppercaseFlag }
document.getElementById("lowercaseFlag").onchange = function() { lowercaseFlag = !lowercaseFlag }
document.getElementById("numbersFlag").onchange = function() { numbersFlag = !numbersFlag }
document.getElementById("symbolsFlag").onchange = function() { symbolsFlag = !symbolsFlag }

document.getElementById("generatePasswordButton").addEventListener("click", function() {
        document.getElementById("passwordResult").value = passGen(slider.value);
    }
);

document.getElementById("copyClipboardButton").addEventListener("click", function() {
        document.getElementById("confirmCopy").innerHTML = "";
        
        var copyText = document.getElementById("passwordResult");
        var copyTextLength = document.getElementById("passwordResult").value;
        
        copyText.select();
        copyText.setSelectionRange(0, maxPassLength)
        var copySuccess = document.execCommand("copy")

        if (copySuccess && copyTextLength != 0) {
            document.getElementById("confirmCopy").innerHTML = "Password copied to clipboard."
        }
        
        copyText.setSelectionRange(0,0);
    }
);
