gsap.from("#first_heading h1",{
    duration:1,
    delay: 0.1,
    opacity:0,
    x:-50,
})
gsap.from("#first_heading h2",{
    duration:1,
    opacity:0,
    x:50,
})
gsap.from("#first_heading p",{
    duration:1,
    opacity:0,
    y:50,
})


gsap.to(".card_heading_conatiner",{
    scrollTrigger:{
        trigger:".card_heading_conatiner",
        scroller:"body",
        start:"top 75%",
        end:"top 20%",
        scrub:true,  
    },
    scale:1.2,
    y:-50,
})
