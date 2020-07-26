var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('beetle1Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "/biomimicry/media/animations/Beetle/Beetle_01/Beettle_01.json",
    innerHeight:100
})
var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('beetle2Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "/biomimicry/media/animations/Beetle/Beettle_02/Beetle_02.json",
    innerHeight:100
})
var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('beetle3Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "/biomimicry/media/animations/Beetle/Beetle_03/Beetle_03.json",
    innerHeight:100
})
var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('beetle4Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "/biomimicry/media/animations/Beetle/Beetle_04/Beetle_04.json",
    innerHeight:100
})
function showcircle(){
    animation1.play()
}
function stopcircle (){
    animation1.pause()
}
function showBeetle(){
    var img= document.getElementById("imageBeetle")
    var div1=document.getElementById("beetle1Ani")
    var div2=document.getElementById("beetle2Ani")
    var div3 = document.getElementById("beetle3Ani")
    var div4 = document.getElementById("beetle4Ani")
    if(img.style.display && div1.style.display == "block"){
        img.style.display="none"
        div1.style.display="none"
        div2.style.display="block"
        animation2.play();
        setTimeout(()=>{if(div2.style.display=="block" ){
                        div2.style.display="none";
                    div3.style.display="block"
                    animation3.play();
                    setTimeout(()=>{
                        if(div3.style.display=="block" ){
                            div3.style.display="none";
                            div4.style.display="block"
                        animation4.play();}
                    },2000)
                }} ,1000)
        
            
    }
    
}

function hideBeetle(){
    var img= document.getElementById("imageBeetle")
    var div1=document.getElementById("beetle1Ani")
    var imgSetting = img.style.display
    var div1Setting = div1.style.display
    var div2=document.getElementById("beetle2Ani")
    var div3=document.getElementById("beetle3Ani")
    var div4=document.getElementById("beetle4Ani")
    if(imgSetting && div1Setting == "none"){
        img.style.display="block"
        div1.style.display="block"
        div2.style.display="none"
        div3.style.display="none"
        div4.style.display="none"
        animation2.pause();
        animation3.pause();
        animation4.pause();
    }
}
