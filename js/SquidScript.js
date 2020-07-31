var squidanimation1 = bodymovin.loadAnimation({
    container: document.getElementById('squid1Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "media/animations/Squid/Squid_01/Squid_01.json",
    innerHeight:100
})
var squidanimation2 = bodymovin.loadAnimation({
    container: document.getElementById('squid2Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/animations/Squid/Squid_02/Squid_02.json",
    innerHeight:100
})
var squidanimation5 = bodymovin.loadAnimation({
    container: document.getElementById('squid5Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/animations/Squid/Squid_02/Squid_02.json",
    innerHeight:100
})
var squidanimation3 = bodymovin.loadAnimation({
    container: document.getElementById('squid3Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/animations/Squid/Squid_Transition.json",
    innerHeight:100
})
var squidanimation4 = bodymovin.loadAnimation({
    container: document.getElementById('squid4Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "media/animations/Squid/Squid_Hover.json",
    innerHeight:100
})
// func to move circle animation
function showsquidcircle(){
    var div1=document.getElementById("squid1Ani")
   squidanimation5.play()
    div1.style.opacity="0%"
}
function stopsquidcircle(){
    var div1=document.getElementById("squid1Ani")
    squidanimation5.stop()
    div1.style.opacity="100%"
}
// button initialization
var sqb1 = document.getElementById("squidb1");
var sqb2 = document.getElementById("squidb2");
var sqb3 = document.getElementById("squidb3");
// show funct
function showsquid(){
    var img= document.getElementById("imagesquid")
    var div1=document.getElementById("squid1Ani")
    var div2=document.getElementById("squid2Ani")
    var div3 = document.getElementById("squid3Ani")
    var div4 = document.getElementById("squid4Ani")
    var div5=document.getElementById("squid5Ani")
    var squidImage = document.getElementById("squid4image")
    var para1 = document.getElementById("squidmaintextClass1")
    var para2 = document.getElementById("squidmaintextClass2")
    var heading = document.getElementById("squidmainHeading")
    if(img.style.display && div1.style.display == "block"){
        img.style.display="none"
        div1.style.display="none"
        sqb1.style.display="block"
        sqb2.style.display="block"
        sqb3.style.display="block"
        div2.style.display="block"
        div5.style.display="none"
        squidImage.style.display="none"
        div4.style.opacity="0%"
        heading.style.display="none"
        squidanimation2.play();
        setTimeout(()=>{if(div2.style.display=="block" ){
                        div2.style.display="none";
                    div3.style.display="block"
                    squidanimation3.play();
                    setTimeout(()=>{
                        if(div3.style.display=="block" ){
                            div3.style.display="none";
                            div4.style.display="block";
                            squidImage.style.display="block"
                            squidImage.style.opacity="100%"
                            para1.style.display="block";
                            para2.style.display="block";
                            squidanimation4.play();}
                    },2000)
                }} ,10)
        
            
    }
    
}
// function to hide
function hidesquid(){
    var img= document.getElementById("imagesquid")
    var div1=document.getElementById("squid1Ani")
    var imgSetting = img.style.display
    var div1Setting = div1.style.display
    var div2=document.getElementById("squid2Ani")
    var div3=document.getElementById("squid3Ani")
    var div4=document.getElementById("squid4Ani")
    var div5=document.getElementById("squid5Ani")
    var squidImage = document.getElementById("squid4image")
    var para1 = document.getElementById("squidmaintextClass1")
    var para2 = document.getElementById("squidmaintextClass2")
    var heading = document.getElementById("squidmainHeading")
    if(imgSetting && div1Setting == "none"){
        img.style.display="block"
        div1.style.display="block"
        heading.style.display="block"
        sqb1.style.display="none"
        sqb2.style.display="none"
        sqb3.style.display="none"
        div2.style.display="none"
        div3.style.display="none"
        div4.style.display="none"
        div5.style.display="block"
        squidImage.style.opacity="0%"
        para1.style.display="none"
        para2.style.display="none"
        squidanimation2.stop();
        squidanimation3.stop();
        squidanimation4.stop();
    }
}
// move svg
function movesquid(){
    var div4 = document.getElementById("squid4Ani")
    var squidImage = document.getElementById("squid4image")
    div4.style.opacity="100%"
    squidImage.style.display="none"
    squidanimation4.play()

}
function stopsquid(){
    var div4 = document.getElementById("squid4Ani")
    var squidImage = document.getElementById("squid4image")
    div4.style.opacity="0%"
    squidImage.style.display="block"
    squidanimation4.stop()
}
// button function 
function movesquidB1(){
    sqb1.src="media/image/Buttons/Squid/Squid_Black_01.svg" 
    sqb2.src="media/image/Buttons/Squid/Squid_Blue_02.svg"
    sqb3.src="media/image/Buttons/Squid/Squid_Blue_03.svg"
    showSecS(0)
}
function movesquidB2(){
    sqb2.src="media/image/Buttons/Squid/Squid_Black_02.svg" 
    sqb1.src="media/image/Buttons/Squid/Squid_Blue_01.svg"
    sqb3.src="media/image/Buttons/Squid/Squid_Blue_03.svg"
    showSecS(1)

}
function movesquidB3(){
    sqb3.src="media/image/Buttons/Squid/Squid_Black_03.svg" 
    sqb1.src="media/image/Buttons/Squid/Squid_Blue_01.svg"
    sqb2.src="media/image/Buttons/Squid/Squid_Blue_02.svg"
    showSecS(2)

}
// back button
function movesquidB4(){
    var sb4=document.getElementById("squidb4")
    sb4.src="media/image/Buttons/Squid/Squid_UP_AfterHover.svg"
}
function stopsquidB4(){
    var sb4=document.getElementById("squidb4")
    sb4.src="media/image/Buttons/Squid/Squid_UP_BeforeHover.svg"
}
function showSecS(index){
    console.log("")
    var eleShell = [
        document.getElementById("squidsubDiv"),
        document.getElementById("squidInsubDiv"),
        document.getElementById("squidInsubDiv1"),
    ]
    for (let e of eleShell){
        console.log(e)
        e.style.display = "none"
    }
    eleShell[index].style.display = "block"
}