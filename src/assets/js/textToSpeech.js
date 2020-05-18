AWS.config.region = "eu-west-1";
AWS.config.accessKeyId = ""; //Add AWS access id
AWS.config.secretAccessKey = "";//Add AWS secret key

function speak(text) {
  var polly = new AWS.Polly({ apiVersion: "2016-06-10" });

  var params = {
    OutputFormat: "mp3" /* required */,
    Text: text /* required */,
    VoiceId: "Joanna" /* required */,
    SampleRate: "22050",
    TextType: "text",
  };

  polly.synthesizeSpeech(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
    } // an error occurred
    else {
      var uInt8Array = new Uint8Array(data.AudioStream);
      var arrayBuffer = uInt8Array.buffer;
      var blob = new Blob([arrayBuffer]);
      var url = URL.createObjectURL(blob);

      var audioElement = document.createElement("audio");
      audioElement.setAttribute("id", "audioElem");
      document.body.appendChild(audioElement);
      audioElement.src = url;

      document.querySelector("audio").addEventListener("click", function () {
        context.resume().then(() => {
          console.log("Playback resumed successfully");
        });
      });
      audioElement.play();
    }
  });
}
