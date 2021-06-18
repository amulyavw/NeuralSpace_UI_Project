// Google MAP
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-hero", {
  duration: 1,
  opacity: 0,
  x: -150,
  stagger: 0.3,
});

gsap.from(".animate-hero-image", {
  duration: 1,
  opacity: 0,
  x: 150,
  stagger: 0.3,
});

gsap.from(".animate-icon", {
  scrollTrigger: '.animate-icon',
  duration: 1,
  opacity: 0,
  y: 150,
  stagger: 0.25,
});
gsap.from(".animate-location", {
  scrollTrigger: '.animate-location',
  duration: 1,
  opacity: 0,
  x: -150,
  stagger: 0.5,
});
gsap.from("#map", {
  scrollTrigger: '#map',
  duration: 1.5,
  opacity: 0,
  x: 150,
  stagger: 0.3,
});
gsap.from(".social-icon", {
  scrollTrigger: '.social-icon',
  duration: 1,
  opacity: 0,
  y: 150,
  stagger: 0.25,
});
gsap.from(".para-footer", {
  scrollTrigger: '.para-footer',
  duration: 2,
  opacity: 0,
  y: 150,
});


var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from('#heading-1', .5, {x:200, opacity: 0},);
tl.from('.underline-1', 1, {x:-200, width: 0}, "=-.5");
tl.from('#office', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "-0.7");
const scene = new ScrollMagic.Scene({
  triggerElement: "#content",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin("#content")
  .setTween(tl)
		.addTo(controller);
    
tl2.from('#heading-2', .5, {x:-200, opacity: 0},);
tl2.from('.underline-2', 1, { width: 0}, "=-.5");
tl2.from('#office1', 1, {x:200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl2.from('#building1', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "-0.7");
const scene1 = new ScrollMagic.Scene({
  triggerElement: "#content-2",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin("#content-2")
  .setTween(tl2)
		.addTo(controller);


    function updatePercentage() {
      //percent.innerHTML = (tl.progress() *100 ).toFixed();
        tl.progress();
        console.log(tl.progress());
      tl2.progress();
      console.log(tl2.progress());
    }
    anime({
      targets: '#navbar-logo path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 3000,
      delay: function(el, i) { return i * 50 },
      direction: 'alternate',
      loop: false
    });

    anime({
      targets: '#testimonial-text path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 150 },
      direction: 'alternate',
      loop: true,
    });