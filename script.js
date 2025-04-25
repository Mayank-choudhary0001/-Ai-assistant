let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    // window.speechSynthesis.speak(text_speak)
    text_speak.lang="en-GB"

}

function wishMe() {
    let day =new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morninng Sir")

    }
    else if(hours>=12 && hours<16){
        speak("Good afternoom Sir")
    }else{
        speak("Good Evening Sir")
    }
}

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult =(event)=>{
    let currentIndex =event.resultIndex
    let transcript =event.results[currentIndex][0].transcript
    content.innerText= transcript
    takeCommand(transcript.toloerCase())

}
btn.addEventListener("click", ()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"

})
function takeCommand(message) {
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")|| message.includes(hey)){
        speak("hello sir ,what can i help you")
    }
    else if(message.includes("who are you")){
        speak(" i am mr.cool a virtual assistant , created by CS team")
    }else if(message.includes("open google ")){
        speak("opening google...")
        window.open("https://google.com/","_blank")

    }else if(message.includes("open facebook ")){
        speak("opeaninge facebook...")
        window.open("https://facebook.com/","_blank")

    }else if(message.includes("openinstagram ")){
        speak("opeaning instagram...")
        window.open("https://instagram.com/","_blank")

    }else if(message.includes("open calculator")){
        speak("opeaning calculator...")
        window.open("https://calculator.com/","_blank")

    }else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hours:"numeric",minute:"numeric"})
        speak(time)
    }else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }else{
        let finalTex="this is what i found on regarding it" + message.replace("mr.cool","")|| message.
        replace("mr.cool","")
        speak(finalTexT)
        window.open('https://www.google.com/search?q=${message}',"_blank")
    }

    
}