$(document).ready(function() {


    
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

var favorited = [
    {'name':'chicken_kale_soup_recipe','index':'1'},
    {'name':'cranberry_kale_salad_recipe','index':'2'}
]
var dummy = [
    {'name':'Recipe Name','index':'#'}
]

// var source = $("#recipetemplate").html();
// var template = Handlebars.compile(source);
// var parent = $("#templatedfavorites");

// var html = template(simple)
// for (var i = 0; i<favorited.length; i++) {
//     var curdata = favorited[i];
//     var curhtml = template(curdata);
//     parent.append(curhtml);
// }
localStorage.setItem('favoritedrecipes',JSON.stringify(dummy));
localStorage.setItem('favoritedrecipes',JSON.stringify(favorited));
var favorites = localStorage.getItem('favoritedrecipes',favorited);
if (favorites) {
    var source = $("#recipetemplate").html(favorites);
    var template = Handlebars.compile(source);
    var parent = $("#templatedfavorites");

    var html = template(dummy)
    for (var i = 0; i<favorites.length; i++) {
        var curdata = favorites[i];
        var curhtml = template(curdata);
        parent.append(curhtml);
    }
}