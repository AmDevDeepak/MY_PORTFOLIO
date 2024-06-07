function loader() {
  gsap.to(".loader", {
    y: "-100%",
    delay: 3,
    duration: 1,
    ease: "power4.out",
  });
}

function section1Anim() {
  gsap.from("nav", {
    y: -150,
    delay: 3.6,
    else: "power2.out",
    duration: 1.5,
  });

  gsap.from(".s1-p1", {
    x: -800,
    delay: 3.6,
    ease: "power2.out",
    duration: 1.5,
  });

  gsap.from(".s1-p2 img", {
    x: 800,
    delay: 3.6,
    ease: "power2.out",
    duration: 1.5,
  });
}

function section2Anim() {
  var clutter = "";
  document
    .querySelector(".description h3")
    .textContent.split("")
    .forEach((letter) => {
      if (letter === " ") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${letter}</span>`;
    });
  document.querySelector(".description h3").innerHTML = clutter;

  gsap.to(".description span", {
    scrollTrigger: {
      trigger: ".description",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 0.2,
      duration: 2,
    },
    color: "#becee9",
    ease: "power4",
    stagger: 0.05,
    opacity: 1,
  });
}

function section3Anim() {
  gsap.from(".skills-heading h2", {
    scrollTrigger: {
      trigger: ".skills-heading",
      start: "top 20%",
      end: "bottom 90%",
      duration: 4,
      scrub: 1.5,
    },
    x: 600,
    opacity: 0,
    ease: "power2.out",
  });

  gsap.from(".other-skills-div h3 span", {
    scrollTrigger: {
      trigger: ".other-skills-div",
      start: "top 70%",
      end: "bottom 90%",
      duration: 3,
    },
    opacity: 0,
    ease: "power2.out",
  });
}

function section4Anim() {
  gsap.from(".projects-heading h2", {
    scrollTrigger: {
      trigger: ".section4",
      start: "top 90%",
      end: "top 100%",
      scrub: 2,
    },
    x: -900,
    opacity: 0,
    ease: "power1.inOut",
    duration: 4,
  });
  gsap.from(".projects-heading h3", {
    scrollTrigger: {
      trigger: ".section4",
      start: "top 100%",
      end: "top 130%",
      scrub: 2,
    },
    y: -400,
    opacity: 0,
    ease: "power1.inOut",
    duration: 1,
  });

  var tl = gsap.timeline();
  tl.from(".projects .f-right", {
    scrollTrigger: {
      trigger: ".projects",
      start: "top 130%",
      end: "bottom bottom",
      scrub: 2,
    },
    x: 700,
    stagger: 0.05,
    opacity: 0,
    ease: "power1.inOut",
    duration: 1,
  });
  tl.from(".projects .f-left", {
    scrollTrigger: {
      trigger: ".projects",
      start: "top 150%",
      end: "bottom bottom",
      scrub: 2,
    },
    x: -700,
    stagger: 0.05,
    opacity: 0,
    ease: "power1.inOut",
    duration: 1,
  });
}

function section5Anim() {
  gsap.from(".section5 .heading h1", {
    scrollTrigger: {
      trigger: ".heading",
      start: "top 90%",
      end: "top 100%",
      scrub: 2,
    },
    x: -900,
    opacity: 0,
    ease: "power1.inOut",
    duration: 4,
  });
}

function section6Anim() {
  var clutter = "";
  var h2 = document.querySelector(".message-heading h2");
  h2.textContent.split("").forEach((letter) => {
    if (letter === "") clutter += `<span>&nbsp;</span>`;
    clutter += `<span>${letter}</span>`;
  });
  h2.innerHTML = clutter;

  gsap.from(".message-heading span", {
    scrollTrigger: {
      trigger: ".message-heading",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 1,
    },
    ease: "power4",
    stagger: 0.5,
    opacity: 0.5,
    textShadpw: "none",
    color: "#fa5a5a",
    duration: 3,
  });

  gsap.from(".message-div h3", {
    scrollTrigger: {
      trigger: ".message-div",
      start: "top 20%",
      end: "bottom 90%",
      scrub: 2,
    },
    ease: "power4",
    opacity: 0,
    x: 400,
  });

  gsap.from(".message-div form", {
    scrollTrigger: {
      trigger: ".message-div",
      start: "top 20%",
      end: "bottom 90%",
      scrub: 2,
    },
    ease: "power4",
    opacity: 0,
    x: -500,
  });
}

loader();
section1Anim();
section2Anim();
section3Anim();
section4Anim();
section5Anim();
section6Anim();

