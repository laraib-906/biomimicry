var beetleanimation1 = bodymovin.loadAnimation({
    container: document.getElementById('beetle1Ani'),
    renderer: 'svg',
    loop: true,
    autoplay:true,
    path: "media/animations/Beetle/Beetle_01/Beettle_01.json",
    innerHeight:100
})
var beetleanimation2 = bodymovin.loadAnimation({
    container: document.getElementById('beetle2Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/animations/Beetle/Beettle_02/Beetle_02.json",
    innerHeight:100
})
var beetleanimation5 = bodymovin.loadAnimation({
    container: document.getElementById('beetle5Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/animations/Beetle/Beettle_02/Beetle_02.json",
    innerHeight:100
})
var beetleanimation3 = bodymovin.loadAnimation({
    container: document.getElementById('beetle3Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/animations/Beetle/Beetle_Transition.json",
    innerHeight:100
})
var beetleanimation4 = bodymovin.loadAnimation({
    container: document.getElementById('beetle4Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/animations/Beetle/Beetle_AfterHover.json",
    innerHeight:100
})

// func to move circle animation
function showbeetlecircle(){
    var div1=document.getElementById("beetle1Ani")
   beetleanimation5.play()
    div1.style.opacity="0%"
}
function stopbeetlecircle (){
    var div1=document.getElementById("beetle1Ani")
    beetleanimation5.stop()
    div1.style.opacity="100%"
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
    var div5 = document.getElementById("beetle5Ani")
    var beetleImage = document.getElementById("beetle4image")
    var para1 = document.getElementById("beetlemaintextClass1")
    var para2 = document.getElementById("beetlemaintextClass2")
    var heading = document.getElementById("beetlemainHeading")
    if(img.style.display && div1.style.display == "block"){
        img.style.display="none"
        div1.style.display="none"
        heading.style.display="none"
        div2.style.display="block"
        div5.style.display="none"
        beb1.style.display="block"
        beb2.style.display="block"
        beb3.style.display="block"
        beetleImage.style.display="none"
        div4.style.opacity="0%"
        beetleanimation2.play();
        setTimeout(()=>{if(div2.style.display=="block" ){
                        div2.style.display="none";
                    div3.style.display="block"
                    beetleanimation3.play();
                    setTimeout(()=>{
                        if(div3.style.display=="block" ){
                            div3.style.display="none";
                            div4.style.display="block"
                            beetleImage.style.display="block"
                            beetleImage.style.opacity="100%"
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
    var div5=document.getElementById("beetle5Ani")
    var beetleImage = document.getElementById("beetle4image")
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
        div5.style.display="block"
        beetleImage.style.opacity="0%"
        para1.style.display="none"
        para2.style.display="none"
        beetleanimation2.stop();
        beetleanimation3.stop();
        beetleanimation4.stop();
    }
}
function movebeetle(){
    var div4 = document.getElementById("beetle4Ani")
    var beetleImage = document.getElementById("beetle4image")
    div4.style.opacity="100%"
    beetleImage.style.display="none"
    beetleanimation4.play()

}
function stopbeetle(){
    var div4 = document.getElementById("beetle4Ani")
    var beetleImage = document.getElementById("beetle4image")
    div4.style.opacity="0%"
    beetleImage.style.display="block"
    beetleanimation4.stop()
}
// func to hide
function movebeetleB1(){
    beb1.src="media/image/Buttons/Beetle/Beetle_Black_01.svg" 
    beb2.src="media/image/Buttons/Beetle/Beetle_Pink_02.svg"
    beb3.src="media/image/Buttons/Beetle/Beetle_Pink_03.svg"
    showSecBeetle(0)
}
function movebeetleB2(){
    beb2.src="media/image/Buttons/Beetle/Beetle_Black_02.svg" 
    beb1.src="media/image/Buttons/Beetle/Beetle_Pink_01.svg"
    beb3.src="media/image/Buttons/Beetle/Beetle_Pink_03.svg"
    showSecBeetle(1)

}
function movebeetleB3(){
    beb3.src="media/image/Buttons/Beetle/Beetle_Black_03.svg" 
    beb1.src="media/image/Buttons/Beetle/Beetle_Pink_01.svg"
    beb2.src="media/image/Buttons/Beetle/Beetle_Pink_02.svg"
    showSecBeetle(2)

}
function movebeetleB4(){
    var sb4=document.getElementById("beetleb4")
    sb4.src="media/image/Buttons/Beetle/Beetle_UP_AfterHover.svg"
}
function stopbeetleB4(){
    var sb4=document.getElementById("beetleb4")
    sb4.src="media/image/Buttons/Beetle/Beetle_UP_BeforeHover.svg"
}
function showSecBeetle(index){
    ele = [
        document.getElementById("beetlesubDiv"),
        document.getElementById("beetleInsubDiv"),
        document.getElementById("beetleInsubDiv1"),
    ]
    for (let e of ele){
        e.style.display = "none"
    }
    ele[index].style.display = "block"
}