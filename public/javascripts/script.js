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


const clutter ="";
document.querySelector(".paratext").textContent.split("").forEach(function(e){
if(e === " ") clutter += `<span>&nbsp;</span>`
clutter += `<span>${e}</span>`
})
document.querySelector(".paratext").innerHTML=clutter;
  gsap.set(".paratext sapn",{opacity:.1})


homepage();
page2();
animation();