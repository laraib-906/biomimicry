var shellanimation1 = bodymovin.loadAnimation({
    container: document.getElementById('shell1Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "../media/animations/Shell/Shell_01/Shell_01.json",
    innerHeight:100
})
var shellanimation2 = bodymovin.loadAnimation({
    container: document.getElementById('shell2Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "../media/animations/Shell/Shell_02/Shell_02.json",
    innerHeight:100
})
var shellanimation3 = bodymovin.loadAnimation({
    container: document.getElementById('shell3Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "../media/animations/Shell/Shell_03/Shell_03.json",
    innerHeight:100
})
var shellanimation4 = bodymovin.loadAnimation({
    container: document.getElementById('shell4Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "../media/animations/Shell/Shell_04/Shell_04.json",
    innerHeight:100
})
// func to move circle animation
function showcircle(){
    shellanimation1.play()
}
function stopcircle (){
    shellanimation1.stop()
}
// button intillization
var sb1 = document.getElementById("shellb1");
var sb2 = document.getElementById("shellb2");
var sb3 = document.getElementById("shellb3");
// function to show
function showshell(){
    var img= document.getElementById("imageshell")
    var div1=document.getElementById("shell1Ani")
    var div2=document.getElementById("shell2Ani")
    var div3 = document.getElementById("shell3Ani")
    var div4 = document.getElementById("shell4Ani")
    var para1 = document.getElementById("shellmaintextClass1")
    var para2 = document.getElementById("shellmaintextClass2")
    var heading = document.getElementById("shellmainHeading")
    if(img.style.display && div1.style.display == "block"){
        img.style.display="none"
        div1.style.display="none"
        div2.style.display="block"
        sb1.style.display="block"
        sb2.style.display="block"
        sb3.style.display="block"
        heading.style.display="none"
        shellanimation2.play();
        setTimeout(()=>{if(div2.style.display=="block" ){
                        div2.style.display="none";
                    div3.style.display="block"
                    shellanimation3.play();
                    setTimeout(()=>{
                        if(div3.style.display=="block" ){
                            div3.style.display="none";
                            div4.style.display="block"
                            para1.style.display="block"
                            para2.style.display="block"
                            shellanimation4.play();}
                    },2000)
                }} ,10)
        
            
    }
    
}
// function to hide
function hideshell(){
    var img= document.getElementById("imageshell")
    var div1=document.getElementById("shell1Ani")
    var div2=document.getElementById("shell2Ani")
    var div3=document.getElementById("shell3Ani")
    var div4=document.getElementById("shell4Ani")
    var para1 = document.getElementById("shellmaintextClass1")
    var para2 = document.getElementById("shellmaintextClass2")
    var heading = document.getElementById("shellmainHeading")
    if(img.style.display && div1.style.display == "none"){
        img.style.display="block"
        div1.style.display="block"
        heading.style.display="block"
        sb1.style.display="none"
        sb2.style.display="none"
        sb3.style.display="none"
        div2.style.display="none"
        div3.style.display="none"
        div4.style.display="none"
        para2.style.display="none"
        para1.style.display="none"
        shellanimation2.stop();
        shellanimation3.stop();
        shellanimation4.stop();
    }
}
// function for button
function moveshellB1(){
    sb1.src="../media/image/Buttons/Shell/Shell_Black_01.svg" 
    sb2.src="../media/image/Buttons/Shell/Shell_Yellow_02.svg"
    sb3.src="../media/image/Buttons/Shell/Shell_Yellow_03.svg"
}
function moveshellB2(){
    sb2.src="../media/image/Buttons/Shell/Shell_Black_02.svg" 
    sb1.src="../media/image/Buttons/Shell/Shell_Yellow_01.svg"
    sb3.src="../media/image/Buttons/Shell/Shell_Yellow_03.svg"
}
function moveshellB3(){
    sb3.src="../media/image/Buttons/Shell/Shell_Black_03.svg" 
    sb1.src="../media/image/Buttons/Shell/Shell_Yellow_01.svg"
    sb2.src="../media/image/Buttons/Shell/Shell_Yellow_02.svg"
}
