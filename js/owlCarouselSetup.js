$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // autoplay:true,
    startPosition: 'URLHash',
    center:true,
    // autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
