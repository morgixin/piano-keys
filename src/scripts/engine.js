const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider");
const keysCheck = document.querySelector(".keys-check input");

let mappedKeys = [];
let audio = new Audio(`src/tunes/a.wav`);

function getAudioVolume() {
    return volumeSlider.lastChild.value;
}

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    let clone = audio.cloneNode();
    clone.volume = getAudioVolume();
    clone.play(); 
    // cloneNode() enables audio overlapping

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)
}

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key);
})

document.addEventListener("keydown", (event) => {
    playTune(event.key);
});

const showHideKeys = () => 
{
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysCheck.addEventListener("click", showHideKeys);