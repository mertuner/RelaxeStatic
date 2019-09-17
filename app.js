const video = document.querySelector('.vd');
const mdbtn = document.querySelector('#mdbtn');
const sound = document.querySelector('.sound');
const nextButton = document.querySelector('#nxtbtn');

let isPlaying = false
let i = 1;

const videoArr = ['rain.mp4', 'forest.mp4', 'snow.mp4', 'waves.mp4', 'waterfall.mp4'];
const audioArr = ['rain.mp3', 'forest.mp3', 'snow.mp3', 'waves.mp3', 'waterfall.mp3'];

mdbtn.addEventListener('click', event => {
    console.log(isPlaying);
    if (!isPlaying) {
        isPlaying = true;
        video.play();
        sound.play();
    }
    else {
        isPlaying = false;
        video.pause();
        sound.pause();
    }
})

this.addEventListener('load', event => {
    video.src = './videos/' + videoArr[0];
    sound.src = './sounds/' + audioArr[0];
});

nextButton.addEventListener('click', event => {
    isPlaying = false;
    video.pause();
    sound.pause();
    video.src = './videos/' + videoArr[i];
    sound.src = './sounds/' + audioArr[i];
    i = i + 1;
    if(i === 5){
        i = 0;
    }
}
)