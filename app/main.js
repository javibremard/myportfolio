









//Mouse position and other things


    const body = document.body;
    const docEl = document.documentElement;

    const MathUtils = {
        lineEq: (y2, y1, x2, x1, currentVal) => {
            // y = mx + b
            var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
            return m * currentVal + b;
        },
        lerp: (a, b, n) =>  (1 - n) * a + n * b,
        distance: (x1, x2, y1, y2) => {
            var a = x1 - x2;
            var b = y1 - y2;
            return Math.hypot(a,b);
        }
    };

    let winsize;
    const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
    calcWinsize();
    window.addEventListener('resize', calcWinsize);

    const getMousePos = (ev) => {
        let posx = 0;
        let posy = 0;
        if (!ev) ev = window.event;
        if (ev.pageX || ev.pageY) {
            posx = ev.pageX;
            posy = ev.pageY;
        }
        else if (ev.clientX || ev.clientY) 	{
            posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
            posy = ev.clientY + body.scrollTop + docEl.scrollTop;
        }
        return {x: posx, y: posy};
    }



    let mousePos = {x: winsize.width/2, y: winsize.height/2};
    window.addEventListener('mousemove', ev => mousePos = getMousePos(ev));















    let mywindowwidth = winsize.width;





//logodistort

var container = document.getElementById("mmm");

//TEXTO                
var textintro = "";


var text = new Blotter.Text(textintro, {

family: "'FavoritSushi2', 'url(../fonts/FavoritSushi/FavoritSushi-Regular-COLRv1.otf)'",
fill: '#000',
size: 300,
paddingLeft: mywindowwidth / 8,
paddingRight: mywindowwidth / 8,
paddingTop: 70,
paddingBottom: 50,

})

console.log(text.properties)


var material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 1;
material.uniforms.uVolatility.value = 0;
material.uniforms.uSeed.value = 0.1;


var blotter = new Blotter(material, {
texts: text
})


var scope = blotter.forText(text);

scope.appendTo(container);




//document.onmousemove = moveIt;
//function moveIt(event) {

//material.uniforms.uVolatility.value = (event.clientY * .1);
//material.uniforms.uVolatility.value = (event.clientX * .0001);

//}




console.log(scope);








  







   //ADIVINAR TAMAÑO VENTANA

   

// BLOTTER - 2
/*
console.log(mywindowwidth / 8);
       



          var container2 = document.getElementById("namePresents");
          var text2 = new Blotter.Text("SCROLL", {
              family : "'FavoritSushi2'",
              size : 40,
              fill : "#000",
              paddingRight: mywindowwidth / 8,              
              paddingLeft: mywindowwidth / 8,
              paddingTop: 20,
              paddingBottom: 20,
          
            });
            
            var material2 = new Blotter.Material();
            
            var blotter2 = new Blotter(material, {
              texts : text2
            });
            
            var elem2 = document.getElementById("plain-text");
            var scope2 = blotter2.forText(text2);
            
            scope2.appendTo(container2);
/*/


 

       





        









        
     

      



    











let volatility = 0;
















      //RESPONSIVE  

function imageresponsive2(x) {
              if (x.matches) {
                
                console.log("mobile");
                container.classList.add('pruebaresponsive');
                
                let imagencabezaporsid = document.getElementById("imagencabezaporsid");
                imagencabezaporsid.style.display = "none";
                    
                  
                 
                let footerdesaparece = document.getElementById("footemail");
                let footerdesaparece1 = document.getElementById("footinsta");    
                
                footerdesaparece.innerHTML = "@";
                footerdesaparece1.innerHTML = "in,";



                //expandinfo
               

var workdescription = document.querySelectorAll('.workdescription');
for (let i = 0; i < workdescription.length; i++) {
    workdescription[i].classList.add('infomobile');};
var clickformore = document.querySelectorAll('.clickformore');
for (let i = 0; i < clickformore.length; i++) {
    clickformore[i].style.paddingTop = "8px";
    clickformore[i].classList.remove('infomobile');

    clickformore[i].addEventListener('click', function(){

        clickformore[i].innerHTML = "[+] info";
        
        
        var hideinfo = document.querySelectorAll('.hideinfo');
        for (let i = 0; i < hideinfo.length; i++) {
            hideinfo[i].animate([
                // fotogramas clave
                { filter: 'blur(70px)' },
                
                { filter: 'blur(0px)' }
              ], {
                // opciones de sincronización
                duration: 200,
                easing: 'ease-out',
                
              });
            hideinfo[i].classList.toggle("hiddenelement");
            
            
                }
                var imagework = document.querySelectorAll('.imagework');
                for (let i = 0; i < imagework.length; i++) {
                    
                    imagework[i].classList.toggle("hiddenelement");
                    
                    
    
                    if (imagework[i].classList.contains('hiddenelement')) {
                        clickformore[i].innerHTML = "[-] info"
                    } else {}
    
    
                }


    });


};





            } else if (x.matches == false) {

              
                imagencabezaporsid.style.display = "none";
               
var workdescription = document.querySelectorAll('.workdescription');
for (let i = 0; i < workdescription.length; i++) {
    workdescription[i].classList.remove('infomobile');};

    var clickformore = document.querySelectorAll('.clickformore');
for (let i = 0; i < clickformore.length; i++) {
    clickformore[i].classList.add('infomobile');};

                console.log("desktop");
                container.classList.remove('pruebaresponsive'); 
                let footerdesaparece = document.getElementById("footemail"); 
                let footerdesaparece1 = document.getElementById("footinsta");
                footerdesaparece.innerHTML = "jbremard7@gmail.com"; 
                footerdesaparece1.innerHTML = "insta,";  
                
                let lastMousePosition = {x: winsize.width/2, y: winsize.height/2};
                let volatility = 0;

                const render = () => {
                    const docScrolls = {left : body.scrollLeft + docEl.scrollLeft, top : body.scrollTop + docEl.scrollTop};
                    const relmousepos = {x : mousePos.x - docScrolls.left, y : mousePos.y - docScrolls.top };
                    const mouseDistance = MathUtils.distance(lastMousePosition.x, relmousepos.x, lastMousePosition.y, relmousepos.y);

                    volatility = MathUtils.lerp(volatility, Math.min(MathUtils.lineEq(0.9, 0, 100, 0, mouseDistance),0.9), 0.05);
                    material.uniforms.uVolatility.value = volatility;
                    material.uniforms.uSpeed.value = 1;
                    

                    lastMousePosition = {x: relmousepos.x, y: relmousepos.y};
                    var jj1 = Math.round((mouseDistance + 2) / 2);
                    var jj2 = Math.round((mouseDistance + 8) / 4);
                    var jj3 = Math.round((mouseDistance + 2) / 3);
                    var jj4 = Math.round(mouseDistance / 20 + 1);

                    
                    var fordropshadowX = lastMousePosition.x;
                    var fordropshadowY = lastMousePosition.y;
                    var dropshadowintervalX = fordropshadowX / 100;
                    var dropshadowintervalY = fordropshadowY / 100;


                    

//RGB EFFECT
            
            var canvaselement1 = document.getElementsByClassName("b-canvas")[0];
            var canvaselement2 = document.getElementsByClassName("b-canvas")[1];
            canvaselement1.style.filter = `drop-shadow(${jj3}px 2px ${jj4}px #ff2097eb)
            drop-shadow(-2px ${jj2}px ${jj4}px #ffff20)
            drop-shadow(${jj1}px -${jj2}px ${jj4}px #00f9ff)`;  
//RGB EFFECT    


                    



                    requestAnimationFrame(render);
                }
       
                requestAnimationFrame(render);

               } 

            
          }


var x = window.matchMedia("(max-width: 998px)");
             imageresponsive2(x) // Call listener function at run time
            // x.addListener(imageresponsive2) // Attach listener function on state changes
             x.addListener(imageresponsive2);









//CHANGE IMAGES


let imagework1 = document.getElementById("imagework1");
let imagework2 = document.getElementById("imagework2");
let imagework3 = document.getElementById("imagework3");
let imagework4 = document.getElementById("imagework4");
let imagework5 = document.getElementById("imagework5");
let imagework6 = document.getElementById("imagework6");
let imagework7 = document.getElementById("imagework7");
 




function crearIterador(blueimages){
   var siguienteIndice = 0;

   return {
      next: function(){
          return siguienteIndice < blueimages.length ?
              {value: blueimages[siguienteIndice++], done: false} :
              {done: siguienteIndice=0};
      }
     
      
   }

}

var it = crearIterador([
   "./assets/img/BLUEJpag/2.gif", 
   "./assets/img/BLUEJpag/3.jpg",
   "./assets/img/BLUEJpag/4.jpg",
   "./assets/img/BLUEJpag/5.jpg",
   "./assets/img/BLUEJpag/1.jpg",
]);

var it2 = crearIterador([
    "./assets/img/Pickerpag/2.jpg", 
    "./assets/img/Pickerpag/1.jpg"
    
    
 ]);

 var it3 = crearIterador([
    "./assets/img/Swanpag/2.jpg", 
    "./assets/img/Swanpag/3.jpg",
    "./assets/img/Swanpag/4.jpg",
    
    "./assets/img/Swanpag/1.jpg"
    
 ]);

 var it4 = crearIterador([
    "./assets/img/Expopag/2.gif", 
    "./assets/img/Expopag/3.jpg",
    "./assets/img/Expopag/4.jpg",
    "./assets/img/Expopag/1.jpg"
    
    
 ]);

 

 var it6 = crearIterador([
  "./assets/img/illustrationspag/1.jpg", 
  "./assets/img/illustrationspag/3.jpg",
  "./assets/img/illustrationspag/2.jpg"
  
  
]);



 var it7 = crearIterador([
    "./assets/img/Anastasiapag/2.jpg", 
    "./assets/img/Anastasiapag/3.jpg",
    "./assets/img/Anastasiapag/1.jpg"
    
    
 ]);


 //blueJ
   

imagework1.addEventListener('click', function(){
   let numeroiterador = it.next().value;
   
   if (numeroiterador == undefined) {
           
       console.log("0");
     //  imagework1.innerHTML= `<img src="${crearIterador([0])} " alt="" class="imagework">`;

       
       
   } else { 
       console.log(numeroiterador);
       var imgimg = document.getElementById("imagenblue");


       imgimg.animate([
        // fotogramas clave
        { filter: 'blur(70px)' },
        
        { filter: 'blur(0px)' }
      ], {
        // opciones de sincronización
        duration: 300,
        easing: 'ease-out',
        
      });



       var imagenbluesrc = imgimg.getAttribute('alt');
       console.log(imagenbluesrc);
       imgimg.setAttribute('src', `${numeroiterador}`) ;
       
       
       
       
   } 
      // 
       
   
});





//PICKER

imagework2.addEventListener('click', function(){
    let numeroiterador = it2.next().value;
    
    if (numeroiterador == undefined) {
            
        console.log("0");
      //  imagework1.innerHTML= `<img src="${crearIterador([0])} " alt="" class="imagework">`;
 
        
        
    } else { 
        console.log(numeroiterador);
        var imgimg2 = document.getElementById("imagenblue2");
 
 
        imgimg2.animate([
         // fotogramas clave
         { filter: 'blur(70px)' },
         
         { filter: 'blur(0px)' }
       ], {
         // opciones de sincronización
         duration: 300,
         easing: 'ease-out',
         
       });
 
 
 
        var imagenbluesrc2 = imgimg2.getAttribute('alt');
        console.log(imagenbluesrc2);
        imgimg2.setAttribute('src', `${numeroiterador}`) ;
        
        
        
        
    } 
       // 
        
    
 });



 //SWANLAKE

imagework3.addEventListener('click', function(){
    let numeroiterador = it3.next().value;
    
    if (numeroiterador == undefined) {
            
        console.log("0");
      //  imagework1.innerHTML= `<img src="${crearIterador([0])} " alt="" class="imagework">`;
 
        
        
    } else { 
        console.log(numeroiterador);
        var imgimg3 = document.getElementById("imagenblue3");
 
 
        imgimg3.animate([
         // fotogramas clave
         { filter: 'blur(70px)' },
         
         { filter: 'blur(0px)' }
       ], {
         // opciones de sincronización
         duration: 300,
         easing: 'ease-out',
         
       });
 
 
 
        var imagenbluesrc3 = imgimg3.getAttribute('alt');
        console.log(imagenbluesrc3);
        imgimg3.setAttribute('src', `${numeroiterador}`) ;
        
        
        
        
    } 
       // 
        
    
 });




 //EXPO

imagework4.addEventListener('click', function(){
    let numeroiterador = it4.next().value;
    
    if (numeroiterador == undefined) {
            
        console.log("0");
      //  imagework1.innerHTML= `<img src="${crearIterador([0])} " alt="" class="imagework">`;
 
        
        
    } else { 
        console.log(numeroiterador);
        var imgimg4 = document.getElementById("imagenblue4");
 
 
        imgimg4.animate([
         // fotogramas clave
         { filter: 'blur(70px)' },
         
         { filter: 'blur(0px)' }
       ], {
         // opciones de sincronización
         duration: 300,
         easing: 'ease-out',
         
       });
 
 
 
        var imagenbluesrc4 = imgimg4.getAttribute('alt');
        console.log(imagenbluesrc4);
        imgimg4.setAttribute('src', `${numeroiterador}`) ;
        
        
        
        
    } 
       // 
        
    
 });



 //ANIMACION

imagework5.addEventListener('click', function(){

  //  imagework5.innerHTML = `<iframe title="vimeo-player" src="https://player.vimeo.com/video/599455387?h=571fc58a03" class="iframebackgroundcolorexceptionblack" frameborder="0" allowfullscreen></iframe>`;
   console.log("INSERTVIDEO");

    
       // 
        
    
 });



 //OUTOFWATER

 imagework6.addEventListener('click', function(){
  let numeroiterador = it6.next().value;
  
  if (numeroiterador == undefined) {
          
      console.log("0");
    //  imagework1.innerHTML= `<img src="${crearIterador([0])} " alt="" class="imagework">`;

      
      
  } else { 
      console.log(numeroiterador);
      var imgimg6 = document.getElementById("imagenblue6");


      imgimg6.animate([
       // fotogramas clave
       { filter: 'blur(70px)' },
       
       { filter: 'blur(0px)' }
     ], {
       // opciones de sincronización
       duration: 300,
       easing: 'ease-out',
       
     });



      var imagenbluesrc6 = imgimg6.getAttribute('alt');
      console.log(imagenbluesrc6);
      imgimg6.setAttribute('src', `${numeroiterador}`) ;
      
      
      
      
  } 
     // 
      
  
});






//ANASTASIA

imagework7.addEventListener('click', function(){
  let numeroiterador = it7.next().value;
  
  if (numeroiterador == undefined) {
          
      console.log("0");
    //  imagework1.innerHTML= `<img src="${crearIterador([0])} " alt="" class="imagework">`;

      
      
  } else { 
      console.log(numeroiterador);
      var imgimg7 = document.getElementById("imagenblue7");


      imgimg7.animate([
       // fotogramas clave
       { filter: 'blur(70px)' },
       
       { filter: 'blur(0px)' }
     ], {
       // opciones de sincronización
       duration: 300,
       easing: 'ease-out',
       
     });



      var imagenbluesrc7 = imgimg7.getAttribute('alt');
      console.log(imagenbluesrc7);
      imgimg7.setAttribute('src', `${numeroiterador}`) ;
      
      
      
      
  } 
     // 
      
  
});



var mainpagelogo = document.getElementById("mainpagelogo");
console.log(mainpagelogo.classList)
var tienelaclase = mainpagelogo.classList.contains("active");




     

    
   
   






















