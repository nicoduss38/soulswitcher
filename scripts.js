document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");
    const playlist = document.getElementById("playlist");

    playlist.addEventListener("click", function(event) {
        if (event.target && event.target.nodeName === "LI") {
            const src = event.target.getAttribute("data-src");
            audioSource.src = src;
            audioPlayer.load();
            audioPlayer.play();
        }
    });

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
