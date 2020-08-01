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
function hideSlideBtn (backBtn){
    var btn = document.getElementsByClassName("slide-btn")
    for( let i of btn)
        i.style.display = "none"
    document.getElementById(backBtn).style.display = "block"
}
function showSlideBtn (backBtn){
    var btn = document.getElementsByClassName("slide-btn")
    for( let i of btn)
        i.style.display = "block"
    document.getElementById(backBtn).style.display = "none"
}

function hideElement(ele){
    ele.classList.remove("op1")
    ele.classList.add("op0")
    ele.style.pointerEvent = "none"
    
}
function showElement(ele){
    ele.classList.remove("op0")
    ele.classList.add("op1")
    ele.style.pointerEvent = "all"

}

// buttons initialization
var beb1 = document.getElementById("beetleb1");
var beb2 = document.getElementById("beetleb2");
var beb3 = document.getElementById("beetleb3");
// func to show
function showBeetle(){
    hideSlideBtn("beetleb4")

    var img= document.getElementById("imageBeetle")
    var div1=document.getElementById("beetle1Ani")
    var div2=document.getElementById("beetle2Ani")
    var div3 = document.getElementById("beetle3Ani")
    // var div4 = document.getElementById("beetle4Ani")
    var div5 = document.getElementById("beetle5Ani")
    var beetleImage = document.getElementById("beetle4image")
    var para1 = document.getElementById("beetlemaintextClass1")
    var para2 = document.getElementById("beetlemaintextClass2")
    var heading = document.getElementById("beetlemainHeading")
    var ImageBlock = document.getElementById("beetle4Block")
    var textBtn = document.getElementsByClassName("btn-text")[0]
        hideElement(img)
        hideElement(div1)
        hideElement(heading)
        hideElement(beetleImage)
        hideElement(div5)

        showElement(textBtn )
        showElement(div2 )
        showElement(beb1 )
        showElement(beb2 )
        showElement(beb3 )




        
        // div4.style.opacity="0%"
        beetleanimation2.play();
        setTimeout(()=>{
            hideElement(div2)
            showElement(div3 )
                    beetleanimation3.play();
                    setTimeout(()=>{
                        hideElement(div3)
                        // showElement(div4 )
                        showElement(beetleImage )
                        showElement(para1 )
                        showElement(para2 )
                            beetleImage.style.opacity="100%"
                            ImageBlock.style.display = "block"

                            beetleanimation4.play();
                    },2000)
                } ,10)
        
            
    
    
}
// func to hide
function hideBeetle(){
    showSlideBtn("beetleb4")
    showSecBeetle(0)
    var textBtn = document.getElementsByClassName("btn-text")
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
    var ImageBlock = document.getElementById("beetle4Block")
    ImageBlock.style.display = "none"

    for(let i of textBtn)
        hideElement(i)
    showElement(img )
    showElement(div1 )
    showElement(heading )
    showElement(div5 )
    hideElement(beb1)
    hideElement(beb2)
    hideElement(beb3)
    hideElement(div2)
    hideElement(div4)
    hideElement(para1)
    hideElement(para2)
    hideElement(div3)
    hideElement(beetleImage)


        // beetleImage.style.opacity="0%"

        beetleanimation2.stop();
        beetleanimation3.stop();
        beetleanimation4.stop();
    
}
function movebeetle(){
    var div4 = document.getElementById("beetle4Ani")
    var beetleImage = document.getElementById("beetle4image")
    showElement(div4 )
    beetleImage.style.display="none"
    beetleanimation4.play()

}
function stopbeetle(){
    var div4 = document.getElementById("beetle4Ani")
    var beetleImage = document.getElementById("beetle4image")
    hideElement(div4)
    beetleImage.style.display="block"
    beetleanimation4.stop()
}
function btnText (index,className){
    var textBtn = document.getElementsByClassName(className)
    for(i=0 ; i<textBtn.length ; i++){
        if(i == index){
            showElement(textBtn[i] )
        }else{
            hideElement(textBtn[i])

        }
    }
}
// func to hide
function movebeetleB1(){
    beb1.src="media/image/Buttons/Beetle/Beetle_Black_01.svg" 
    beb2.src="media/image/Buttons/Beetle/Beetle_Pink_02.svg"
    beb3.src="media/image/Buttons/Beetle/Beetle_Pink_03.svg"
    showSecBeetle(0)
    btnText(0,"btn-text")

}
function movebeetleB2(){
    beb2.src="media/image/Buttons/Beetle/Beetle_Black_02.svg" 
    beb1.src="media/image/Buttons/Beetle/Beetle_Pink_01.svg"
    beb3.src="media/image/Buttons/Beetle/Beetle_Pink_03.svg"
    showSecBeetle(1)
    btnText(1,"btn-text")

}
function movebeetleB3(){
    beb3.src="media/image/Buttons/Beetle/Beetle_Black_03.svg" 
    beb1.src="media/image/Buttons/Beetle/Beetle_Pink_01.svg"
    beb2.src="media/image/Buttons/Beetle/Beetle_Pink_02.svg"
    showSecBeetle(2)
    btnText(2,"btn-text")

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