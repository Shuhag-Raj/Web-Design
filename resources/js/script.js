// MixitUp
var mixer = mixitup('.latest-work-grid-container');
 
  // Hamburgat menu 
  function openMenu(){
    document.getElementById('navbar').style.height = "100vh";
  } 
  function closeMenu(){
    document.getElementById('navbar').style.height = "0";
  } 
  // Smooth Scrollyfy
  $(function(){
    $('.menu-items a, .scroll-down a').on('click',function(){
      $('html,body').animate({
        scrollTop: $($.attr(this,'href')).offset().top
      }, 1000);
      return false
    });
  }); 