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
    hideSlideBtn("squidb4")
    squid4Block = document.getElementById("squid4Block")
    var textBtn = document.getElementsByClassName("sq-btn-text")[0]

    var img= document.getElementById("imagesquid")
    var div1=document.getElementById("squid1Ani")
    var div2=document.getElementById("squid2Ani")
    var div3 = document.getElementById("squid3Ani")
    // var div4 = document.getElementById("squid4Ani")
    var div5=document.getElementById("squid5Ani")
    var squidImage = document.getElementById("squid4image")
    var para1 = document.getElementById("squidmaintextClass1")
    var para2 = document.getElementById("squidmaintextClass2")
    var heading = document.getElementById("squidmainHeading")
    var txt1 = document.getElementById("Solutions2")
    var txt2 = document.getElementById("DISCOVERED_BY_AI2")
    hideElement(txt1)
    hideElement(txt2)
    hideElement(img)
    hideElement(div1)
    hideElement(heading)
    // hideElement(squidImage)
    hideElement(div5)
    showElement(textBtn )

    showElement(div2 )
    showElement(sqb1 )
    showElement(sqb2 )
    showElement(sqb3 )

        // div4.style.opacity="0%"
        squidanimation2.play();
        setTimeout(()=>{
            hideElement(div2)
            showElement(div3 )
                    squidanimation3.play();
                    setTimeout(()=>{
                        squid4Block.style.display = "block"

                        hideElement(div3)
                        showElement(squidImage )
                        showElement(para1 )
                        showElement(para2 )
                        showElement(squidImage )
                    },2000)
                } ,10)
        
            
    
    
}
// function to hide
function hidesquid(){
    showSlideBtn("squidb4")
    showSecS(0)
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
    squid4Block = document.getElementById("squid4Block")
    var textBtn = document.getElementsByClassName("sq-btn-text")
    var txt1 = document.getElementById("Solutions2")
    var txt2 = document.getElementById("DISCOVERED_BY_AI2")
    showElement(txt1)
    showElement(txt2)
    squid4Block.style.display = "none"
    for(let i of textBtn)
        hideElement(i)


    showElement(img )
    showElement(div1 )
    showElement(heading )
    showElement(div5 )
    hideElement(sqb1)
    hideElement(sqb2)
    hideElement(sqb3)
    hideElement(div2)
    hideElement(div4)
    hideElement(para1)
    hideElement(para2)
    hideElement(div3)
    hideElement(squidImage)

        // squidImage.style.opacity="0%"

        squidanimation2.stop();
        squidanimation3.stop();
        squidanimation4.stop();
    
}
// move svg
function movesquid(){
    var div4 = document.getElementById("squid4Ani")
    var squidImage = document.getElementById("squid4image")
    hideElement(squidImage)
    showElement(div4 )
    squidanimation4.play()

}
function stopsquid(){
    var div4 = document.getElementById("squid4Ani")
    var squidImage = document.getElementById("squid4image")
    hideElement(div4)
    showElement(squidImage )

    squidanimation4.stop()
}
// button function 
function movesquidB1(){
    sqb1.src="media/image/Buttons/Squid/Squid_Black_01.svg" 
    sqb2.src="media/image/Buttons/Squid/Squid_Blue_02.svg"
    sqb3.src="media/image/Buttons/Squid/Squid_Blue_03.svg"
    showSecS(0)
    btnText(0,"sq-btn-text")
}
function movesquidB2(){
    sqb2.src="media/image/Buttons/Squid/Squid_Black_02.svg" 
    sqb1.src="media/image/Buttons/Squid/Squid_Blue_01.svg"
    sqb3.src="media/image/Buttons/Squid/Squid_Blue_03.svg"
    showSecS(1)
    btnText(1,"sq-btn-text")

}
function movesquidB3(){
    sqb3.src="media/image/Buttons/Squid/Squid_Black_03.svg" 
    sqb1.src="media/image/Buttons/Squid/Squid_Blue_01.svg"
    sqb2.src="media/image/Buttons/Squid/Squid_Blue_02.svg"
    showSecS(2)
    btnText(2,"sq-btn-text")

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