var JoinUsBackground = bodymovin.loadAnimation({
    container: document.getElementById('joinBackground'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "15_JoinUs/Join_Background.json",
    innerHeight:100
})
var JoinImg1jason = bodymovin.loadAnimation({
    container: document.getElementById('joinImg1Jason'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "15_JoinUs/FirstStep_AfterHover.json",
    innerHeight:100
})
function movejoinImg1(){
    var Img1json = document.getElementById("joinImg1Jason")
    Img1json.style.display="block"
    var Img1 = document.getElementById(joinImg1);
    Img1.style.display="none"
}
function stopjoinImg1(){
    var Img1json = document.getElementById("joinImg1Jason")
    Img1json.style.display="none"
    var Img1 = document.getElementById(joinImg1);
    Img1.style.display="block"
}
var JoinImg2jason = bodymovin.loadAnimation({
    container: document.getElementById('joinImg2Jason'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "15_JoinUs/SecondStep_AfterHover.json",
    innerHeight:100
})
function movejoinImg2(){
    var Img1json = document.getElementById("joinImg2Jason")
    Img1json.style.display="block"
    var Img1 = document.getElementById('joinImg2');
    Img1.style.display="none"
}
function stopjoinImg2(){
    var Img1json = document.getElementById("joinImg2Jason")
    Img1json.style.display="none"
    var Img1 = document.getElementById('joinImg2');
    Img1.style.display="block"
}
var JoinImg3jason = bodymovin.loadAnimation({
    container: document.getElementById('joinImg3Jason'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "15_JoinUs/ThirdStep_AfterHover.json",
    innerHeight:100
})
function movejoinImg3(){
    var Img1json = document.getElementById("joinImg3Jason")
    Img1json.style.display="block"
    var Img1 = document.getElementById('joinImg3');
    Img1.style.display="none"
}
function stopjoinImg3(){
    var Img1json = document.getElementById("joinImg3Jason")
    Img1json.style.display="none"
    var Img1 = document.getElementById('joinImg3');
    Img1.style.display="block"
}
var JoinImg4jason = bodymovin.loadAnimation({
    container: document.getElementById('joinImg4Jason'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "15_JoinUs/LastStep_AfterHover.json",
    innerHeight:100
})
function movejoinImg4(){
    var Img1json = document.getElementById("joinImg4Jason")
    Img1json.style.display="block"
    var Img1 = document.getElementById('joinImg4');
    Img1.style.display="none"
}
function stopjoinImg4(){
    var Img1json = document.getElementById("joinImg4Jason")
    Img1json.style.display="none"
    var Img1 = document.getElementById('joinImg4');
    Img1.style.display="block"
}

function moveSignUpb1(){
    var Img1json = document.getElementById("SignUpb1json")
    Img1json.style.display="block"
    var Img1 = document.getElementById('SignUpb1');
    Img1.style.display="none"
}


function movecheckb1(){
    var Img1json = document.getElementById("joinCheckBox1Svg")
    Img1json.style.display="block"
    var Img1 = document.getElementById('joinCheckBox1');
    Img1.style.display="none"
}


function movecheckb2(){
    var Img1json = document.getElementById("joinCheckBox2Svg")
    Img1json.style.display="block"
    var Img1 = document.getElementById('joinCheckBox2');
    Img1.style.display="none"
}
