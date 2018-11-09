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

// RECIPE STORAGE TO LOCALSTORAGE
var recipes = [
    {'name': 'Chicken and Kale Soup','index': '1', 'href':'./chicken_kale_soup_recipe.html'},
    {'name': 'Cranberry Kale Salad','index': '2', 'href':'./cranberry_kale_salad_recipe.html'},
    {'name': 'Chinese Style Kale','index': '3', 'href':'./chinese_style_kale_recipe.html'},
    {'name': 'Kale Chips','index': '4', 'href':'./kale_chips_recipe.html'},
    {'name': 'Kale Pesto','index': '5', 'href':'./kale_pesto_recipe.html'},
]

localStorage.setItem('allrecipes',JSON.stringify(recipes));
var source = document.getElementById("recipetemplate").innerHTML;
var template = Handlebars.compile(source);
var parent = $("#recipelist");

for (var i = 0; i<recipes.length; i++) {
    var curdata = recipes[i];
    var curhtml = template(curdata);
    parent.append(curhtml);
}