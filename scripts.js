document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");

    audioPlayer.addEventListener("play", function() {
        console.log("Lecture de la musique");
    });

    audioPlayer.addEventListener("pause", function() {
        console.log("Musique en pause");
    });

    audioPlayer.addEventListener("ended", function() {
        console.log("Musique terminée");
    });
});
