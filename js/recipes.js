/// Calls this while document not ready
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

    window.onclick = function(event) {
        if (event.target != document.getElementById('mainnav') && event.target !=document.getElementById('opensidebar') && event.target !=document.getElementById('closesidebar')) {
            closeNav();
        }
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
    console.log(ingredientslist);

    localStorage.setItem('allrecipes',JSON.stringify(recipes));
    var source = document.getElementById("recipetemplate").innerHTML;
    var template = Handlebars.compile(source);
    var parent = $("#recipedeposit");
    if (localitemref) {
        for (var i = 0; i<recipes.length; i++) {
            var curdata = recipes[i];
            var curhtml = template(curdata);
            parent.append(curhtml);
        }
    }
    else
        $('#empty-message').show();

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
    {'name': 'Chicken and Kale Soup','index': '1', 'href':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup', 'img':'./images/Chicken-Kale-Detox-Soup.jpg'},
    {'name': 'Cranberry Kale Salad','index': '2', 'href':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad','img':'./images/Cranberry-Kale-Salad.jpg'},
    {'name': 'Chinese Style Kale','index': '3', 'href':'./recipe_template.html?recipe=Chinese%20Style%20Kale','img':'./images/Chinese-Style-Kale.jpg'},
    {'name': 'Kale Chips','index': '4', 'href':'./recipe_template.html?recipe=Kale%20Chips','img':'./images/kale-chips.jpg'},
    {'name': 'Kale Pesto','index': '5', 'href':'./recipe_template.html?recipe=Kale%20Pesto','img':'./images/kale-pesto.jpg'},
]

$('#ingredientslist').click(function() {
    window.location = "./kitchen.html"; // Go to kitchen page
  });
