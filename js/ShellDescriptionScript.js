function moveShellMap(){
    var imagMap = document.getElementById("shellInMap");
    imagMap.src="./media/image/06_Shell_SecondPage/Shell_Map_AfterHover.svg"
    
}
function stopShellMap(){
    var imagMap = document.getElementById("shellInMap");
    imagMap.src="./media/image/06_Shell_SecondPage/Shell_Map_BeforeHover.svg"
    
}
// second page sell hover
var shellhoverAnmation = bodymovin.loadAnimation({
    container: document.getElementById('shellIn1'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "./media/image/06_Shell_SecondPage/Shell_AfterHover.json",
    innerHeight:100
})
function moveShellIn(){
    var imagani = document.getElementById("shellIn1");
    imagani.style.display="block"
    shellhoverAnmation.play();
    var shellimg = document.getElementById('shellInImage')
    shellimg.style.display="none"
}
function stopShellIn(){
    var imagani = document.getElementById("shellIn1");
    imagani.style.display="none"
    var shellimg = document.getElementById('shellInImage')
    shellimg.style.display="block"
    // shellhoverAnmation.stop();
    
}
function moveShellchart(){
    var imagMap = document.getElementById("shellInchart");
    imagMap.src="./media/image/06_Shell_SecondPage/ShellChart_AfterHover.svg"
    
}
function stopShellchart(){
    var imagMap = document.getElementById("shellInchart");
    imagMap.src="./media/image/06_Shell_SecondPage/ShellChart_BeforeHover.svg"
    
}

//  third page
var shellhoverExAnmation = bodymovin.loadAnimation({
    container: document.getElementById('shellrealAni'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "./media/image/07_Shell_ThirdPage/ShellPicture_AfterHover.json",
    innerHeight:100
})
function moveShellInEx(){
    var imagani = document.getElementById("shellrealAni");
    imagani.style.display="block"
    shellhoverExAnmation.play();
}
function stopShellInEx(){
    var imagani = document.getElementById("shellrealAni");
    imagani.style.display="none"
    var shellimg = document.getElementById('shellRealImage')
    shellimg.style.display="block"
    shellhoverExAnmation.stop();
    
}