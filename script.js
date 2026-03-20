var h1 = document.querySelector(".center-part1 button");

h1.addEventListener("mouseover", function () {
    gsap.to(h1, {
        scale: 1.10,
        // backgroundColor: "white",
        // color: "black",
        // border: "1px solid black",
    })
    // gsap.to(".section1", {
    //     backgroundColor: "black",
    //     color: "white",
    // })
    // gsap.to(".move", {
    //     backgroundColor: "red",
    // })
    // gsap.to(darkv2, {
    //     opacity: 1,
    //     duration: 0.5
    // })
    // gsap.to(darkv1, {
    //     opacity: 0,
    //     duration: 0.5
    // })
    // gsap.to(".section3", {
    //     backgroundColor: "black",
    // })
    // gsap.to(".section3 p", {
    //     color: "white",
    // })
    // gsap.to(".section4", {
    //     backgroundColor: "#0a0a0a",
    // })
    // gsap.to(".section4 p", {
    //     color: "white",
    // })
    // gsap.to(".section4 h2", {
    //     color: "white",
    // })
    // gsap.to(".section4 h3", {
    //     color: "white",
    // })
    // gsap.to(".aboutmev2", {
    //     border: "3px solid white",
    //     boxShadow: "15px 15px 0px rgb(216, 210, 210)"
    // })
    // gsap.to(".aboutmev3", {
    //     border: "3px solid white",
    //     boxShadow: "15px 15px 0px rgb(216, 210, 210)"
    // })
    // gsap.to(".center-part1 span", {
    //     color: "black"
    // })
    // gsap.to("nav a", {
    //     color: "white"
    // })
    // gsap.to(".center-part1 p", {
    //     color: "rgb(189, 182, 182)"
    // })
});
h1.addEventListener("mouseout", function () {
    gsap.to(".center-part1 button", {
        scale: 1,
        // backgroundColor: "black",
        // color: "white",
    })
    // gsap.to(".section1", {
    //     backgroundColor: "white",
    //     color: "black",
    // })
    // gsap.to(".move", {
    //     backgroundColor: "#D8FF04",
    // })
    // gsap.to(darkv1, {
    //     opacity: 1,
    //     duration: 0.5
    // })
    // gsap.to(darkv2, {
    //     opacity: 0,
    //     duration: 0.5
    // })
    // gsap.to(".section3", {
    //     backgroundColor: "white",
    // })
    // gsap.to(".section3 p", {
    //     color: "black",
    // })
    // gsap.to(".section4", {
    //     backgroundColor: "#f5f2f2",
    // })
    // gsap.to(".section4 p", {
    //     color: "black",
    // })
    // gsap.to(".section4 h2", {
    //     color: "black",
    // })
    // gsap.to(".section4 h3", {
    //     color: "black",
    // })
    // gsap.to(".aboutmev2", {
    //     border: "3px solid black",
    //     boxShadow: "15px 15px 0px rgb(22, 22, 22)"
    // })
    // gsap.to(".aboutmev3", {
    //     border: "3px solid black",
    //     boxShadow: "15px 15px 0px rgb(22, 22, 22)"
    // })
    // gsap.to("nav a", {
    //     color: "black"
    // })
    // gsap.to(".center-part1 p", {
    //     color: "rgb(65, 64, 64)"
    // })
});

document.querySelectorAll(".nav1 a").forEach(link => {

    link.addEventListener("mouseenter", () => {
        gsap.to(link, { y: -5, scale: 1.2, duration: 0.2 });
    });

    link.addEventListener("mouseout", () => {
        gsap.to(link, { y: 0, scale: 1, duration: 0.2 });
    });

});

gsap.from("nav h1", {
    y: -100,
    duration: 1.5,
    delay: 0.2,
    opacity: 0,
})

gsap.from(".nav1 a", {
    y: -100,
    duration: 1,
    delay: 0.3,
    stagger: 0.3,
    opacity: 0
})

gsap.from(".nav1 img", {
    y: -100,
    duration: 1,
    delay: 0.3,
    stagger: 0.3,
    opacity: 0
})


gsap.from(".center-part1", {
    x: -200,
    duration: 2,
    delay: 0.5,
    opacity: 0
})

gsap.from(".center-part2", {
    x: 200,
    duration: 2,
    delay: 0.5,
    opacity: 0
})

gsap.from(".move", {
    y: 100,
    duration: 2,
    delay: 0.5,
    opacity: 0
})


gsap.to(".move1", {
    x: 100,
    duration: 10,
    repeat: -1,
    ease: "none"
});

window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        gsap.to(".move1", {
            transform: "translateX(-200%)",
            duration: 1,
            repeat: -1,
            ease: "none"
        })

        gsap.to(".move1 img", {
            rotate: 180
        })
    } else {
        gsap.to(".move1", {
            transform: "translateX(0%)",
            duration: 2,
            repeat: -1,
            ease: "none"
        })
        gsap.to(".move1 img", {
            rotate: 0
        })
    }
});



// cursor
gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

window.addEventListener("mousemove", (e) => {
    gsap.to(".cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.20,
        ease: "none"
    });
});
document.querySelectorAll("a, button, img").forEach(el => {
    el.addEventListener("mouseenter", () => {
        gsap.to(".cursor", { scale: 2.5, opacity: 0.7, });
    });

    el.addEventListener("mouseleave", () => {
        gsap.to(".cursor", { scale: 1, opacity: 1, });
    });
});



var img = document.querySelector(".center-part2 img");
img.addEventListener("mouseover", function () {
    gsap.to(".center-part2 img", {
        scale: 1.1,
    })

})
img.addEventListener("mouseout", function () {
    gsap.to(".center-part2 img", {
        scale: 1
    })
})



// dark mode

var darkv1 = document.querySelector(".theme-toggle .img1");

darkv1.addEventListener("click", function () {
    gsap.to(h1, {
        scale: 1.05,
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
    })
    gsap.to(".section1", {
        backgroundColor: "black",
        color: "white",
    })
    gsap.to(".move", {
        backgroundColor: "red",
    })
    gsap.to(darkv1, {
        opacity: 0,
        duration: 0.5
    })
    gsap.to(".theme-toggle .img2", {
        opacity: 1,
        duration: 0.5,
        zIndex: 10
    })
    gsap.to(".section3", {
        backgroundColor: "black",
    })
    gsap.to(".section3 p", {
        color: "white",
    })
    gsap.to(".section4", {
        backgroundColor: "#0a0a0a",
    })
    gsap.to(".section4 p", {
        color: "white",
    })
    gsap.to(".section4 h2", {
        color: "white",
    })
    gsap.to(".section4 h3", {
        color: "white",
    })
    gsap.to(".aboutmev2", {
        border: "3px solid white",
        boxShadow: "15px 15px 0px rgb(216, 210, 210)"
    })
    gsap.to(".aboutmev3", {
        border: "3px solid white",
        boxShadow: "15px 15px 0px rgb(216, 210, 210)"
    })
    gsap.to(".center-part1 span", {
        color: "black"
    })
    gsap.to("nav a", {
        color: "white"
    })
    gsap.to(".center-part1 p", {
        color: "rgb(189, 182, 182)"
    })
});

var darkv2 = document.querySelector(".theme-toggle .img2");

darkv2.addEventListener("click", function () {
    gsap.to(h1, {
        scale: 1.05,
        backgroundColor: "black",
        color: "white",
        border: "1px solid white",
    })
    gsap.to(".section1", {
        backgroundColor: "white",
        color: "black",
    })
    gsap.to(".move", {
        backgroundColor: "#D8FF04",
    })
    gsap.to(darkv2, {
        opacity: 0,
        duration: 0.5,
        zIndex: 0
    })
    gsap.to(".theme-toggle .img1", {
        opacity: 1,
        duration: 0.5
    })
    gsap.to(".section3", {
        backgroundColor: "white",
    })
    gsap.to(".section3 p", {
        color: "black",
    })
    gsap.to(".section4", {
        backgroundColor: "#f5f2f2",
    })
    gsap.to(".section4 p", {
        color: "black",
    })
    gsap.to(".section4 h2", {
        color: "black",
    })
    gsap.to(".section4 h3", {
        color: "black",
    })
    gsap.to(".aboutmev2", {
        border: "3px solid black",
        boxShadow: "15px 15px 0px rgb(22, 22, 22)"
    })
    gsap.to(".aboutmev3", {
        border: "3px solid black",
        boxShadow: "15px 15px 0px rgb(22, 22, 22)"
    })
    gsap.to("nav a", {
        color: "black"
    })
    gsap.to(".center-part1 p", {
        color: "rgb(65, 64, 64)"
    })
});

// scroll text
gsap.config({
    force3D: true
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#section2",
        start: "top top",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
});

tl.to("#section2 h1", {
    x: "-300%"
}, 0)

    .to("#section2 img", {
        x: "700%",
        rotate: 360,
        opacity: 0.2
    }, 0);


// My Works





gsap.from(".myworkv1 h1", {
    x: -100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".myworkv1 h1",
        scroller: "body",
        start: "top center",
        end: "bottom center",
        scrub: 1
    }
})
gsap.from(".myworkv1 p", {
    y: -100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".myworkv1 p",
        scroller: "body",
        start: "top center",
        end: "bottom center",
        scrub: 1
    }
})

var myworksv1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        start: "top center",
        end: "bottom 80%",
        scrub: 1,
    }
})
myworksv1.from(".elem1.line1.left", {
    x: -300,
    duration: 0.1,
    opacity: 0
}, "vrd")
myworksv1.from(".elem1.line1.right", {
    x: 300,
    duration: 0.1,
    opacity: 0
}, "vrd")

myworksv1.from(".elem1.line2.left", {
    x: -300,
    duration: 0.1,
    opacity: 0
}, "vrd11")
myworksv1.from(".elem1.line2.right", {
    x: 300,
    duration: 0.1,
    opacity: 0
}, "vrd11")

myworksv1.from(".elem1.line3.left", {
    x: -300,
    duration: 0.1,
    opacity: 0
}, "vrd22")
myworksv1.from(".elem1.line3.right", {
    x: 300,
    duration: 0.1,
    opacity: 0
}, "vrd22")


// about me 


gsap.from(".aboutmev1 h1", {
    x: -200,
    duration: 1.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".section4",
        scroller: "body",
        start: "top 70%",
        end: "+1000",
        scrub: 1,
        pin: true
    }
})
gsap.from(".aboutmev1 p", {
    y: -200,
    duration: 1.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".section4",
        scroller: "body",
        start: "top 70%",
        end: "+1000",
        scrub: 1,
        pin: true
    }
})

var aboutmevrd = gsap.timeline({
    scrollTrigger: {
        trigger: ".section4",
        scroller: "body",
        start: "top top",
        end: "+6000",
        scrub: 1,
        pin: true
    }
})


aboutmevrd.from(".aboutmev2", {
    x: 500,
    opacity: 0,
    duration: 1
})
aboutmevrd.to(".aboutmev2", {
    x: -500,
    opacity: 0,
    duration: 1,
})


aboutmevrd.to(".aboutmev3", {
    x: 0,
    opacity: 1,
    duration: 1,
})
aboutmevrd.from(".techv1 h1", {
    x: 500,
    opacity: 0,
    duration: 2,
    delay: 1
})




// tech

let techloopv1 = gsap.to(".tech-track", {
    xPercent: -50,
    duration: 20,
    repeat: -1,
    ease: "linear"
});

var techoverv1 = document.querySelectorAll(".techv3");

techoverv1.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        // techloopv1.pause();
        gsap.to(element, {
            scale: 1.2,
            duration: 0.5
        })
    });

    element.addEventListener("mouseout", function () {
        //  techloopv1.play();
        gsap.to(element, {
            scale: 1,
            duration: 0.5
        })
    });
});


// contact

gsap.from(".ideav1", {
    x: -500,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".section5",
        scroller: "body",
        start: "top 60%",
        end: "+=700",
        scrub: 1
    }
})

var contactvrd1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section5",
        scroller: "body",
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true
    }
})

contactvrd1.from(".workallv1", {
    x: 500,
    opacity: 0,
    duration: 2
}, "vvv")
contactvrd1.from(".homebtnv1t1 a", {
    x: -500,
    opacity: 0,
    duration: 2
}, "vvv")
contactvrd1.from(".formv1", {
    x: -500,
    opacity: 0,
    duration: 2
})

gsap.to(".starrotatev1 img", {
    rotate: 720,
    repeat: -1,
    yoyo: true,
    duration: 5,
    ease: "linear"
})

gsap.from(".footercontainer", {
    y: 150,
    scale: 0.6,
    duration: 1,
    scrollTrigger: {
        trigger: ".section6",
        scroller: "body",
        start: "top 60%",
        end: "+=700",
        scrub: 1
    }
})
gsap.to(".footerv1part1 img", {
    x: 500,
    rotate: 720,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "linear",
    scrollTrigger: {
        trigger: ".section6",
        scroller: "body",
        start: "top 60%"
    }
})


// emailjs

// ✅ Initialize EmailJS
document.addEventListener("DOMContentLoaded", function () {
    
    emailjs.init("31slPe8R-XetN4YtI"); // replace with your public key


    // ✅ Select form
    const form = document.getElementById("contact-form");
    const button = form.querySelector("button");

    // ✅ Handle submit
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // 🔄 UI feedback
        button.innerText = "Sending...";
        button.disabled = true;

        // 📩 1. Send message to YOU
        emailjs.sendForm(
            "service_a04eb4v",
            "template_0wtwzwc",
            form
        )
            .then(() => {
                // 📩 2. Send auto reply to USER
                return emailjs.sendForm(
                    "service_a04eb4v",
                    "template_45tx3ry",
                    form
                );
            })
            .then(() => {
                // ✅ Success UI
                button.innerText = "Sent ✅";
                form.reset();

                setTimeout(() => {
                    button.innerText = "Send Message";
                    button.disabled = false;
                }, 2000);
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);

                // ❌ Error UI
                button.innerText = "Failed ❌";

                setTimeout(() => {
                    button.innerText = "Send Message";
                    button.disabled = false;
                }, 2000);
            });
    });

});