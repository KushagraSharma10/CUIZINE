var menu = document.querySelector("#nav-part2 .ri-menu-line")
var cross = document.querySelector("#full i")
var t2 = gsap.timeline();

t2.to("#full",{
    right:0,
    duration:0.4,
})

t2.from("#full a",{
    x:150,
    duration:0.5,
    stagger:0.3,
    opacity:0
})

t2.from("#full i",{
    opacity:0
})
t2.pause()

menu.addEventListener("click",function(){
    t2.play()
})

cross.addEventListener("click",function(){
    t2.reverse()
})


var tl = gsap.timeline();

tl.from("#nav-part1 img", {
  y: -20,
  opacity: 0,
  delay: 0.5,
  duration: 0.5,
  stagger:0.3
});
// tl.from("#nav-mid", {
//   y: -60,
//   opactiy: 0,
//   stagger: 0.4,
// });

tl.from("#nav-part2 a", {
  y: -20,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
    y: 140,
    stagger: 0.3,
  });

  function locoscroll() {
    console.clear();
  
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  
  locoscroll();

  Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet("#nav-part2 a");

function sheryAnimation() {
  Shery.imageEffect("#content-part2 a", {
    style: 5,
    gooey: true,
    debug:true,
  });
}

