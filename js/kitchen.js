// var kitchenURL = new URLSearchParams(window.location.search);
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

    window.onclick = function(event) {
        if (event.target != document.getElementById('mainnav') && event.target !=document.getElementById('opensidebar') && event.target !=document.getElementById('closesidebar')) {
            closeNav();
            console.log('close nav');
        }
    }

    $('li button').click(function() {
        $('#empty-message').hide();
        var li = $("<li><button></button></li>");
        $('ul#kitchen-panel-list').append(li);
        $("button", li).text($(this).text()).addClass("item-button");
        $("#userInput").val("");
        $("button", li).unwrap();

        // // // // // VERSION 1 USING SLIGHTLY MESSED UP URLSEARCHPARAMS------------------

        // ADD TO URL SEARCH PARAMS THINGY
        // if (kitchenURL.getAll("ingredient") == null) {
        //     kitchenURL.set("ingredient",li.html().substring(li.html().indexOf('>')+1,li.html().lastIndexOf('<')));
        // }
        // else {
        //     kitchenURL.append('ingredient',li.html().substring(li.html().indexOf('>')+1,li.html().lastIndexOf('<')));
        // }
        // console.log(kitchenURL.getAll("ingredient"));

        // // pull data from prior local storage
        // var localitemref = JSON.parse(localStorage.getItem("kitchen"));
        // var kitchenobject = [];
        // for (i=0; i < localitemref; i++) {
        //     kitchenoject.push(localitemref[i]);     // kitchen object isn't actually kitchenobject
        // }
        // console.log(kitchenobject);

        // // commit data to local storage (this code currently pulling from URL search param thing)
        // var kURL = kitchenURL.getAll("ingredient");
        // console.log(kURL);
        // for (i=0; i<kURL.length; i++) {
        //     var push={'inv': kURL[i],'index': i};
        //     kitchenobject.push(push);
        //     console.log(push);
        // }

        // // // // // END VERSION 1-------------------------------------------------------
        
        
        // pull data from prior local storage
        var localitemref = JSON.parse(localStorage.getItem("kitchen"));
        var kitchenobject = [];
        if (localitemref != null) {
            for (i=0; i < localitemref.length; i++) {
                kitchenobject.push(localitemref[i]);
            }
        }
        console.log(kitchenobject);
        
        newingredientname = $(this).text();
        console.log($(this).text());
        var push={'inv': newingredientname,'index': kitchenobject.length};
        kitchenobject.push(push);
        console.log(push);
        
        // push data to local storage
        console.log(kitchenobject);
        localStorage.setItem('kitchen',JSON.stringify(kitchenobject));
    });

    // LOAD PREVIOUSLY LOADED KITCHEN ITEMS IN THE WHEN PAGE FIRST LOADS ONLY
    var localitems = JSON.parse(localStorage.getItem("kitchen"));
    var kitchenobjects = [];
    console.log(localitems);
    if (localitems != null) {
        for (i=0; i < localitems.length; i++) {
            kitchenobjects.push(localitems[i]);
            console.log('kitchenobjects:');
            console.log(kitchenobjects);
        }
        console.log(kitchenobjects);
        $('#empty-message').hide();
        for (i=0; i < kitchenobjects.length; i++) {
            var li = ("<button class=\"item-button\">")+kitchenobjects[i].inv+("</button>");
            $("button", li).text($(this).text()).addClass("item-button");
            $('ul#kitchen-panel-list').append(li);
            console.log(li);
        }
    }
    else {
        $('#empty-message').show();
    }


    $('ul#kitchen-panel-list').on("click",'.item-button',function() {
        console.log("click delete!");
        var localitemref = JSON.parse(localStorage.getItem("kitchen"));
        if (localitemref != null) {
            for (i=0; i < localitemref.length; i++) {
                if (localitemref[i].name != $(this).text())
                {
                    localitemref.splice(i,1);
                    break;
                }
            }
        }
        console.log(localitemref);
        console.log($(this));
        
        // remove button from kitchen
        $(this).hide();

        if (localitemref.length <1) {
            localitemref = null;
            $('#empty-message').show();
        }
            
        // push data to local storage
        localStorage.setItem('kitchen',JSON.stringify(localitemref));

    })


    $('#clear-kitchen').click(function() {
      $('#kitchen-panel-list').empty();
      $('#empty-message').show();
        localStorage.removeItem("kitchen");
    });

    $('#find-recipes-button').click(function() {
      window.location = "recipes.html"; // Go to recipes page
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
