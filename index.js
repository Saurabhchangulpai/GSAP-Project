var t1=gsap.timeline();
t1.from('#nav h3',{
    y:-50,
    duration:0.5,
    opacity:0,
    delay:0.5,
    stagger:0.2
})
t1.from('#middle h1',{
    x:-500,
    duration:0.8,
    opacity:0,
    delay:0.6,
    stagger:0.3
})
t1.from('img',{
    x:500,
    rotate:45,
    duration:2,
    opacity:0,
    stagger:0.8
})
t1.from('#footer h3',{
    x:400,
    duration:1,
    opacity:0,
    stagger:0.3
})