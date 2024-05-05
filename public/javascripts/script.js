
(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

function homepage(){
    
gsap.set(".allslides",{scale:3})
const tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page-1",
        // scroller:"main",
        // markers:true,
        start:"top",
        end:"bottom " ,
        scrub:true,
        pin:true,
    },
});

tl.to(".allslides",{
   
   scale:1,

},'a').from(".video",{
    "--clip":"100%",
    ease:Power2,
    duration:1,
},'a').to(".slidelft",{
    x:"-6%",

},'b').to(".slidergt",{
    x:"6%",

},'b')

}

function page2(){
    gsap.to(".sliders",{
        scrollTrigger:{
            trigger:".slider",
            // markers:true,
            start:"top -70%",
            end:"bottom -150%",
            scrub:true,
        },
       x:"-200%",
        ease:Power2,
    })
}

function animation(){

    document.querySelectorAll(".item").forEach(function(ele){
        ele.addEventListener("mousemove", function(dtls){
            gsap.to( this.querySelector(".img"),{
                opacity:1,
                x : gsap.utils.mapRange(0, window.innerWidth, -200,200,dtls.clientX),
                ease:Power4,
                duration:0.5,
            });
            gsap.to( this.querySelector(".bluelayer"),{height:"100%"});
        })
    
        ele.addEventListener("mouseleave",function(dtls){
            gsap.to(this.querySelector(".img"),{opacity:0});
            gsap.to( this.querySelector(".bluelayer"),{height:"0%"});
    
        })
    })
}


function paratextanimation(){

    var clutter = "";
 const textdata = document.querySelector(".paratext").textContent.split("");

textdata.forEach(element => {

    if(element === " ") clutter += `<span>&nbsp;</span>`
clutter += `<span>${element}</span>`
    
});
document.querySelector(".paratext").innerHTML=clutter;
  gsap.set(".paratext span",{opacity:.1});
  gsap.set(".paraimg",{scale:0,opacity:.1});

  gsap.to(".paratext span",{
scrollTrigger:{
    trigger:".para",
    sccroller:"body",
    // markers:true,
    start:"top 75%",
    end:"bottom 60%",
    scrub:true,
 
},
    opacity:1,
    stagger:.009,

  })
  gsap.to(".paraimg",{
    scrollTrigger:{
        trigger:".para",
        sccroller:"body",
        start:"top 75%",
        end:"bottom 80%",
        scrub:true,
    },
    scale:1,
    opacity:1,
    // rotate:"360deg"

  })
};


function lastdiv(){
    
gsap.to(".right-right",{
    scrollTrigger:{
     trigger:".right-left ",
     scroller:"body",
     // markers:true,
     start:"top -50%",
     end:"bottom 0%",
     scrub:1,
 
    },
    rotate:"20deg",
    y:0,
 },'z')
 gsap.to(".right-left",{
     scrollTrigger:{
         trigger:".right-left ",
         scroller:"body",
         // markers:true,
         start:"top -70%",
         end:"bottom 10%",
         scrub:1,
 
     
        },
         rotate:"20deg",
         y:"20%",
         x:"-10%",
         // stagger:true,
         ease:Power4,
        
 
 },'z')
}

function themeanimation(){

    document.querySelectorAll(".section")
.forEach((e)=>{
    ScrollTrigger.create({
        trigger:e,
        markers:true,
        start:"top 50%",
        end:"bottom 50%",

        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color);

        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color);



        }

    })
})
}





lastdiv();
homepage();
page2();
animation();
paratextanimation();
themeanimation();