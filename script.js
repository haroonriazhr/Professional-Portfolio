function locomotive() {
    document.addEventListener("DOMContentLoaded", function () {
      // Initialize Locomotive Scroll
      const scroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });
  
      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
  
      // Make ScrollTrigger use Locomotive Scroll's scroller
      ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector("main").style.transform
          ? "transform"
          : "fixed",
      });
  
      // Refresh ScrollTrigger when Locomotive Scroll updates
      scroll.on("scroll", ScrollTrigger.update);
  
      // Refresh ScrollTrigger and Locomotive Scroll when the window updates
      ScrollTrigger.addEventListener("refresh", () => scroll.update());
      ScrollTrigger.refresh();
  
      // Handle anchor links
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href"); // full href value including #
          const targetElement = document.querySelector(targetId); // select target by ID
          if (targetElement) {
            setTimeout(() => {
              scroll.scrollTo(targetElement); // Add a slight delay
            }, 100); // Adjust delay if necessary
          }
        });
      });
  
      // ScrollTrigger for various sections
      ScrollTrigger.create({
        trigger: ".about",
        scroller: "main",
        start: "top center",
        fastScrollEnd: true,
        onEnter: () => about(),
      });
  
      ScrollTrigger.create({
        trigger: ".work",
        scroller: "main",
        start: "top center",
        fastScrollEnd: true,
        onEnter: () => work(),
      });
  
      ScrollTrigger.create({
        trigger: ".project",
        scroller: "main",
        start: "top 50%",
        fastScrollEnd: true,
        onEnter: () => project1(),
      });
      ScrollTrigger.create({
        trigger: ".project-2",
        scroller: "main",
        start: "top 50%",
        fastScrollEnd: true,
        fastScrollEnd: true,
        onEnter: () => project2(),
      });
      ScrollTrigger.create({
        trigger: ".project-3",
        scroller: "main",
        start: "top 50%",
        fastScrollEnd: true,
        onEnter: () => project3(),
      });
      ScrollTrigger.create({
        trigger: ".project-4",
        scroller: "main",
        start: "top 50%",
        fastScrollEnd: true,
        onEnter: () => project4(),
      });
      ScrollTrigger.create({
        trigger: "footer",
        scroller: "main",
        start: "top 50%",
        onEnter: () => footer(),
      });
      
    });
  }
  
  
  function valuesetter() {
    // Hero
    gsap.set("header nav a", { y: "-100%", opacity: 0 });
    gsap.set(".hero .Greet .parent .child", { y: "100%" });
    gsap.set(".hero .heroname .parent .child", { y: "100%" });
    gsap.set(".hero .ocup .parent .child", { y: "100%" });
    gsap.set(".hero .ocup .parent .child span", { y: "100%", opacity: 0 });
  
    // About
    gsap.set(".about .about-text h4 .parent .child", { y: "100%" });
    gsap.set(".about .about-text p .parent .child", { y: "100%", opacity: "0" });
    gsap.set(".about .about-text h3 .parent .child", { y: "100%" });
    gsap.set(".about .about-text .tech>img", { x: "-100%", opacity: 0 });
    gsap.set(".about .about-img img", { x: "100%", opacity: 0 });
  
    //Work
    gsap.set(".work .work-text h3 .parent .child", { y: "100%" });
    gsap.set(".work .work-text p .parent .child", { y: "100%", opacity: "0" });
    //project-1
    gsap.set(".work .project .project-text h4 .parent .child", { y : "100%" });
    gsap.set(".work .project .project-text p .parent .child", { y : "100%", opacity: "0" });
     //project-2
     gsap.set(".work .project-2 .project-text h4 .parent .child", { y : "100%" });
     gsap.set(".work .project-2 .project-text p .parent .child", { y : "100%", opacity: "0" });
      //project-3
    gsap.set(".work .project-3 .project-text h4 .parent .child", { y : "100%" });
    gsap.set(".work .project-3 .project-text p .parent .child", { y : "100%", opacity: "0" });
     //project-4
     gsap.set(".work .project-4 .project-text h4 .parent .child", { y : "100%" });
     gsap.set(".work .project-4 .project-text p .parent .child", { y : "100%", opacity: "0" });
     //footer
     gsap.set(".footer .f-uper p .parent .child", { y: "120%"});
     gsap.set(".footer .social h2 .parent .child", { y: "100%"});
     gsap.set(".footer .f-uper .social a>i ", {  x: "100%", opacity: 0});
  }
  
  function reveal() {
    document.querySelectorAll(".reveal").forEach(function (elem) {
      var parent = document.createElement("span");
      var child = document.createElement("span");
  
      parent.classList.add("parent");
      child.classList.add("child");
  
      child.innerHTML = elem.innerHTML;
      parent.appendChild(child);
  
      elem.innerHTML = "";
      elem.appendChild(parent);
    });
  }
  
  function loaderAnimation() {
    var tl = gsap.timeline();
    tl.from(".loader .child span", {
      x: 100,
      duration: 1.4,
      stagger: 0.2,
      opacity: 0,
      ease: "Power3.easeInOut",
      display: "none",
    });
  
    tl.to(".loader .parent .child", {
      y: "-100%",
      duration: 1,
      delay: 1,
      ease: "Circ.easeInOut",
      display: "none",
    });
    tl.to("#end", {
      duration: -1.2,
      delay: -0.5,
      display: "none",
    });
    tl.to(".loader", {
      height: 0,
      duration: 1,
      ease: "Circ.easeInOut",
      display: "none",
    });
    tl.to(".purple", {
      height: "100%",
      duration: 1,
      top: 0,
      delay: -1,
      ease: "Circ.easeInOut",
      display: "none",
    });
    tl.to(".purple", {
      height: "0%",
      duration: 1,
      delay: -0.4,
      ease: "Circ.easeInOut",
      display: "none",
      oncompelete: function () {
        homepage();
      },
    });
  }
  
  function homepage() {
    var tl = gsap.timeline();
  
    tl.to("header nav a", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      stagger: 0.05,
      ease: "Expo.easeInOut",
    })
      .to(".hero .heroname .parent .child", {
        y: 0,
        delay: -1.5,
        duration: 1.2,
        stagger: 0.5,
        ease: "Expo.easeInOut",
      })
      .to(".hero .Greet .parent .child", {
        y: 0,
        delay: -1.5,
        duration: 1.3,
        stagger: 0.5,
        ease: "Expo.easeInOut",
      })
      .to(".hero .ocup .parent .child", {
        y: 0,
        delay: -1.5,
        duration: 1.4,
        stagger: 0.5,
        ease: "Expo.easeInOut",
      })
      .to(".hero .ocup .parent .child span", {
        y: 0,
        delay: -1.5,
        opacity: 1,
        duration: 1.5,
        stagger: 0.5,
        ease: "Circ.easeInOut",
      });
  }
  
  function about() {
    var tl = gsap.timeline();
  
    tl.to(".about .about-text h4 .parent .child", {
      y: 0,
      duration: 1.5,
      ease: "Expo.easeInOut",
    });
    tl.to(".about .about-text p .parent .child", {
      y: 0,
      opacity: 1,
      delay: -2,
      duration: 2,
      ease: "Expo.easeInOut",
    });
    tl.to(".about .about-text h3 .parent .child", {
      y: 0,
      delay: -2,
      duration: 2,
      ease: "Expo.easeInOut",
    });
    tl.to(".about .about-img img", {
      x: 0,
      delay: -2,
      duration: 2,
      opacity: 1,
      stagger: 0.2,
      ease: "Expo.easeInOut",
    });
    tl.to(".about .about-text .tech>img", {
      x: 0,
      delay: -2,
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: "Expo.easeInOut",
    });
  }
  
  function work() {
    var tl = gsap.timeline();
    tl.to(".work .work-text h3 .parent .child", {
      y: 0,
      duration: 0.8,
      ease: "Expo.easeInOut",
    });
    tl.to(".work .work-text p .parent .child", {
      y: 0,
      opacity: 1,
      delay: -0.8,
      duration: 1.2,
      ease: "Expo.easeInOut",
    });
  }
  function project1(){
    var tl = gsap.timeline();
    tl.to(".work .project .project-text h4 .parent .child", {
      y: 0,
      duration: .8,
      ease: "Expo.easeInOut",
    });
    tl.to(".work .project .project-text p .parent .child", {
      y: 0,
      opacity: 1,
      delay: -.8,
      duration: 1.2,
      ease: "Expo.easeInOut",
    });
  }
  function project2(){
    var tl = gsap.timeline();
    tl.to(".work .project-2 .project-text h4 .parent .child", {
      y: 0,
      duration: .8,
      ease: "Expo.easeInOut",
    });
    tl.to(".work .project-2 .project-text p .parent .child", {
      y: 0,
      opacity: 1,
      delay: -.8,
      duration: 1.2,
      ease: "Expo.easeInOut",
    });
  }
  function project3(){
    var tl = gsap.timeline();
    tl.to(".work .project-3 .project-text h4 .parent .child", {
      y: 0,
      duration: .8,
      ease: "Expo.easeInOut",
    });
    tl.to(".work .project-3 .project-text p .parent .child", {
      y: 0,
      opacity: 1,
      delay: -.8,
      duration: 1.2,
      ease: "Expo.easeInOut",
    });
  }
  function project4(){
    var tl = gsap.timeline();
    tl.to(".work .project-4 .project-text h4 .parent .child", {
      y: 0,
      duration: .8,
      ease: "Expo.easeInOut",
    });
    tl.to(".work .project-4 .project-text p .parent .child", {
      y: 0,
      opacity: 1,
      delay: -.8,
      duration: 1.2,
      ease: "Expo.easeInOut",
    });
  }
  
  function footer(){
    var tl = gsap.timeline();
    tl.to(".footer .f-uper .contact p .parent .child", {
      y: 0,
      duration: 1.5,
      ease: "Expo.easeInOut",
    });
    tl.to(".footer .social h2 .parent .child", {
      y: 0,
      duration: 1,
      delay: -1.5,
      ease: "Expo.easeInOut",
    }); tl.to(".footer .f-uper .social a > i ", {
      x: 0,
      delay: -1.5,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
      ease: "Expo.easeInOut",
    });
  }
  
  function showall(){
    function show(){
      !(function (e, t) {
          'object' == typeof exports && 'undefined' != typeof module
              ? (module.exports = t(require('three'), require('gsap/TweenMax')))
              : 'function' == typeof define && define.amd
                  ? define(['three', 'gsap/TweenMax'], t)
                  : (e.hoverEffect = t(e.THREE, e.TweenMax));
      })(this, function (e, t) {
          return (
              (t = t && t.hasOwnProperty('default') ? t.default : t),
              function (n) {
                  function i() {
                      for (var e = arguments, t = 0; t < arguments.length; t++) if (void 0 !== e[t]) return e[t];
                  }
                 
                  var r = n.parent,
                      o = n.displacementImage,
                      a = n.image1,
                      s = n.image2,
                      f = i(n.imagesRatio, 1),
                      d = i(n.intensity1, n.intensity, 1),
                      l = i(n.intensity2, n.intensity, 1),
                      u = i(n.angle, Math.PI / 4),
                      v = i(n.angle1, u),
                      m = i(n.angle2, 3 * -u),
                      c = i(n.speedIn, n.speed, 1.6),
                      p = i(n.speedOut, n.speed, 1.2),
                      g = i(n.hover, !0),
                      h = i(n.easing, Expo.easeOut),
                      y = i(n.video, !1);
                  if (r)
                      if (a && s && o) {
                          var x = new e.Scene(),
                              F = new e.OrthographicCamera(
                                  r.offsetWidth / -2,
                                  r.offsetWidth / 2,
                                  r.offsetHeight / 2,
                                  r.offsetHeight / -2,
                                  1,
                                  1e3
                              );
                          F.position.z = 1;
                          var w = new e.WebGLRenderer({ antialias: !1, alpha: !0 });
                          w.setPixelRatio(2),
                              w.setClearColor(16777215, 0),
                              w.setSize(r.offsetWidth, r.offsetHeight),
                              r.appendChild(w.domElement);
                          var L = function () {
                              w.render(x, F);
                          },
                              H = new e.TextureLoader();
                          H.crossOrigin = '';
                          var E,
                              W,
                              V = H.load(o, L);
                          if (((V.magFilter = V.minFilter = e.LinearFilter), y)) {
                              var M = function () {
                                  requestAnimationFrame(M), w.render(x, F);
                              };
                              M(), ((y = document.createElement('video')).autoplay = !0), (y.loop = !0), (y.src = a), y.load();
                              var P = document.createElement('video');
                              (P.autoplay = !0), (P.loop = !0), (P.src = s), P.load();
                              var R = new e.VideoTexture(y),
                                  T = new e.VideoTexture(P);
                              (R.magFilter = T.magFilter = e.LinearFilter),
                                  (R.minFilter = T.minFilter = e.LinearFilter),
                                  P.addEventListener(
                                      'loadeddata',
                                      function () {
                                          P.play(),
                                              ((T = new e.VideoTexture(P)).magFilter = e.LinearFilter),
                                              (T.minFilter = e.LinearFilter),
                                              (C.uniforms.texture2.value = T);
                                      },
                                      !1
                                  ),
                                  y.addEventListener(
                                      'loadeddata',
                                      function () {
                                          y.play(),
                                              ((R = new e.VideoTexture(y)).magFilter = e.LinearFilter),
                                              (R.minFilter = e.LinearFilter),
                                              (C.uniforms.texture1.value = R);
                                      },
                                      !1
                                  );
                          } else
                              (R = H.load(a, L)),
                                  (T = H.load(s, L)),
                                  (R.magFilter = T.magFilter = e.LinearFilter),
                                  (R.minFilter = T.minFilter = e.LinearFilter);
                          var U = f;
                          r.offsetHeight / r.offsetWidth < U
                              ? ((E = 1), (W = r.offsetHeight / r.offsetWidth / U))
                              : ((E = (r.offsetWidth / r.offsetHeight) * U), (W = 1));
                          var C = new e.ShaderMaterial({
                              uniforms: {
                                  intensity1: { type: 'f', value: d },
                                  intensity2: { type: 'f', value: l },
                                  dispFactor: { type: 'f', value: 0 },
                                  angle1: { type: 'f', value: v },
                                  angle2: { type: 'f', value: m },
                                  texture1: { type: 't', value: R },
                                  texture2: { type: 't', value: T },
                                  disp: { type: 't', value: V },
                                  res: { type: 'vec4', value: new e.Vector4(r.offsetWidth, r.offsetHeight, E, W) },
                                  dpr: { type: 'f', value: window.devicePixelRatio },
                              },
                              vertexShader:
                                  '\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n',
                              fragmentShader:
                                  '\nvarying vec2 vUv;\n\nuniform float dispFactor;\nuniform float dpr;\nuniform sampler2D disp;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\nuniform vec4 res;\nuniform vec2 parent;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n\n  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;\n  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);\n\n\n  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  vec4 _texture1 = texture2D(texture1, distortedPosition1);\n  vec4 _texture2 = texture2D(texture2, distortedPosition2);\n  gl_FragColor = mix(_texture1, _texture2, dispFactor);\n}\n',
                              transparent: !0,
                              opacity: 1,
                          }),
                              b = new e.PlaneBufferGeometry(r.offsetWidth, r.offsetHeight, 1),
                              D = new e.Mesh(b, C);
                          x.add(D),
                              g &&
                              (r.addEventListener('mouseenter', _),
                                  r.addEventListener('touchstart', _),
                                  r.addEventListener('mouseleave', z),
                                  r.addEventListener('touchend', z)),
                              window.addEventListener('resize', function (t) {
                                  r.offsetHeight / r.offsetWidth < U
                                      ? ((E = 1), (W = r.offsetHeight / r.offsetWidth / U))
                                      : ((E = (r.offsetWidth / r.offsetHeight) * U), (W = 1)),
                                      (D.material.uniforms.res.value = new e.Vector4(r.offsetWidth, r.offsetHeight, E, W)),
                                      w.setSize(r.offsetWidth, r.offsetHeight),
                                      L();
                              }),
                              (this.next = _),
                              (this.previous = z);
                      } else console.warn('One or more images are missing');
                  else console.warn('Parent missing');
                  function _() {
                      t.to(C.uniforms.dispFactor, c, { value: 1, ease: h, onUpdate: L, onComplete: L });
                  }
                  function z() {
                      t.to(C.uniforms.dispFactor, p, { value: 0, ease: h, onUpdate: L, onComplete: L });
                  }
              }
          );
      });
      
      // app.js
      new hoverEffect({
          parent: document.querySelector('.distortion'),
          intensity: 0.2,
          image1: './Project Images/vibephone.jpeg',
          image2: './Project Images/Projects Mockups/vibephone-project.webp',
          displacementImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="28" height="49" viewBox="0 0 28 49"%3E%3Cg fill-rule="evenodd"%3E%3Cg id="hexagons" fill="%239C92AC" fill-opacity="0.4" fill-rule="nonzero"%3E%3Cpath d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
      });
    }
    function show2(){
      !(function (e, t) {
          'object' == typeof exports && 'undefined' != typeof module
              ? (module.exports = t(require('three'), require('gsap/TweenMax')))
              : 'function' == typeof define && define.amd
                  ? define(['three', 'gsap/TweenMax'], t)
                  : (e.hoverEffect = t(e.THREE, e.TweenMax));
      })(this, function (e, t) {
          return (
              (t = t && t.hasOwnProperty('default') ? t.default : t),
              function (n) {
                  function i() {
                      for (var e = arguments, t = 0; t < arguments.length; t++) if (void 0 !== e[t]) return e[t];
                  }
                 
                  var r = n.parent,
                      o = n.displacementImage,
                      a = n.image1,
                      s = n.image2,
                      f = i(n.imagesRatio, 1),
                      d = i(n.intensity1, n.intensity, 1),
                      l = i(n.intensity2, n.intensity, 1),
                      u = i(n.angle, Math.PI / 4),
                      v = i(n.angle1, u),
                      m = i(n.angle2, 3 * -u),
                      c = i(n.speedIn, n.speed, 1.6),
                      p = i(n.speedOut, n.speed, 1.2),
                      g = i(n.hover, !0),
                      h = i(n.easing, Expo.easeOut),
                      y = i(n.video, !1);
                  if (r)
                      if (a && s && o) {
                          var x = new e.Scene(),
                              F = new e.OrthographicCamera(
                                  r.offsetWidth / -2,
                                  r.offsetWidth / 2,
                                  r.offsetHeight / 2,
                                  r.offsetHeight / -2,
                                  1,
                                  1e3
                              );
                          F.position.z = 1;
                          var w = new e.WebGLRenderer({ antialias: !1, alpha: !0 });
                          w.setPixelRatio(2),
                              w.setClearColor(16777215, 0),
                              w.setSize(r.offsetWidth, r.offsetHeight),
                              r.appendChild(w.domElement);
                          var L = function () {
                              w.render(x, F);
                          },
                              H = new e.TextureLoader();
                          H.crossOrigin = '';
                          var E,
                              W,
                              V = H.load(o, L);
                          if (((V.magFilter = V.minFilter = e.LinearFilter), y)) {
                              var M = function () {
                                  requestAnimationFrame(M), w.render(x, F);
                              };
                              M(), ((y = document.createElement('video')).autoplay = !0), (y.loop = !0), (y.src = a), y.load();
                              var P = document.createElement('video');
                              (P.autoplay = !0), (P.loop = !0), (P.src = s), P.load();
                              var R = new e.VideoTexture(y),
                                  T = new e.VideoTexture(P);
                              (R.magFilter = T.magFilter = e.LinearFilter),
                                  (R.minFilter = T.minFilter = e.LinearFilter),
                                  P.addEventListener(
                                      'loadeddata',
                                      function () {
                                          P.play(),
                                              ((T = new e.VideoTexture(P)).magFilter = e.LinearFilter),
                                              (T.minFilter = e.LinearFilter),
                                              (C.uniforms.texture2.value = T);
                                      },
                                      !1
                                  ),
                                  y.addEventListener(
                                      'loadeddata',
                                      function () {
                                          y.play(),
                                              ((R = new e.VideoTexture(y)).magFilter = e.LinearFilter),
                                              (R.minFilter = e.LinearFilter),
                                              (C.uniforms.texture1.value = R);
                                      },
                                      !1
                                  );
                          } else
                              (R = H.load(a, L)),
                                  (T = H.load(s, L)),
                                  (R.magFilter = T.magFilter = e.LinearFilter),
                                  (R.minFilter = T.minFilter = e.LinearFilter);
                          var U = f;
                          r.offsetHeight / r.offsetWidth < U
                              ? ((E = 1), (W = r.offsetHeight / r.offsetWidth / U))
                              : ((E = (r.offsetWidth / r.offsetHeight) * U), (W = 1));
                          var C = new e.ShaderMaterial({
                              uniforms: {
                                  intensity1: { type: 'f', value: d },
                                  intensity2: { type: 'f', value: l },
                                  dispFactor: { type: 'f', value: 0 },
                                  angle1: { type: 'f', value: v },
                                  angle2: { type: 'f', value: m },
                                  texture1: { type: 't', value: R },
                                  texture2: { type: 't', value: T },
                                  disp: { type: 't', value: V },
                                  res: { type: 'vec4', value: new e.Vector4(r.offsetWidth, r.offsetHeight, E, W) },
                                  dpr: { type: 'f', value: window.devicePixelRatio },
                              },
                              vertexShader:
                                  '\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n',
                              fragmentShader:
                                  '\nvarying vec2 vUv;\n\nuniform float dispFactor;\nuniform float dpr;\nuniform sampler2D disp;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\nuniform vec4 res;\nuniform vec2 parent;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n\n  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;\n  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);\n\n\n  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  vec4 _texture1 = texture2D(texture1, distortedPosition1);\n  vec4 _texture2 = texture2D(texture2, distortedPosition2);\n  gl_FragColor = mix(_texture1, _texture2, dispFactor);\n}\n',
                              transparent: !0,
                              opacity: 1,
                          }),
                              b = new e.PlaneBufferGeometry(r.offsetWidth, r.offsetHeight, 1),
                              D = new e.Mesh(b, C);
                          x.add(D),
                              g &&
                              (r.addEventListener('mouseenter', _),
                                  r.addEventListener('touchstart', _),
                                  r.addEventListener('mouseleave', z),
                                  r.addEventListener('touchend', z)),
                              window.addEventListener('resize', function (t) {
                                  r.offsetHeight / r.offsetWidth < U
                                      ? ((E = 1), (W = r.offsetHeight / r.offsetWidth / U))
                                      : ((E = (r.offsetWidth / r.offsetHeight) * U), (W = 1)),
                                      (D.material.uniforms.res.value = new e.Vector4(r.offsetWidth, r.offsetHeight, E, W)),
                                      w.setSize(r.offsetWidth, r.offsetHeight),
                                      L();
                              }),
                              (this.next = _),
                              (this.previous = z);
                      } else console.warn('One or more images are missing');
                  else console.warn('Parent missing');
                  function _() {
                      t.to(C.uniforms.dispFactor, c, { value: 1, ease: h, onUpdate: L, onComplete: L });
                  }
                  function z() {
                      t.to(C.uniforms.dispFactor, p, { value: 0, ease: h, onUpdate: L, onComplete: L });
                  }
              }
          );
      });
      
      // app.js
      new hoverEffect({
          parent: document.querySelector('.distortion2'),
          intensity: 0.2,
          image1: './Project Images/fidelity-uk.jpg',
          image2: './Project Images/Projects Mockups/uk-fiedelty-project.webp',
          displacementImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="28" height="49" viewBox="0 0 28 49"%3E%3Cg fill-rule="evenodd"%3E%3Cg id="hexagons" fill="%239C92AC" fill-opacity="0.4" fill-rule="nonzero"%3E%3Cpath d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
      });
    }
    
    function show3(){
      !(function (e, t) {
          'object' == typeof exports && 'undefined' != typeof module
              ? (module.exports = t(require('three'), require('gsap/TweenMax')))
              : 'function' == typeof define && define.amd
                  ? define(['three', 'gsap/TweenMax'], t)
                  : (e.hoverEffect = t(e.THREE, e.TweenMax));
      })(this, function (e, t) {
          return (
              (t = t && t.hasOwnProperty('default') ? t.default : t),
              function (n) {
                  function i() {
                      for (var e = arguments, t = 0; t < arguments.length; t++) if (void 0 !== e[t]) return e[t];
                  }
                 
                  var r = n.parent,
                      o = n.displacementImage,
                      a = n.image1,
                      s = n.image2,
                      f = i(n.imagesRatio, 1),
                      d = i(n.intensity1, n.intensity, 1),
                      l = i(n.intensity2, n.intensity, 1),
                      u = i(n.angle, Math.PI / 4),
                      v = i(n.angle1, u),
                      m = i(n.angle2, 3 * -u),
                      c = i(n.speedIn, n.speed, 1.6),
                      p = i(n.speedOut, n.speed, 1.2),
                      g = i(n.hover, !0),
                      h = i(n.easing, Expo.easeOut),
                      y = i(n.video, !1);
                  if (r)
                      if (a && s && o) {
                          var x = new e.Scene(),
                              F = new e.OrthographicCamera(
                                  r.offsetWidth / -2,
                                  r.offsetWidth / 2,
                                  r.offsetHeight / 2,
                                  r.offsetHeight / -2,
                                  1,
                                  1e3
                              );
                          F.position.z = 1;
                          var w = new e.WebGLRenderer({ antialias: !1, alpha: !0 });
                          w.setPixelRatio(2),
                              w.setClearColor(16777215, 0),
                              w.setSize(r.offsetWidth, r.offsetHeight),
                              r.appendChild(w.domElement);
                          var L = function () {
                              w.render(x, F);
                          },
                              H = new e.TextureLoader();
                          H.crossOrigin = '';
                          var E,
                              W,
                              V = H.load(o, L);
                          if (((V.magFilter = V.minFilter = e.LinearFilter), y)) {
                              var M = function () {
                                  requestAnimationFrame(M), w.render(x, F);
                              };
                              M(), ((y = document.createElement('video')).autoplay = !0), (y.loop = !0), (y.src = a), y.load();
                              var P = document.createElement('video');
                              (P.autoplay = !0), (P.loop = !0), (P.src = s), P.load();
                              var R = new e.VideoTexture(y),
                                  T = new e.VideoTexture(P);
                              (R.magFilter = T.magFilter = e.LinearFilter),
                                  (R.minFilter = T.minFilter = e.LinearFilter),
                                  P.addEventListener(
                                      'loadeddata',
                                      function () {
                                          P.play(),
                                              ((T = new e.VideoTexture(P)).magFilter = e.LinearFilter),
                                              (T.minFilter = e.LinearFilter),
                                              (C.uniforms.texture2.value = T);
                                      },
                                      !1
                                  ),
                                  y.addEventListener(
                                      'loadeddata',
                                      function () {
                                          y.play(),
                                              ((R = new e.VideoTexture(y)).magFilter = e.LinearFilter),
                                              (R.minFilter = e.LinearFilter),
                                              (C.uniforms.texture1.value = R);
                                      },
                                      !1
                                  );
                          } else
                              (R = H.load(a, L)),
                                  (T = H.load(s, L)),
                                  (R.magFilter = T.magFilter = e.LinearFilter),
                                  (R.minFilter = T.minFilter = e.LinearFilter);
                          var U = f;
                          r.offsetHeight / r.offsetWidth < U
                              ? ((E = 1), (W = r.offsetHeight / r.offsetWidth / U))
                              : ((E = (r.offsetWidth / r.offsetHeight) * U), (W = 1));
                          var C = new e.ShaderMaterial({
                              uniforms: {
                                  intensity1: { type: 'f', value: d },
                                  intensity2: { type: 'f', value: l },
                                  dispFactor: { type: 'f', value: 0 },
                                  angle1: { type: 'f', value: v },
                                  angle2: { type: 'f', value: m },
                                  texture1: { type: 't', value: R },
                                  texture2: { type: 't', value: T },
                                  disp: { type: 't', value: V },
                                  res: { type: 'vec4', value: new e.Vector4(r.offsetWidth, r.offsetHeight, E, W) },
                                  dpr: { type: 'f', value: window.devicePixelRatio },
                              },
                              vertexShader:
                                  '\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n',
                              fragmentShader:
                                  '\nvarying vec2 vUv;\n\nuniform float dispFactor;\nuniform float dpr;\nuniform sampler2D disp;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\nuniform vec4 res;\nuniform vec2 parent;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n\n  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;\n  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);\n\n\n  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  vec4 _texture1 = texture2D(texture1, distortedPosition1);\n  vec4 _texture2 = texture2D(texture2, distortedPosition2);\n  gl_FragColor = mix(_texture1, _texture2, dispFactor);\n}\n',
                              transparent: !0,
                              opacity: 1,
                          }),
                              b = new e.PlaneBufferGeometry(r.offsetWidth, r.offsetHeight, 1),
                              D = new e.Mesh(b, C);
                          x.add(D),
                              g &&
                              (r.addEventListener('mouseenter', _),
                                  r.addEventListener('touchstart', _),
                                  r.addEventListener('mouseleave', z),
                                  r.addEventListener('touchend', z)),
                              window.addEventListener('resize', function (t) {
                                  r.offsetHeight / r.offsetWidth < U
                                      ? ((E = 1), (W = r.offsetHeight / r.offsetWidth / U))
                                      : ((E = (r.offsetWidth / r.offsetHeight) * U), (W = 1)),
                                      (D.material.uniforms.res.value = new e.Vector4(r.offsetWidth, r.offsetHeight, E, W)),
                                      w.setSize(r.offsetWidth, r.offsetHeight),
                                      L();
                              }),
                              (this.next = _),
                              (this.previous = z);
                      } else console.warn('One or more images are missing');
                  else console.warn('Parent missing');
                  function _() {
                      t.to(C.uniforms.dispFactor, c, { value: 1, ease: h, onUpdate: L, onComplete: L });
                  }
                  function z() {
                      t.to(C.uniforms.dispFactor, p, { value: 0, ease: h, onUpdate: L, onComplete: L });
                  }
              }
          );
      });
      
      // app.js
      new hoverEffect({
          parent: document.querySelector('.distortion3'),
          intensity: 0.2,
          image1: './Project Images/astroship.webp',
          image2: './Project Images/Projects Mockups/astroship-project.webp',
          displacementImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="28" height="49" viewBox="0 0 28 49"%3E%3Cg fill-rule="evenodd"%3E%3Cg id="hexagons" fill="%239C92AC" fill-opacity="0.4" fill-rule="nonzero"%3E%3Cpath d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
      });
    }
    function show4(){
      !(function (e, t) {
          'object' == typeof exports && 'undefined' != typeof module
              ? (module.exports = t(require('three'), require('gsap/TweenMax')))
              : 'function' == typeof define && define.amd
                  ? define(['three', 'gsap/TweenMax'], t)
                  : (e.hoverEffect = t(e.THREE, e.TweenMax));
      })(this, function (e, t) {
          return (
              (t = t && t.hasOwnProperty('default') ? t.default : t),
              function (n) {
                  function i() {
                      for (var e = arguments, t = 0; t < arguments.length; t++) if (void 0 !== e[t]) return e[t];
                  }
                 
                  var r = n.parent,
                      o = n.displacementImage,
                      a = n.image1,
                      s = n.image2,
                      f = i(n.imagesRatio, 1),
                      d = i(n.intensity1, n.intensity, 1),
                      l = i(n.intensity2, n.intensity, 1),
                      u = i(n.angle, Math.PI / 4),
                      v = i(n.angle1, u),
                      m = i(n.angle2, 3 * -u),
                      c = i(n.speedIn, n.speed, 1.6),
                      p = i(n.speedOut, n.speed, 1.2),
                      g = i(n.hover, !0),
                      h = i(n.easing, Expo.easeOut),
                      y = i(n.video, !1);
                  if (r)
                      if (a && s && o) {
                          var x = new e.Scene(),
                              F = new e.OrthographicCamera(
                                  r.offsetWidth / -2,
                                  r.offsetWidth / 2,
                                  r.offsetHeight / 2,
                                  r.offsetHeight / -2,
                                  1,
                                  1e3
                              );
                          F.position.z = 1;
                          var w = new e.WebGLRenderer({ antialias: !1, alpha: !0 });
                          w.setPixelRatio(2),
                              w.setClearColor(16777215, 0),
                              w.setSize(r.offsetWidth, r.offsetHeight),
                              r.appendChild(w.domElement);
                          var L = function () {
                              w.render(x, F);
                          },
                              H = new e.TextureLoader();
                          H.crossOrigin = '';
                          var E,
                              W,
                              V = H.load(o, L);
                          if (((V.magFilter = V.minFilter = e.LinearFilter), y)) {
                              var M = function () {
                                  requestAnimationFrame(M), w.render(x, F);
                              };
                              M(), ((y = document.createElement('video')).autoplay = !0), (y.loop = !0), (y.src = a), y.load();
                              var P = document.createElement('video');
                              (P.autoplay = !0), (P.loop = !0), (P.src = s), P.load();
                              var R = new e.VideoTexture(y),
                                  T = new e.VideoTexture(P);
                              (R.magFilter = T.magFilter = e.LinearFilter),
                                  (R.minFilter = T.minFilter = e.LinearFilter),
                                  P.addEventListener(
                                      'loadeddata',
                                      function () {
                                          P.play(),
                                              ((T = new e.VideoTexture(P)).magFilter = e.LinearFilter),
                                              (T.minFilter = e.LinearFilter),
                                              (C.uniforms.texture2.value = T);
                                      },
                                      !1
                                  ),
                                  y.addEventListener(
                                      'loadeddata',
                                      function () {
                                          y.play(),
                                              ((R = new e.VideoTexture(y)).magFilter = e.LinearFilter),
                                              (R.minFilter = e.LinearFilter),
                                              (C.uniforms.texture1.value = R);
                                      },
                                      !1
                                  );
                          } else
                              (R = H.load(a, L)),
                                  (T = H.load(s, L)),
                                  (R.magFilter = T.magFilter = e.LinearFilter),
                                  (R.minFilter = T.minFilter = e.LinearFilter);
                          var U = f;
                          r.offsetHeight / r.offsetWidth < U
                              ? ((E = 1), (W = r.offsetHeight / r.offsetWidth / U))
                              : ((E = (r.offsetWidth / r.offsetHeight) * U), (W = 1));
                          var C = new e.ShaderMaterial({
                              uniforms: {
                                  intensity1: { type: 'f', value: d },
                                  intensity2: { type: 'f', value: l },
                                  dispFactor: { type: 'f', value: 0 },
                                  angle1: { type: 'f', value: v },
                                  angle2: { type: 'f', value: m },
                                  texture1: { type: 't', value: R },
                                  texture2: { type: 't', value: T },
                                  disp: { type: 't', value: V },
                                  res: { type: 'vec4', value: new e.Vector4(r.offsetWidth, r.offsetHeight, E, W) },
                                  dpr: { type: 'f', value: window.devicePixelRatio },
                              },
                              vertexShader:
                                  '\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n',
                              fragmentShader:
                                  '\nvarying vec2 vUv;\n\nuniform float dispFactor;\nuniform float dpr;\nuniform sampler2D disp;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\nuniform vec4 res;\nuniform vec2 parent;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n\n  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;\n  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);\n\n\n  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  vec4 _texture1 = texture2D(texture1, distortedPosition1);\n  vec4 _texture2 = texture2D(texture2, distortedPosition2);\n  gl_FragColor = mix(_texture1, _texture2, dispFactor);\n}\n',
                              transparent: !0,
                              opacity: 1,
                          }),
                              b = new e.PlaneBufferGeometry(r.offsetWidth, r.offsetHeight, 1),
                              D = new e.Mesh(b, C);
                          x.add(D),
                              g &&
                              (r.addEventListener('mouseenter', _),
                                  r.addEventListener('touchstart', _),
                                  r.addEventListener('mouseleave', z),
                                  r.addEventListener('touchend', z)),
                              window.addEventListener('resize', function (t) {
                                  r.offsetHeight / r.offsetWidth < U
                                      ? ((E = 1), (W = r.offsetHeight / r.offsetWidth / U))
                                      : ((E = (r.offsetWidth / r.offsetHeight) * U), (W = 1)),
                                      (D.material.uniforms.res.value = new e.Vector4(r.offsetWidth, r.offsetHeight, E, W)),
                                      w.setSize(r.offsetWidth, r.offsetHeight),
                                      L();
                              }),
                              (this.next = _),
                              (this.previous = z);
                      } else console.warn('One or more images are missing');
                  else console.warn('Parent missing');
                  function _() {
                      t.to(C.uniforms.dispFactor, c, { value: 1, ease: h, onUpdate: L, onComplete: L });
                  }
                  function z() {
                      t.to(C.uniforms.dispFactor, p, { value: 0, ease: h, onUpdate: L, onComplete: L });
                  }
              }
          );
      });
      
      // app.js
      new hoverEffect({
          parent: document.querySelector('.distortion4'),
          intensity: 0.2,
          image1: './Project Images/ecommerce-store.jpg',
          image2: './Project Images/Projects Mockups/ecommerce-store-project.webp',
          displacementImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="28" height="49" viewBox="0 0 28 49"%3E%3Cg fill-rule="evenodd"%3E%3Cg id="hexagons" fill="%239C92AC" fill-opacity="0.4" fill-rule="nonzero"%3E%3Cpath d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
      });
    }
  show3();
  show4();
  show2();
  show();
  }
  
  showall();
  locomotive();
  reveal();
  valuesetter();
  loaderAnimation();
  console.log("Designed and Developed by Haroon Khokhar. This website is copyrighted, any act of stealing or altering would result in legal action.")
  