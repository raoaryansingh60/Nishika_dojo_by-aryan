function turnOnLight() {
    var bulb = document.getElementById("bulb");
    var welcomeText = document.getElementById("welcomeText");
    var audio = document.getElementById("themeMusic");

    bulb.classList.add("glow");
    welcomeText.style.opacity = "1";
    welcomeText.style.transform = "scale(1)";

    audio.play();
}
