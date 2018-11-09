$(document).ready( function() {
    $("#panel").hide(0);
    $("#add-ingredient").click(function(){
    	$("#panel").show(500);
    });

    // Navbar Active Selection
    $('navbar a.nav-item').click(function()
    {
      $('navbar a.nav-item').find(".active").removeClass(" active");
      $(this).parent().addClass(" active");
      setNavigation();
      console.log("Figure out how to change active class");
    });

    $('li button').click(function() {
      $('#empty-message').hide();
      var li = $("<li><button></button></li>");
      $('ul#kitchen-panel-list').append(li);

      $("button",li).text($(this).text()).addClass("item-button");
      $("#userInput").val("");
    });

    $('button.item-button').click(function() {
      $(this).hide();
    });

});

  function search() {
      var input, filter, ul, li, button, i;
      input = document.getElementById("userInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("ingredient-list");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          button = li[i].getElementsByTagName("button")[0];
          if (button.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }
