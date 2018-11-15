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
    {'name': 'Chicken and Kale Soup','index': '1', 'href':'./chicken_kale_soup_recipe.html', 'img':'./Chicken-Kale-Detox-Soup.jpg'},
    {'name': 'Cranberry Kale Salad','index': '2', 'href':'./cranberry_kale_salad_recipe.html','img':'./Cranberry-Kale-Salad.jpg'},
    {'name': 'Chinese Style Kale','index': '3', 'href':'./chinese_style_kale_recipe.html','img':'./Chinese-Style-Kale.jpg'},
    {'name': 'Kale Chips','index': '4', 'href':'./kale_chips_recipe.html','img':'./kale-chips.jpg'},
    {'name': 'Kale Pesto','index': '5', 'href':'./kale_pesto_recipe.html','img':'./kale-pesto.jpg'},
]

localStorage.setItem('allrecipes',JSON.stringify(recipes));
var source = document.getElementById("recipetemplate").innerHTML;
var template = Handlebars.compile(source);
var parent = $("#recipedeposit");

for (var i = 0; i<recipes.length; i++) {
    var curdata = recipes[i];
    var curhtml = template(curdata);
    parent.append(curhtml);
}

var ingredsource = document.getElementById("ingredientstemplate").innerHTML;
var ingredtemplate = Handlebars.compile(ingredsource);
var ingredientslist = $("#ingredientslist");
var localitemref = JSON.parse(localStorage.getItem("kitchen"));
if (localitemref) {
    for (var i = 0; i<localitemref.length; i++) {
        var ingredients = localitemref[i];
        var stuff = ingredtemplate(ingredients);
        ingredientslist.append(stuff);
    }
}


$('#ingredientslist').click(function() {
    window.location = "./kitchen.html"; // Go to kitchen page
  });
