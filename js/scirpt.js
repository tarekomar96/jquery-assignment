$('.option-span i').click(function(){
    // console.log ('hi')
   let position = $('.option-links').offset().left
//    console.log(position)
   let boxWidth = $('.option-links').outerWidth()
//    console.log(boxWidth)
   if(position === 0){

    $('.option').css({left:`-${boxWidth}`,transition:'all 1s'})
    
   }else{
    $('.option').css({left:`0px`,transition:'all 1s'})
   }
})






$('.option-links i').click(function(){
    let position = $('.option-links').offset().left
       let boxWidth = $('.option-links').outerWidth()
       if(position === 0){
    
        $('.option').css({left:`-${boxWidth}`,transition:'all 1s'})
        
       }
     
})






$('.nav-link').click(function(){
// console.log(e.target)
// console.log(this)
let selected=$(this).attr('href');
// console.log(selected)   
let sectionTop=$(selected).offset().top;
// console.log(sectionTop)  

$("body,html").animate({
    scrollTop:sectionTop
    
},500)

})






$('.Accordion-content h3').click(function () {
   $(this).next().slideToggle(500)
 })





















 window.onload = function() {
   
   countDownToTime("14 august 2023 9:56:00");
 }

 function countDownToTime(countTo) {
 
       let futureDate = new Date(countTo);
   futureDate = (futureDate.getTime()/1000);

   let now = new Date();
   now = (now.getTime()/1000);

   timeDifference = (futureDate- now);
       
  let days = Math.floor( timeDifference / (24*60*60));
  let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
  let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
  let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


   $(".days").html(`${days} D`);
   $(".hours").html(`${hours} h`);
   $(".minutes").html(`${ mins } m`);
   $('.seconds').html(`${ secs} s`)

 
   setInterval(function() {  countDownToTime(countTo); }, 1000);
 }























$('textarea').keyup(function(){
   let writtenLetters = $('textarea').val().length
   // console.log(writtenLetters)
   if(writtenLetters<100){
$('form span span').html(`${100-writtenLetters}`)
   }else if(writtenLetters>100){
      $('form span').html(`your available character finished `)
   }
})

