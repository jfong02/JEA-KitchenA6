$(document).ready( function() {
    $("#panel").hide(0);
    $("#addin").click(function(){
    	$("#panel").show(500);
    });
    $("#addout").click(function(){
    	$("#panel").hide(500);
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

    $('#clear-kitchen').click(function() {
      $('#kitchen-panel-list').empty();
      $('#empty-message').show();
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

function toggleadd() {
    $("#addin").toggle();
    $("#addout").toggle();
}

// * Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mainnav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    $("#opensidebar").hide();
    $("#closesidebar").show();
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mainnav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $("#opensidebar").show();
    $("#closesidebar").hide();
}