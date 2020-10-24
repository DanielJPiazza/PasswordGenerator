"use strict";

document.getElementById("passwordResult").value = "";

var maxPassLength = 64;
var defaultPassLength = 14;

var slider = document.getElementById("passwordLengthSlider");
slider.value = defaultPassLength;

var passwordOutput = document.getElementById("sliderVal");
passwordOutput.innerHTML = slider.value;

function passGen(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

slider.oninput = function() {
    slider.value = this.value;
    passwordOutput.innerHTML = slider.value;
}

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
