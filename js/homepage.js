$(document).ready(function() {
    
    
    // Navbar Active Selection
    $('.nav-item').click(function()
    {
      $('navbar a.nav-item').find(".active").removeClass(" active");
      $(this).parent().addClass(" active");
      setNavigation();
      console.log("Figure out how to change active class")
    });

});
