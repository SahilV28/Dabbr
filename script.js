var tl = gsap.timeline();

tl.from("nav",{
    opacity: 0,
    y:20,
    duration: 1,
    delay:1,
})

tl.from("#logo",{
    opacity: 0,
    x:-50,
    duration: .5,
})

tl.from("#left-img",{
    opacity: 0,
    scale:0,
    rotate:720,
    duration: 1,
})

tl.from("#textarea",{
    opacity: 0,
    duration:1,
    width:0,
    height:0
})

tl.from("#social",{
    opacity: 0,
    duration:.5,
})

tl.from("#chatbox",{
    opacity: 0,
    y:20,
    duration:.5
})

gsap.from("#small-cards .elem",{
    opacity:0,
    scale:0,
    y:10,
    duration:1,
    scrollTrigger:{
        trigger:"#small-cards",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 30%",
        scrub: 2
    }
})

tl.from("#information",{
    opacity:0,
    scale:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#information",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 50%",
        scrub: 1
    }
})
