var tl =gsap.timeline()
gsap.to(".side",{
    transform:"translateX(-370%)",
    fontWeight:"100",
    scrollTrigger:{
        // markers:true,
        trigger:".side",
        scroller:"body",
        start:"bottom 100%",
        end:"top -10%",
        scrub:5,
        // pin:true
    }
})