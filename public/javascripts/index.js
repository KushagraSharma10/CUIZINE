var search1 = document.querySelector( "#search1" );
var search2 = document.querySelector("#search2");
var innerSearch = document.querySelector( "#innerSearch" );


search1.addEventListener('click',function(event){
  innerSearch.style.display="flex";
  search1.style.display = "none";
  event.preventDefault();
});

search2.addEventListener('click',function(event){
  innerSearch.style.display="none";
  search1.style.display = "flex";
  event.preventDefault();
})

// Shery.makeMagnet("#nav-part2 a");


var tl = gsap.timeline();

tl.from("#nav-part1 img", {
  y: -20,
  opacity: 0,
  delay: 0.5,
  duration: 0.5,
  stagger:0.2
});
tl.from("#nav-mid a", {
  y: -10,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#nav-part2 a", {
  y: -20,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#text-content h1,h4", {
  opacity: 0,
  stagger: 0.1,
  duration:0.2,
})
tl.from("#img-coontent img", {
  opacity: 0,
  stagger: 0.4,
})

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

function gsapAnimation() {
  gsap.to("#page3 .card, #hot", {
    transform: "translateX(-210%)",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      // markers: true,
      start: "top 0%",
      end: "top -100%",
      scrub: 2,
      pin: true,
    },
  });
}


locoscroll();

gsapAnimation();

var menu = document.querySelector("#nav-part2 .ri-menu-line")
var cross = document.querySelector("#full i")
var t2 = gsap.timeline();

t2.to("#full",{
    right:0,
    duration:0.3,
})

t2.from("#full a",{
    x:150,
    duration:0.4,
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