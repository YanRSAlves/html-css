if ("webkitSpeechRecognition" in window) {
    var recognition = new 
    webkitSpeechRecognition();

    recognition.continuous = true;

    recognition.interimResults = true;

    var startButton = document.getElementById("start-button");

    var output = document.getElementById("output");

    startButton.addEventListener("click", function () {
        recognition.start();
    });
    recognition.onresult = function (event) { 
        var transcript = "";

        for (var i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i] 
            [0].transcript;
        }

        output.innerHTML = transcript;
    };

    recognition.onerror = function (event) {
        console.log("Ops! ocorreu algum Error! " + event.onerror );
    };

}else {
    console.log("Seu navegador não suporta a Web Speech API");
}
