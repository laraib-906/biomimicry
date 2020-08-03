var shellanimation1 = bodymovin.loadAnimation({
    container: document.getElementById('shell1Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "media/animations/Shell/Shell_01/Shell_01.json",
    innerHeight:100
})
var shellanimation2 = bodymovin.loadAnimation({
    container: document.getElementById('shell2Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/animations/Shell/Shell_02/Shell_02.json",
    innerHeight:100
})
var shellanimation5 = bodymovin.loadAnimation({
    container: document.getElementById('shell5Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "media/animations/Shell/Shell_02/Shell_02.json",
    innerHeight:100
})
var shellanimation3 = bodymovin.loadAnimation({
    container: document.getElementById('shell3Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/animations/Shell/Shell_Transition.json",
    innerHeight:100
})
var shellanimation4 = bodymovin.loadAnimation({
    container: document.getElementById('shell4Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "media/animations/Shell/Shell_AfterHover.json",
    innerHeight:100
})
// func to move circle animation
function showshellcircle(){
    var div1=document.getElementById("shell1Ani")
    shellanimation5.play()
    div1.style.opacity="0%"
}
function stopshellcircle (){
    var div1=document.getElementById("shell1Ani")
    shellanimation5.stop()
    div1.style.opacity="100%"
}
// button intillization
var sb1 = document.getElementById("shellb1");
var sb2 = document.getElementById("shellb2");
var sb3 = document.getElementById("shellb3");
// function to show
function showshell(){
    hideSlideBtn("shellb4")
    var ImageBlock = document.getElementById("shell4Block")
    var textBtn = document.getElementsByClassName("s-btn-text")[0]

    var img= document.getElementById("imageshell")
    var div1=document.getElementById("shell1Ani")
    var div2=document.getElementById("shell2Ani")
    var div3 = document.getElementById("shell3Ani")
    var div5 = document.getElementById("shell5Ani")
    var para1 = document.getElementById("shellmaintextClass1")
    var para2 = document.getElementById("shellmaintextClass2")
    var heading = document.getElementById("shellmainHeading")
    var shellImage = document.getElementById("shell4image")
    var txt1 = document.getElementById("Solutions1")
    var txt2 = document.getElementById("DISCOVERED_BY_AI1")
    hideElement(txt1)
    hideElement(txt2)

    hideElement(img)
    hideElement(div1)
    hideElement(heading)
    hideElement(shellImage)
    hideElement(div5)
    showElement(textBtn)
    showElement(div2 )
    showElement(sb1 )
    showElement(sb2 )
    showElement(sb3 )

        shellanimation2.play();
        setTimeout(()=>{
            hideElement(div2)
            showElement(div3 )
                    shellanimation3.play();
                    setTimeout(()=>{
                        hideElement(div3)
                        showElement(shellImage )
                        showElement(para1 )
                        showElement(para2 )
                        showElement(shellImage )
                        ImageBlock.style.display = "block"

                            // shellImage.style.opacity="100%"

                            // shellanimation4.play();
                        
                    },2000)
                } ,10)
        
            
    
    
}
// function to hide
function hideshell(){
    showSlideBtn("shellb4")
    showSecShell(0)
    var textBtn = document.getElementsByClassName("s-btn-text")
    var img= document.getElementById("imageshell")
    var div1=document.getElementById("shell1Ani")
    var div2=document.getElementById("shell2Ani")
    var div3=document.getElementById("shell3Ani")
    var div4=document.getElementById("shell4Ani")
    var div5 = document.getElementById("shell5Ani")
    var shellImage = document.getElementById("shell4image")
    var para1 = document.getElementById("shellmaintextClass1")
    var para2 = document.getElementById("shellmaintextClass2")
    var heading = document.getElementById("shellmainHeading")
    var ImageBlock = document.getElementById("shell4Block")
    var txt1 = document.getElementById("Solutions1")
    var txt2 = document.getElementById("DISCOVERED_BY_AI1")
    showElement(txt1)
    showElement(txt2)
    ImageBlock.style.display = "none"
    for(let i of textBtn)
        hideElement(i)

    showElement(img )
    showElement(div1 )
    showElement(heading )
    showElement(div5 )
    hideElement(sb1)
    hideElement(sb2)
    hideElement(sb3)
    hideElement(div2)
    hideElement(div4)
    hideElement(para1)
    hideElement(para2)
    hideElement(div3)
    hideElement(shellImage)


        shellanimation2.stop();
        shellanimation3.stop();
        shellanimation4.stop();

}
function moveShell(){
    var div4 = document.getElementById("shell4Ani")
    var shellImage = document.getElementById("shell4image")
    showElement(div4 )
    hideElement(shellImage)
    shellanimation4.play()

}
function stopShell(){
    var div4 = document.getElementById("shell4Ani")
    var shellImage = document.getElementById("shell4image")

    showElement(shellImage )
    hideElement(div4)
    shellanimation4.stop()
}
// function for button
function moveshellB1(){
    sb1.src="../media/image/Buttons/Shell/Shell_Black_01.svg" 
    sb2.src="../media/image/Buttons/Shell/Shell_Yellow_02.svg"
    sb3.src="../media/image/Buttons/Shell/Shell_Yellow_03.svg"
    showSecShell(0)
    btnText(0,"s-btn-text")

}
function moveshellB2(){
    sb2.src="../media/image/Buttons/Shell/Shell_Black_02.svg" 
    sb1.src="../media/image/Buttons/Shell/Shell_Yellow_01.svg"
    sb3.src="../media/image/Buttons/Shell/Shell_Yellow_03.svg"
    showSecShell(1)
    btnText(1,"s-btn-text")


}
function moveshellB3(){
    sb3.src="../media/image/Buttons/Shell/Shell_Black_03.svg" 
    sb1.src="../media/image/Buttons/Shell/Shell_Yellow_01.svg"
    sb2.src="../media/image/Buttons/Shell/Shell_Yellow_02.svg"
    showSecShell(2)
    btnText(2,"s-btn-text")


}
function moveshellB4(){
    var sb4=document.getElementById("shellb4")
    sb4.src="media/image/Buttons/Shell/Shell_UP_AfterHover.svg"
}
function stopshellB4(){
    var sb4=document.getElementById("shellb4")
    sb4.src="media/image/Buttons/Shell/Shell_UP_BeforeHover.svg"
}
function showSecShell(index){
    console.log("")
    var eleShell = [
        document.getElementById("shellsubDiv"),
        document.getElementById("shellInsubDiv"),
        document.getElementById("shellInsubDiv1"),
    ]
    for (let e of eleShell){
        console.log(e)
        e.style.display = "none"
    }
    eleShell[index].style.display = "block"
}