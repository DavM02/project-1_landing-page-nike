gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {

ScrollSmoother.create({
    wrapper: '.scroll-wrapper',
    content: '.scroll-content',
    smooth: 2,
    effects: true,
})

gsap.fromTo('#favorites', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '#favorites',
        start: '-200',
        scrub: true,
    }
})

// gsap.fromTo('#explore-more', { opacity: 1 }, {
//     opacity: 0,
//     scrollTrigger: {
//         trigger: '#explore-more',
//         start: '-200',
//         scrub: true,
//     }
// })


gsap.fromTo('#hero', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '#hero',
        start: '200',
        scrub: true,
    }
})


 let itemsR = gsap.utils.toArray('.anim-right')

 itemsR.forEach(item => {
     gsap.fromTo(item, { opacity: 0, x: 90 }, {
        x:0, opacity: 1,
        scrollTrigger: {
            trigger: item,
            scrub: true,
        }
     })
 })

 let itemsL = gsap.utils.toArray('.anim-left')

 itemsL.forEach(item => {
     gsap.fromTo(item, { opacity: 0, x: -90 }, {
        x:0, opacity: 1,
        scrollTrigger: {
            trigger: item,
            scrub: true,
        }
     })
 })

}

