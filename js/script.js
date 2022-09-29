<script type="text/javascript">
 jQuery(document).ready(function($) {
  $(window).load(function() {
   if ($('.header-nav').length > 0) {
     var _top = $('.header-nav').offset().top - parseFloat($('.header-nav').css('marginTop').replace(/auto/, 0));
      $(window).scroll(function(evt) {
       var _y = $(this).scrollTop();
       if (_y > _top) {
       $('.header-nav').addClass('fixed');
       $('.main-1').css("margin-top", "30px")
       } else {
       $('.header-nav').removeClass('fixed');
       $('.main-1').css("margin-top", "0")
     }
    })
   }
  });
 });
</script>