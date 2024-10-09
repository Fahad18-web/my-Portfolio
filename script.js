const closeBtn = document.getElementById('close')
const mblLinks = document.getElementById('mobile-menu')
const menuBtn = document.getElementById('menu')


menuBtn.addEventListener('click',()=>{
    mblLinks.classList.toggle('hidden')
})


let tl = gsap.timeline()

tl.from('.logo h1',{
    y:20,
    opacity:0,
    duration:0.5,
    deley: 1,
})



gsap.from('.links a',{
    y:20,
    opacity:0,
    duration:0.5,
    stagger:0.3,
})

// tl.from('.left-sd',{
//    y:-200,
//    opacity:0,
//    duration:0.3
// })

// tl.from('.right-sd',{
//     x:200,
//     opacity:0,
//     duration:0.5,
//     deley:0.2
//  })


 
// tl.from('.intro',{
    //     opacity:0,
    //     duration:0.3,
    //     scale:0.5,
//     delay:0.5
// })

// tl.from('.ab-text p',{
//     opacity:0,
//     duration:0.5,
//     scale:2
// })

// graping document element

const menu = document.getElementById('menu')
const links = document.getElementById('links')


menu.addEventListener('click', ()=>{
    links.classList.toggle('.show')
})

// animations for skills section

let tl2 = gsap.timeline({
     scrollTrigger:{
        trigger:'.mySkills',
        scroller:'body',
        // markers:true,
        start:'top 50%',
        end:'top 0',
        scrub:2,
     }
})

tl2.from('.flexBox .react',{
     y:-30,
     opacity:0,
})

tl2.from('.flexBox .js',{
    y:-30,
    opacity:0,
})

tl2.from('.flexBox .html',{
    y:-30,
    opacity:0
})

tl2.from('.flexBox .css',{
    y:30,
    opacity:0,
})


tl2.from('.flexBox .bootstrap',{
    y:30,
    opacity:0,
})


tl2.from('.flexBox .tail',{
    y:30,
    opacity:0,
})

// animations for tools section 

let tl3 = gsap.timeline({
    scrollTrigger:{
       trigger:'.tools',
       scroller:'body',
       // markers:true,
       start:'top 50%',
       end:'top 0',
       scrub:2,
    //    stagger:3,
    }
})

tl3.from('.toolsBox .vsCode',{
   y:-30, 
   opacity:0
})

tl3.from('.toolsBox .github',{
    y:-30, 
    opacity:0
 })

 tl3.from('.toolsBox .replit',{
    y:-30, 
    opacity:0
 })
 


// animations for project section

// let tl4 = gsap.timeline({
//     scrollTrigger:{
//        trigger:'.projects',
//        scroller:'body',
//        // markers:true,
//        start:'top 50%',
//        end:'top 0',
//        scrub:2,
//     //    stagger:3,
//     }
// })

// tl4.from('.proBox .bitearn',{
//     x:-30,
//     opacity:0
// })

// tl4.from('.proBox .toyota',{
//     x:-30,
//     opacity:0
// })

// tl4.from('.proBox .birthday',{
//     x:-30,
//     opacity:0
// })

// animations for hero section

// let  tl4 = gsap.timeline({
//     scrollTrigger:{
//        trigger:'.intro',
//        scroller:'body',
//        // markers:true,
//        start:'top 50%',
//        end:'top 0',
//        scrub:2,
//     //    stagger:3,
//     }
// })

tl.from('.left-txt',{
    scale:2,
    opacity:0
})

tl.from('.right-sd img',{
    x:-30,
    opacity:0
})

