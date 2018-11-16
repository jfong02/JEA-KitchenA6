// Calls this while document not ready
var ready = false;
if (!ready) {
	loading();
}
function loading() {
	console.log('loading...');
	$('#loading-icon').show();
}

$(document).ready(function() {
    $('#loading-icon').hide();
	ready = true;

    var fav = JSON.parse(localStorage.getItem('favoritedrecipes'));
    if (fav) {
        var source = document.getElementById("favoritetemplate").innerHTML;
        var template = Handlebars.compile(source);
        var parent = $("#templatedfavorites");
    
        for (var i = 0; i<fav.length; i++) {
            var curdata = fav[i];
            console.log(fav[i]);
            var curhtml = template(curdata);
            parent.append(curhtml);
        }
    }
    else {
        emptymessage();
        console.log('hide empty message');
    }
    
    window.onclick = function(event) {
        if (event.target != document.getElementById('mainnav') && event.target !=document.getElementById('opensidebar') && event.target !=document.getElementById('closesidebar')) {
            closeNav();
        }
    }
});


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

function emptymessage() {
    $('#empty-message').toggle();
}

$('#clear-favorites').click(function() {
    $('#templatedfavorites').empty();
    $('#emptymessage').show();
    localStorage.removeItem("favoritedrecipes");
  });


// var favorited = [
//     {'name': 'chicken_kale_soup_recipe','index': '1'},
//     {'name': 'cranberry_kale_salad_recipe','index': '2'}
// ]
// var dummy = {'name': 'Recipe Name','index': '#'}

// LEARNING TEMPLATE
// var source = $("#recipetemplate").html();
// var template = Handlebars.compile(source);
// var parent = $("#templatedfavorites");

// var html = template(simple)
// for (var i = 0; i<favorited.length; i++) {
//     var curdata = favorited[i];
//     var curhtml = template(curdata);
//     parent.append(curhtml);
// }
