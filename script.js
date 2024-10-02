let tl = gsap.timeline()

tl.from('.logo h1',{
    y:20,
    opacity:0,
    duration:0.5,
})


tl.from('.links a',{
    y:20,
    opacity:0,
    duration:0.5,
    stagger:0.3,
})


tl.from('.intro',{
    opacity:0,
    duration:0.3,
    scale:1
})

// tl.from('.ab-text p',{
//     opacity:0,
//     duration:0.5,
//     scale:2
// })