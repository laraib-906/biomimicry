function moveBeetleMap(){
    var imagMap = document.getElementById("beetleInMap");
    imagMap.src="media/image/12_Beetle_SecondPage/Beetle_Map_AfterHover.svg"
    
}
function stopBeetleMap(){
    var imagMap = document.getElementById("beetleInMap");
    imagMap.src="media/image/12_Beetle_SecondPage/Beetle_Map_BeforeHover.svg"
    
}
// life cycle
var beetlecycleAnmation = bodymovin.loadAnimation({
    container: document.getElementById('jsonCycleBeetle'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "media/image/12_Beetle_SecondPage/Beetle_Lifecicle.json",
    innerHeight:100
})
function movebeetlecycle(){
    var imagani = document.getElementById("jsonCycleBeetle");
    imagani.style.display="block";
    beetlecycleAnmation.play();
    var beetleimg = document.getElementById('lifeCycleBeetle');
    beetleimg.style.display="none";
}
function stopbeetlecycle(){
    var imagani = document.getElementById("jsonCycleBeetle");
    imagani.style.display="none";
    var beetleimg = document.getElementById('lifeCycleBeetle');
    beetleimg.style.display="block";
    beetlecycleAnmation.stop();
    
}
// move beetle
var beetlehoverAnmation = bodymovin.loadAnimation({
    container: document.getElementById('beetleIn1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "media/image/12_Beetle_SecondPage/Beetle_AfterHover.json",
    innerHeight:100
})
function movebeetleIn(){
    var imagani = document.getElementById("beetleIn1");
    imagani.style.display="block";
    beetlehoverAnmation.play();
    var beetleimg = document.getElementById('beetleInImage');
    beetleimg.style.display="none";
}
function stopbeetleIn(){
    var imagani = document.getElementById("beetleIn1");
    imagani.style.display="none";
    var beetleimg = document.getElementById('beetleInImage');
    beetleimg.style.display="block";
    beetlehoverAnmation.stop();
    
}


//  third page
var beetleInternalAnmation = bodymovin.loadAnimation({
    container: document.getElementById('beetlerealAni'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "media/image/13_Beetle_ThirdPage/BeetlePicture_AfterHover.json",
    innerHeight:100
})
function movebeetleInEx(){
    var imagani = document.getElementById("beetlerealAni");
    imagani.style.display="block"
    beetleInternalAnmation.play();
}
function stopbeetleInEx(){
    var imagani = document.getElementById("beetlerealAni");
    imagani.style.display="none"
    var beetleimg = document.getElementById('beetleRealImage')
    beetleimg.style.display="block"
    beetleInternalAnmation.stop();
    
}