var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "../media/animations/Cloud-animated-illustration.json",
    innerHeight:100
})
function show(){
    var animation=document.getElementById("anim");
    var animationSetting= animation.style.display="block";
    var mp4 = document.getElementById("mp4Video");
    var soundButt = document.getElementById("soundButton");
    console.log(mp4)
    if(animationSetting == "block"){
        animation.style.display="none"
        mp4.style.display="block"
        soundButt.style.display="block"
    }

    
}