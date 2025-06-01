console.log("Welcome to spotify");
let audioindex=0;
const audioele=new Audio('0.mp3');
const masterplay=document.getElementById("masterplay")
const progessbar=document.getElementById('progressbar')
let gif=document.getElementById("gif")
let songtext=Array.from(document.querySelectorAll(".songtext"))
let songplay=Array.from(document.getElementsByClassName("songitemplay"))
const next=document.getElementById("next")
const last =document.getElementById("last")

let songs=[
    {song:'Heeriye',filepath:'',coverpath:"0.jpg"},
    {song:'Dekha tenu pahli baar',filepath:'',coverpath:"1.jpg"},
    {song:'Jeet ka Geet',filepath:'',coverpath:"2.jpg"},
    {song:'Oh Mahi Oh Mahi',filepath:'',coverpath:"3.jpg"},
    {song:'O Sajni Re',filepath:'',coverpath:"4.jpg"},
    {song:'Soni Soni',filepath:'',coverpath:"5.jpg"},
    {song:'Tere Hawaale',filepath:'',coverpath:"6.jpg"},
    
]
songtext.forEach((element,i) => {
    element.src=songs[i].coverpath
    element.innerHTML=songs[i].song   
});


//next song
next.addEventListener("click",()=>{
     audioindex=audioindex+1
    audioele.src=`${audioindex}.mp3`
    audioele.play()
    if (audioindex===songs.length) {
        location.reload(true)
    }
})

//privous song
last.addEventListener("click",()=>{
    audioindex=audioindex-1
    audioele.src=`${audioindex}.mp3`
    audioele.play()
    if (audioindex==-1) {
        location.reload()
    }
})

//make every button play
const makeallplay=()=>{
    songplay.forEach((e)=>{
        e.classList.add("fa-play")
    })
}

//play paused in upper banner
songplay.forEach((ele,i)=>{
    ele.addEventListener('click',()=>{
        makeallplay()
        audioindex=parseInt(ele.id)
        ele.classList.remove("fa-play")
        ele.classList.add("fa-pause")
        audioele.src=`${audioindex}.mp3`
        audioele.currentTime=0
        audioele.play()
        masterplay.classList.remove('fa-play')
        masterplay.classList.add("fa-pause")
    })
})



/* audioele.play(); */

masterplay.addEventListener("click",()=>{
    if (audioele.paused || audioele.currentTime<0) {
        audioele.play();
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
        gif.style.opacity=1;
    }
    else{
        audioele.pause();
        masterplay.classList.remove("fa-pause")
        masterplay.classList.add("fa-play")
        gif.style.opacity=0;
    }
})

//time update
audioele.addEventListener("timeupdate",()=>{
    progess=parseInt((audioele.currentTime/audioele.duration)*100)
    progessbar.value=progess
})

progessbar.addEventListener("change",()=>{
     audioele.currentTime=(progessbar.value*audioele.duration)/100;

})
