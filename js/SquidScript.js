var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('squid1Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "/biomimicry/media/animations/squid/squid_01/squid_01.json",
    innerHeight:100
})
var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('squid2Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "/biomimicry/media/animations/squid/squid_02/squid_02.json",
    innerHeight:100
})
var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('squid3Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "/biomimicry/media/animations/squid/squid_03/squid_03.json",
    innerHeight:100
})
var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('squid4Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "/biomimicry/media/animations/squid/squid_04/squid_04.json",
    innerHeight:100
})
function showcircle(){
    animation1.play()
}
function stopcircle (){
    animation1.pause()
}
function showsquid(){
    var img= document.getElementById("imagesquid")
    var div1=document.getElementById("squid1Ani")
    var div2=document.getElementById("squid2Ani")
    var div3 = document.getElementById("squid3Ani")
    var div4 = document.getElementById("squid4Ani")
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

function hidesquid(){
    var img= document.getElementById("imagesquid")
    var div1=document.getElementById("squid1Ani")
    var imgSetting = img.style.display
    var div1Setting = div1.style.display
    var div2=document.getElementById("squid2Ani")
    var div3=document.getElementById("squid3Ani")
    var div4=document.getElementById("squid4Ani")
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