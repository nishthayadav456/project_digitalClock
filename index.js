let hours=document.querySelector("#hh")
let minutes=document.querySelector("#mm")
let seconds=document.querySelector("#ss")
let ampm=document.querySelector("#ampm")
let right=document.querySelector("#right")
let Time=document.querySelectorAll(".Time1")
let change=document.querySelectorAll(".change")
let m=document.querySelector("#m")
let img=document.querySelector("#img")
let button=document.querySelector("button")


function clock(){
    let time = new Date();

    let hh = time.getHours()
    let mm = time.getMinutes()
    let ss = time.getSeconds()
    let hr = hh 

    if(hr >12){
        hr = hr-12
        
    }
    hr= (hr<9) ? "0"+hr: hr
    mm= (mm<12) ? "0"+mm : mm
    ss= (ss<12) ? "0"+ss: ss

    
    hours.innerHTML = `${hr}`;
    
    minutes.innerHTML = `${mm}`;

  seconds.innerHTML = `${ss}`;
    
    if(hh>12){
       ampm.innerHTML = "PM" 
    }
    else{
        ampm.innerHTML = "AM"
    }

    if(hh> 7 && hh<12){
        right.innerHTML = " GRAB SOME HEALTHY BREAKFAST!!!";
     }
     else if(hh>12 && hh<18){
        right.innerHTML = " LET'S HAVE SOME LUNCH !!";
     }
    else if(hh>18 && hh<22){
        right.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    }
    else if(hh>22 &&hh<7){
        right.innerHTML = " CLOSE YOUR EYES AND GO TO SLEEP";
    }

}

setInterval(clock,1000)

function set(){
    let time =new Date()
    let hours =time.getHours()
    if(parseInt(change[0].value)===hours)
    {
        m.innerHTML="GOOD MORNING!! WAKE UP!!"
        img.src="./Component 30 – 1.png"
    }
    if(parseInt(change[1].value) === hours)
    {
        m.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP"
        img.src = "./Component 31 – 1 (1).svg"
    }

    if(parseInt(change[2].value) === hours)
    {
        m.innerHTML = "GOOD EVENING !!"
        img.src = "./lunch_image.png"
    }

    if(parseInt(change[3].value) === hours)
    {
        m.innerHTML = "GOOD NIGHT !!"
        img.src = "./Component 32 – 1.png"
    }


    let selectIndex = change[0].selectedIndex
    let target  = change[0].options[selectIndex]
    if(parseInt(selectIndex))
    {
        Time[0].innerHTML = `${target.innerHTML}`
    }

    let selectIndex2 = change[1].selectedIndex
    let target2  = change[1].options[selectIndex2]
    if(parseInt(selectIndex2))
    {
        Time[1].innerHTML = `${target2.innerHTML}`
    }

    let selectIndex3 = change[2].selectedIndex
    let target3  = change[2].options[selectIndex3]
    if(parseInt(selectIndex3))
    {
        Time[2].innerHTML = `${target3.innerHTML}`
    }

    let selectIndex4 = change[3].selectedIndex
    let target4  = change[3].options[selectIndex4]
    if(parseInt(selectIndex4))
    {
        Time[3].innerHTML = `${target4.innerHTML}`
    }
}

button.addEventListener("mouseover",() =>{
    button.innerHTML = "Party time!"
})

button.addEventListener("mouseout",() =>{
    button.innerHTML = "Set Alarm"
})

  

    