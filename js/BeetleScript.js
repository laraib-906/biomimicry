var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('beetle1Ani'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: "/biomimicry/media/animations/Beetle/Beetle_01/Beettle_01.json",
    innerHeight:100
})
var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('beetle2Ani'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "/biomimicry/media/animations/Beetle/Beettle_02/Beetle_02.json",
    innerHeight:100
})