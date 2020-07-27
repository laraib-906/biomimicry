var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('shell1Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "/biomimicry/media/animations/shell/shell_01/shell_01.json",
    innerHeight:100
})
var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('shell2Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "/biomimicry/media/animations/shell/shell_02/shell_02.json",
    innerHeight:100
})
var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('shell3Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "/biomimicry/media/animations/shell/shell_03/shell_03.json",
    innerHeight:100
})
var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('shell4Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "/biomimicry/media/animations/shell/shell_04/shell_04.json",
    innerHeight:100
})
function showcircle(){
    animation1.play()
}
function stopcircle (){
    animation1.stop()
}
function showshell(){
    var img= document.getElementById("imageshell")
    var div1=document.getElementById("shell1Ani")
    var div2=document.getElementById("shell2Ani")
    var div3 = document.getElementById("shell3Ani")
    var div4 = document.getElementById("shell4Ani")
    var para1 = document.getElementById("maintextClass1")
    var para2 = document.getElementById("maintextClass2")
    var heading = document.getElementById("mainHeading")
    if(img.style.display && div1.style.display == "block"){
        img.style.display="none"
        div1.style.display="none"
        div2.style.display="block"
        heading.style.display="none"
        animation2.play();
        setTimeout(()=>{if(div2.style.display=="block" ){
                        div2.style.display="none";
                    div3.style.display="block"
                    animation3.play();
                    setTimeout(()=>{
                        if(div3.style.display=="block" ){
                            div3.style.display="none";
                            div4.style.display="block"
                            para1.style.display="block"
                            para2.style.display="block"
                        animation4.play();}
                    },2000)
                }} ,10)
        
            
    }
    
}

function hideshell(){
    var img= document.getElementById("imageshell")
    var div1=document.getElementById("shell1Ani")
    var imgSetting = img.style.display
    var div1Setting = div1.style.display
    var div2=document.getElementById("shell2Ani")
    var div3=document.getElementById("shell3Ani")
    var div4=document.getElementById("shell4Ani")
    var para1 = document.getElementById("maintextClass1")
    var para2 = document.getElementById("maintextClass2")
    var heading = document.getElementById("mainHeading")
    if(imgSetting && div1Setting == "none"){
        img.style.display="block"
        div1.style.display="block"
        heading.style.display="block"
        div2.style.display="none"
        div3.style.display="none"
        div4.style.display="none"
        para2.style.display="none"
        para1.style.display="none"
        animation2.stop();
        animation3.stop();
        animation4.stop();
    }
}