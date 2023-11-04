Shery.imageEffect("#back", {
  style: 4,
  config: {
    uColor: { value: true },
    uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.5, range: [0, 5] },
    uFrequency: { value: 3.5, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 1 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.87068109265335 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4.01, range: [1, 15] },
    durationOut: { value: 1.11, range: [0.1, 5] },
    durationIn: { value: 1.03, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 2.98, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.33, range: [0, 2] },
    noise_scale: { value: 17.36, range: [0, 100] },
    a: { value: 2.23, range: [0, 30] },
    b: { value: -0.9, range: [-1, 1] },
  },
  gooey: true,
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1");
  var index = 0;
  var animating = false;
  document.querySelector("#main").addEventListener("click", function () {
    if (!animating) {
      animating = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });
      index === h1s.length - 1 ? (index = 0) : index++;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
