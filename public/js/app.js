(function($) {


  /**
   * Project namespace
   */
  var App = {};

  /**
   * Kickoff the scripts
   */
  App.init = function() {
    new WOW().init();
    App.initSmoothScrollNav();
  };

  /**
   * Sets up smooth scrolling main nav and BS's scrollspy
   */
  App.initSmoothScrollNav = function() {
    $('.navbar-nav a').smoothScroll({
      offset: -50
    });
    $('body').scrollspy({
      target: '.navbar',
      offset: 50
    })
  };



  /**
   * Runtime, let's roll
   */
  $(document).ready(function() {

    App.init();

  });


})(jQuery);
