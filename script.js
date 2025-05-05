console.log("Welcome to Spotify");
// initialise the variables

let songIndex = 0;
let audioElement = new Audio('10.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Tu hain toh",filePath: "spotify clone/1.mp3",coverPath: "spotify clone/11.jpg"},
    {songName: "Jhol",filepath: "spotify clone/2.mp3", coverPath: "spotify clone/22.jpg"},
    {songName: "Ishq hai",filepath: "spotify clone/3.mp3", coverPath: "spotify clone/33.jpg"},
    {songName: "Victory anthem",filepath: "spotify clone/4.mp3", coverPath: "spotify clone/44.jpg"},
    {songName: "Vande mataram",filepath: "spotify clone/5.mp3", coverPath: "spotify clone/55.jpg"},
    {songName: "Ami je tomar",filepath: "spotify clone/6.mp3", coverPath: "spotify clone/66.jpg"},
    {songName: "Pehla tere nain",filepath: "spotify clone/7.mp3", coverPath: "spotify clone/77.jpg"},
    {songName: "Triple OG",filepath: "spotify clone/8.mp3", coverPath: "spotify clone/88.jpg"},
    {songName: "Bholenath",filepath: "spotify clone/9.mp3", coverPath: "spotify clone/99.jpg"},
    {songName: "Ve haaniyan",filepath: "spotify clone/10.mp3", coverPath: "spotify clone/101.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img").src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})




//audioelement.play();

//handle play/pause clicks
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
   // update seekbar
   progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
   myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.target.classList.remove('fa-pause-circle');
     
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'spotify clone/${songIndex}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>10){
        songIndex = 1
    }
    else{
        songIndex += 1;
    }
})