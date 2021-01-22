//const btnHamburger = document.querySelector('#btnHamburger');



//btnHamburger.addEventListener('click', function(){
    //console.log('click hamburger');

    //if(header.classList.contains('open')){ // Close Hamburger Menu
       // btnHamburger.classList.remove('open');

    //}
   // else{
       // header.classList.add('open');   
   // }
    
//});




document.querySelector('.header').addEventListener('click', function(event) {
    event.preventDefault();
    var target = document.querySelector('.header');
    var myVar = document.querySelector('.overlay');
    var x = document.querySelector('.menu__whiteblock');

    if (target.classList.contains('open') ) {
      target.classList.remove('open');
     if(myVar.classList.contains('fade-in')){
        myVar.classList.remove('fade-in');
        myVar.classList.add('fade-out');
        if(x.classList.contains('fade-in')){
            x.classList.remove('fade-in');
            x.classList.add('fade-out');

        }

    }
}else {
      target.classList.add('open');
      myVar.classList.add('fade-in');
      myVar.classList.remove('fade-out');
      x.classList.add('fade-in');
      x.classList.remove('fade-out');
    }
  });

  



  
