var squidhoverAnmation = bodymovin.loadAnimation({
    container: document.getElementById('squidIn1'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/image/09_Squid_SecondPage/Squid_AfterHover.json",
    innerHeight:100
})
function movesquidIn(){
    var imagani = document.getElementById("squidIn1");
    imagani.style.display="block"
    squidhoverAnmation.play();
    var squidimg = document.getElementById('squidInImage')
    squidimg.style.display="none"
}
function stopsquidIn(){
    var imagani = document.getElementById("squidIn1");
    imagani.style.display="none"
    var squidimg = document.getElementById('squidInImage')
    squidimg.style.display="block"
    squidhoverAnmation.stop();
    
}
// squid arm
var squidArmAnmation = bodymovin.loadAnimation({
    container: document.getElementById('squidInArm1'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/image/09_Squid_SecondPage/Squid_Arm_AfterHover.json",
    innerHeight:100
})
function moveSquidArm(){
    var imagani = document.getElementById("squidInArm1");
    imagani.style.display="block"
    squidArmAnmation.play();
    var squidimg = document.getElementById('squidInArm')
    squidimg.style.display="none"
}
function stopSquidArm(){
    var imagani = document.getElementById("squidInArm1");
    imagani.style.display="none"
    var squidimg = document.getElementById('squidInArm')
    squidimg.style.display="block"
    squidArmAnmation.stop();
    
}
var shellhoverExAnmation = bodymovin.loadAnimation({
    container: document.getElementById('squidrealAni'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/image/10_Squid_ThirdPage/SquidPicture_AfterHover.json",
    innerHeight:100
})
function movesquidInEx(){
    var imagani = document.getElementById("squidrealAni");
    imagani.style.display="block"
    shellhoverExAnmation.play();
}
function stopsquidInEx(){
    var imagani = document.getElementById("squidrealAni");
    imagani.style.display="none"
    var shellimg = document.getElementById('squidRealImage')
    shellimg.style.display="block"
    shellhoverExAnmation.stop();
    
}