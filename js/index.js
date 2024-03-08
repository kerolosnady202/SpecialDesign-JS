
/*start toggle menu */
let toggle=document.querySelector(".toggle-menu")
let links=document.querySelector(".links")
let alllinks=document.querySelector(".links li")
toggle.addEventListener("click",(e)=>{
    e.stopPropagation()
    /* stop propagation of child span */
    links.classList.toggle("open")
    
})
 links.addEventListener("click" , (e)=>{
    e.stopPropagation()
 })
document.addEventListener("click",(e)=>{
    /* elzero */
  /*  if(e.target.classList !== "links" &&  e.target.classList !== "toggle-menu"  ){
     if (links.classList.contains("open")) {
        links.classList.remove("open")
     } */
     /*kerolos  */
   if(e.target.classList !== "links"){
     if (links.classList.contains("open")) {
        links.classList.remove("open")
        console.log("toggle")
        console.log(e.target)
     }
    }
    
   
})

/*end toggle menu */


/* start nav-bullets section */
let allbullets=document.querySelectorAll(".nav-bullets .bullets")
let alllink=document.querySelectorAll(".landing-page .header-area .links li a")
function scrollToSection(elements) {
    elements.forEach((e)=>{
        e.addEventListener("click",(e)=>{
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:"smooth"
            })
        })
    })
}
scrollToSection(allbullets)
scrollToSection(alllink)

/* end nav-bullets section */
/* start change background */


/* end change background */
/* start setting box */
let myswitchbtn=document.querySelector(".icon")
let myicon=document.querySelector(".fa-cog")
let settingbox=document.querySelector(".setting-box")
let allmycolor=document.querySelectorAll(".theme-buttons")
let mycolorfromstorage=window.localStorage.getItem("coloroption")
let changeOptionfromstorage=window.localStorage.getItem("changeOption")

myswitchbtn.addEventListener("click",()=>{
   settingbox.classList.toggle("open")
   myicon.classList.toggle("rotate")
})
if(mycolorfromstorage !==null){
    document.querySelector(":root").style.setProperty("--main-color",mycolorfromstorage)
    allmycolor.forEach((ele)=>{
        /* console.log(ele.dataset.color) */
        ele.classList.remove("active")
        if(ele.dataset.color === mycolorfromstorage){
            ele.classList.add("active")
        }
    })
    
}   
allmycolor.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        let mycolor=e.target.dataset.color
        document.querySelector(":root").style.setProperty("--main-color", mycolor)
        window.localStorage.setItem("coloroption",mycolor)
        e.target.parentElement.querySelectorAll(".active").forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})

 /* start select change background */
 let  myinterval;
 let colorOption =true;
 let mylandpage=document.querySelector(".landing-page")
let urrbg=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]
 
function changebackground() {
     if (colorOption === true) {
        myinterval=window.setInterval(()=>{
            let randamnumbg = Math.floor(Math.random() * urrbg.length)
            let imageUrl='url("../imgs/'+ urrbg[randamnumbg] +'")'
            mylandpage.style.backgroundImage=imageUrl
        },1000)
     }
 }

 
 let bgChangeEle=document.querySelectorAll(".random-background span")
 if(changeOptionfromstorage !==null){
    if (changeOptionfromstorage === "yes") {
        colorOption=true
    }else{
        colorOption=false
    }
    bgChangeEle.forEach((e)=>{
        e.classList.remove("active")
        if (e.dataset.backg === changeOptionfromstorage) {
            e.classList.add("active")
        }
        
    })
}  
changebackground()    
bgChangeEle.forEach((span)=>{
    span.addEventListener("click",(e)=>{
        e.target.parentElement.querySelectorAll(".active").forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.target.classList.add("active")
        if (e.target.dataset.backg === "yes") {
            colorOption=true
            changebackground()
            window.localStorage.setItem("changeOption","yes")
        }else{
            colorOption=false
            clearInterval(myinterval)
            window.localStorage.setItem("changeOption","no")
        }
       /* if (e.target.innerHTML === "No") {
           clearInterval(myinterval)
       }else{

        changebackground()
       } */

   })
 })

/*  end select change background*/
/* start show or hide bullets */

 let bullets=document.querySelector(".nav-bullets")
 let allbulletspan=document.querySelectorAll(".bullets-option span")
 let bulletsoptionfromls=window.localStorage.getItem("bulletsoption")
 if (bulletsoptionfromls !== null) {
    if (bulletsoptionfromls === "show") {
        bullets.style.display="block"
    }else{
        bullets.style.display="none"
    }
    allbulletspan.forEach((e)=>{
        e.classList.remove("active")
        if (e.dataset.display === bulletsoptionfromls) {
            e.classList.add("active")
        }
    })
 }
 allbulletspan.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        if(e.target.dataset.display === "show"){
            bullets.style.display="block"
            window.localStorage.setItem("bulletsoption","show")
        }else{
            bullets.style.display="none"
            window.localStorage.setItem("bulletsoption","hide")
        }
        e.target.parentElement.querySelectorAll(".active").forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.target.classList.add("active")
    })
 })
/* end  show or hide bullets */
/* start reset section  */
let resetbutton=document.querySelector(".setting-box .reset-option")
resetbutton.addEventListener("click",()=>{
    window.localStorage.clear()
    window.location.reload()
    
})

/* end reset section  */
/* end setting box */
/* start skills section */
let ourskills=document.querySelector(".skills")

window.onscroll=function () {
    let eleOffsetTop=ourskills.offsetTop
    let eleOffsetHeight=ourskills.offsetHeight
    let windowHeight=this.innerHeight
    let windowscrollTop=this.pageYOffset
    if (windowscrollTop > (eleOffsetTop + eleOffsetHeight - windowHeight)) {
        /* console.log(eleOffsetTop)
        console.log(eleOffsetHeight)
        console.log(windowHeight)
        console.log(windowscrollTop) */
        let myspan=document.querySelectorAll(".skills .progress-box .progress span")
        myspan.forEach((span)=>{
            span.style.width = span.dataset.progress
        })
    }
}
/* end skills section */
/* start gallery section  */
   /*start create popup for image */
   let myAllImg=document.querySelectorAll(".gallery .image img")
   myAllImg.forEach((img)=>{
    img.addEventListener("click",(e)=>{
        let overlay=document.createElement("div")
        overlay.classList.add("popup-overlay")
        document.body.appendChild(overlay)

    
        let popupbox=document.createElement("div")
        popupbox.classList.add("popupbox")

        let popupimage=document.createElement("img")
        popupimage.classList.add("popupimage")
       /*  console.log(e.target.src) */
       popupimage.src=e.target.src
       /* create title for image */
        let mytitle=document.createElement("h3")
        let imgtitle=document.createTextNode(e.target.alt)
        mytitle.appendChild(imgtitle)
        popupbox.appendChild(mytitle)
     
       popupbox.appendChild(popupimage)
       document.body.appendChild(popupbox)
       /* create delete button */
       let delbutton=document.createElement("div")
       delbutton.classList.add("delbutton")
       let mytext=document.createTextNode("x")
       delbutton.appendChild(mytext)
       popupbox.appendChild(delbutton)
    
    })
    
   })
   /*end create popup for image */

   /* remove popup box */
   document.addEventListener("click",(e)=>{
     if (e.target.className == "delbutton") {
        e.target.parentElement.remove()
        document.querySelector(".popup-overlay").remove()
     }
   })

/* end gallery section  */
