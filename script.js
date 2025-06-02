function initiate() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
initiate();

var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");

document.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + 20 + "px";
  cursor.style.top = dets.y + 20 + "px";
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 30%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "sync"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "sync"
);
tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "sync"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers:true,
    start: "top -115%",
    end: "top -120%",
    scrub: 3,
  },
});
tl2.to(".main", {
  backgroundColor: "#fff",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers:true,
    start: "top -350%",
    end: "top -400%",
    scrub: 3,
  },
});
tl3.to(".main", {
  backgroundColor: "#0F0D0D",
});

var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    cursor.style.width = "470px";
    cursor.style.height = "370px";
    cursor.style.borderRadius = "0";
    cursor.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = `none`;
  });
});
