var beetleanimation1 = bodymovin.loadAnimation({
    container: document.getElementById('beetle1Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "../media/animations/Beetle/Beetle_01/Beettle_01.json",
    innerHeight:100
})
var beetleanimation2 = bodymovin.loadAnimation({
    container: document.getElementById('beetle2Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "../media/animations/Beetle/Beettle_02/Beetle_02.json",
    innerHeight:100
})
var beetleanimation3 = bodymovin.loadAnimation({
    container: document.getElementById('beetle3Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "../media/animations/Beetle/Beetle_03/Beetle_03.json",
    innerHeight:100
})
var beetleanimation4 = bodymovin.loadAnimation({
    container: document.getElementById('beetle4Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "../media/animations/Beetle/Beetle_04/Beetle_04.json",
    innerHeight:100
})
// func to move circle animation
function showcircle(){
    beetleanimation1.play()
}
function stopcircle (){
    beetleanimation1.pause()
}
// buttons initialization
var beb1 = document.getElementById("beetleb1");
var beb2 = document.getElementById("beetleb2");
var beb3 = document.getElementById("beetleb3");
// func to show
function showBeetle(){
    var img= document.getElementById("imageBeetle")
    var div1=document.getElementById("beetle1Ani")
    var div2=document.getElementById("beetle2Ani")
    var div3 = document.getElementById("beetle3Ani")
    var div4 = document.getElementById("beetle4Ani")
    var para1 = document.getElementById("beetlemaintextClass1")
    var para2 = document.getElementById("beetlemaintextClass2")
    var heading = document.getElementById("beetlemainHeading")
    if(img.style.display && div1.style.display == "block"){
        img.style.display="none"
        div1.style.display="none"
        heading.style.display="none"
        div2.style.display="block"
        beb1.style.display="block"
        beb2.style.display="block"
        beb3.style.display="block"
        beetleanimation2.play();
        setTimeout(()=>{if(div2.style.display=="block" ){
                        div2.style.display="none";
                    div3.style.display="block"
                    beetleanimation3.play();
                    setTimeout(()=>{
                        if(div3.style.display=="block" ){
                            div3.style.display="none";
                            div4.style.display="block"
                            para1.style.display="block";
                            para2.style.display="block";
                            beetleanimation4.play();}
                    },2000)
                }} ,10)
        
            
    }
    
}
// func to hide
function hideBeetle(){
    var img= document.getElementById("imageBeetle")
    var div1=document.getElementById("beetle1Ani")
    var div2=document.getElementById("beetle2Ani")
    var div3=document.getElementById("beetle3Ani")
    var div4=document.getElementById("beetle4Ani")
    var para1 = document.getElementById("beetlemaintextClass1")
    var para2 = document.getElementById("beetlemaintextClass2")
    var heading = document.getElementById("beetlemainHeading")
    if(img.style.display && div1.style.display == "none"){
        img.style.display="block"
        div1.style.display="block"
        heading.style.display="block"
        beb1.style.display="none"
        beb2.style.display="none"
        beb3.style.display="none"
        div2.style.display="none"
        div3.style.display="none"
        div4.style.display="none"
        para1.style.display="none"
        para2.style.display="none"
        beetleanimation2.stop();
        beetleanimation3.stop();
        beetleanimation4.stop();
    }
}
// func to hide
function movebeetleB1(){
    beb1.src="../media/image/Buttons/Beetle/Beetle_Black_01.svg" 
    beb2.src="../media/image/Buttons/Beetle/Beetle_Pink_02.svg"
    beb3.src="../media/image/Buttons/Beetle/Beetle_Pink_03.svg"
}
function movebeetleB2(){
    beb2.src="../media/image/Buttons/Beetle/Beetle_Black_02.svg" 
    beb1.src="../media/image/Buttons/Beetle/Beetle_Pink_01.svg"
    beb3.src="../media/image/Buttons/Beetle/Beetle_Pink_03.svg"
}
function movebeetleB3(){
    beb3.src="../media/image/Buttons/Beetle/Beetle_Black_03.svg" 
    beb1.src="../media/image/Buttons/Beetle/Beetle_Pink_01.svg"
    beb2.src="../media/image/Buttons/Beetle/Beetle_Pink_02.svg"
}