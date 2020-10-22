


  //----------------------------------------JQUERRY---------------------------------------------------------



    // document.ready opening tag
$(document).ready(function(){
    // document.ready opening tag

       // if(.home) opening tag
   if($('.home').length > 0){
       // if(.home) opening tag
   


                       //   MENU   



   $('input').click(function(){
        $('.content ul').slideToggle(900)
    });  




                      //  TIMER

  // "timer" setInterval

  $('.content a:eq(3)').click(function(){
      $('.time').css({
        'display':'flex'
      });
      var x = setInterval(function(){

       
          var a = $('.time').html();
          a--;
          $('.time').html(a);
          if(a == 0){
              clearInterval(x);
              $('.time').html(' ')
              $('.time').fireworks({
                sound:false,// sound effect
                opacity: 0.8,
                width:'100%',
                height:'100%'
              });
          }
          
      }, 1000);
      
  });

  
    


     //if (.home) closing tags
   };
     // if(.home) closing tag









                          // GALLERY

     //if(.gallery) opening tag
      if($('.gallery').length > 0){
     //if(.gallery) opening tag   
        $('.slider').click(function(){
            $('.slider img:eq(1)').stop().animate({
                'left':'0'
                
            },1500, function(){
                $('.slider img:eq(0)').css({'left':'-100%'});
                $('.slider').append($('.slider img:eq(0)'));
                
                
            });
        });

       
           $('.slider').animate({
               'right':'0'
           },1700);
      

           $('h3').show(function(){
               $('h3').animate({
                   'line-height':'100px'
               },3000)
           })
        
     


     //if(.gallery) closing tag 
      };
     //if(.gallery) closing tag 


 


               // COLLAPSIBLE MENU

     //if(.collapsible) opening tag
     if($('.collapsible').length > 0){
     //if(.collapsible) opening tag
     $('.accordion div').mouseenter(function(){
         $('.accordion div').not(this).stop().animate({'width':'100px'},700);
         $(this).stop().animate({'width':'650px','height':'500px'},700);
        
     });

     $('.accordion').mouseleave(function(){
         $('.accordion div').stop().animate({'width':'100px','height':'230px'},700);
        
     });
     
   
     





     //if(.collapsible) opening tag
     };
     //if(.collapsible) opening tag











   //document.ready closing tag
});
   //document.ready closing tag


   





//------------------------------------------JAVASCRIPT VANILLA----------------------------------------





 //form validation
                    

 
function formValidation(){
    
    var myName = document.getElementsByTagName('input')[0].value;
    var myPassword = document.getElementsByTagName('input')[1].value;
    var myEmail = document.getElementsByTagName('input')[2].value;
    var myPhone = document.getElementsByTagName('input')[3].value;
    var myFile = document.getElementsByTagName('input')[4].value;
    var indexFile = myFile.lastIndexOf('.');
    var allFieldError = document.getElementById('validation-error');
    var submitButton = document.getElementById('submit-button');


        if(myName == '' || myPassword == '' || myEmail == '' || myPhone == '' || myFile == ''){
            allFieldError.innerHTML = 'all field required' ;
            return false;
        }else if(myName.length < 5){
            allFieldError.innerHTML = 'name must be at least 5 characters';
            return false;
        }else if(myPassword.length < 4 || myPassword.length > 10){
            allFieldError.innerHTML = 'password must be between 4 and 10';
            return false;
        }else if(myPhone.length != 10){
            allFieldError.innerHTML = 'phone number must be 10 characters';
            return false;
        }else if(myFile.substring(indexFile,myFile.length) != '.jpg'){
            allFieldError.innerHTML = 'doar fisiere : <strong> ".jpg" </strong>';
            return false;
        }else{
            return true;
           
        }
        
};





 

       